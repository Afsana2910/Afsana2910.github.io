// Shared header, footer, photo fallback and publication list.
const PAGES = [["index.html", "About"], ["publications.html", "Publications"], ["cv.html", "CV"]];
const page = document.body.dataset.page;
document.getElementById("top").innerHTML = `<div class="wrap">
  <a class="brand" href="index.html">Afsana Khan</a>
  <nav aria-label="Main">${PAGES.map(([h, n]) => `<a href="${h}"${h === page ? ' aria-current="page"' : ""}>${n}</a>`).join("")}</nav></div>`;
document.getElementById("foot").innerHTML = `<div class="wrap">© ${new Date().getFullYear()} Afsana Khan. Hosted on GitHub Pages.</div>`;

const img = document.querySelector(".photo img");
if (img) img.addEventListener("error", () => { const d = document.createElement("div"); d.className = "ini"; d.textContent = "AK"; img.replaceWith(d); });

const box = document.getElementById("pubs");
if (box) {
  const render = f => {
    const list = PUBS.filter(p => f === "all" || p.type === f);
    const years = [...new Set(list.map(p => p.year))].sort((a, b) => b - a);
    box.innerHTML = years.map(y => `<h3 class="year">${y}</h3><ul class="pubs">${list.filter(p => p.year === y).map(p => `
      <li><span class="t">${p.title}</span><br>${p.authors} <em>${p.venue}</em>.
      ${p.note ? `<span class="tag">${p.note}</span>` : ""}
      <span class="lk">${Object.entries(p.links).map(([k, v]) => `<a href="${v}">${k}</a>`).join("")}</span></li>`).join("")}</ul>`).join("");
  };
  document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(x => x.classList.remove("on"));
    b.classList.add("on"); render(b.dataset.f);
  }));
  render("all");
}
