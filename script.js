// Shared header, footer, photo fallback and publication list.
const PAGES = [["index.html", "About"], ["publications.html", "Publications"]];
const page = document.body.dataset.page;
document.getElementById("top").innerHTML = `<div class="wrap">
  <a class="brand" href="index.html">Afsana Khan</a>
  <nav aria-label="Main">${PAGES.map(([h, n]) => `<a href="${h}"${h === page ? ' aria-current="page"' : ""}>${n}</a>`).join("")}</nav></div>`;
document.getElementById("foot").innerHTML = `<div class="wrap">© ${new Date().getFullYear()} Afsana Khan.</div>`;

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
