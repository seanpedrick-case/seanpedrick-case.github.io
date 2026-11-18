// Renders project cards from the PROJECTS array defined in projects.js

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function cardHtml(project) {
  const links = (project.links || [])
    .map((l) => `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
    .join("");
  const tags = (project.tags || [])
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");
  const stars = project.stars
    ? `<span class="card-stars">&#9733; ${escapeHtml(String(project.stars))}</span>`
    : "";
  return `
    <article class="card">
      <h3 class="card-title">
        <a href="${escapeHtml(project.repo)}" target="_blank" rel="noopener">${escapeHtml(project.name)}</a>
        ${stars}
      </h3>
      <p class="card-desc">${escapeHtml(project.description)}</p>
      <ul class="tag-list">${tags}</ul>
      <div class="card-links">
        <a href="${escapeHtml(project.repo)}" target="_blank" rel="noopener">GitHub</a>
        ${links}
      </div>
    </article>`;
}

function postHtml(post) {
  const tags = (post.tags || [])
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");
  return `
    <article class="post-item">
      <p class="post-meta">${escapeHtml(post.display || post.date)}</p>
      <h3><a href="${escapeHtml(post.url)}" target="_blank" rel="noopener">${escapeHtml(post.title)}</a></h3>
      <p class="post-summary">${escapeHtml(post.summary)}</p>
      <ul class="tag-list">${tags}</ul>
    </article>`;
}

function sortedPosts() {
  return POSTS.slice().sort((a, b) => b.date.localeCompare(a.date));
}

function renderPosts() {
  if (typeof POSTS === "undefined") return;
  const list = document.getElementById("post-list");
  if (list) list.innerHTML = sortedPosts().map(postHtml).join("");
  const latest = document.getElementById("latest-posts");
  if (latest) latest.innerHTML = sortedPosts().slice(0, 3).map(postHtml).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const featuredGrid = document.getElementById("featured-grid");
  const grid = document.getElementById("project-grid");
  if (featuredGrid && grid && typeof PROJECTS !== "undefined") {
    featuredGrid.innerHTML = PROJECTS.filter((p) => p.featured).map(cardHtml).join("");
    grid.innerHTML = PROJECTS.map(cardHtml).join("");
  }
  renderPosts();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
