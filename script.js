// Shared header, footer, photo fallback and publication list.
const PAGES = [["index.html", "About"], ["publications.html", "Publications"]];
const SOCIAL = [
  ["mailto:afsana.291094@gmail.com", "Email", "fa-solid fa-envelope"],
  ["https://scholar.google.com/citations?hl=en&user=tP5eQtcAAAAJ&view_op=list_works&authuser=1&sortby=pubdate", "Google Scholar", "ai ai-google-scholar"],
  ["https://github.com/Afsana2910", "GitHub", "fa-brands fa-github"],
  ["https://www.linkedin.com/in/afsanakhan2910/", "LinkedIn", "fa-brands fa-linkedin-in"],
  ["files/CV.pdf", "CV", "CV"]
];
const page = document.body.dataset.page;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") document.documentElement.dataset.theme = savedTheme;
document.getElementById("top").innerHTML = `<div class="wrap">
  <div class="top-social">${SOCIAL.map(([href, label, icon]) => `<a href="${href}" aria-label="${label}" title="${label}">${icon === "CV" ? "CV" : `<i class="${icon}" aria-hidden="true"></i>`}</a>`).join("")}</div>
  <div class="header-actions">
    <nav aria-label="Main">${PAGES.map(([h, n]) => `<a href="${h}"${h === page ? ' aria-current="page"' : ""}>${n}</a>`).join("")}</nav>
    <button class="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false"><i class="fa-solid fa-moon" aria-hidden="true"></i></button>
  </div></div>`;
document.getElementById("foot").innerHTML = `<div class="wrap">© ${new Date().getFullYear()} Afsana Khan.</div>`;

const themeToggle = document.querySelector(".theme-toggle");
const setTheme = theme => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  const dark = theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.innerHTML = `<i class="fa-solid fa-${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
};
setTheme(document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

const img = document.querySelector(".photo img");
if (img) img.addEventListener("error", () => { const d = document.createElement("div"); d.className = "ini"; d.textContent = "AK"; img.replaceWith(d); });

const box = document.getElementById("pubs");
if (box) {
  const titleSlug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const render = f => {
    const list = PUBS.filter(p => f === "all" || p.type === f);
    const years = [...new Set(list.map(p => p.year))].sort((a, b) => b - a);
    box.innerHTML = years.map(y => `<h3 class="year">${y}</h3><ul class="pubs">${list.filter(p => p.year === y).map(p => `
      <li id="pub-${titleSlug(p.title)}"><span class="t">${p.title}</span><br>${p.authors} <em>${p.venue}</em>.
      ${p.note ? `<span class="tag">${p.note}</span>` : ""}
      <span class="lk">${Object.entries(p.links).map(([k, v]) => `<a href="${v}">${k}</a>`).join("")}</span>
      <span class="pub-actions">
        <details class="abstract"><summary>Abstract</summary><div class="abstract-box">${p.abstract || "Abstract not available yet."}</div></details>
        ${p.links.pdf ? `<a class="pub-pdf" href="${p.links.pdf}" target="_blank" rel="noopener">PDF</a>` : `<span class="pub-pdf unavailable" aria-disabled="true">PDF unavailable</span>`}
      </span></li>`).join("")}</ul>`).join("");
  };
  document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(x => x.classList.remove("on"));
    b.classList.add("on"); render(b.dataset.f);
  }));
  render("all");
}
