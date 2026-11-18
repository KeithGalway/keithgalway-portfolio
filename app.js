// projects.js loads first; its ordered entries are the source of the visible collection.
const grid = document.querySelector("#projects-grid");

projects.forEach((project, index) => {
  const number = String(index + 1).padStart(2, "0");

  // Only projects with a destination are links. Empty slots remain non-interactive
  // articles, so visitors are not sent to placeholder URLs.
  const isLive = Boolean(project.url);
  const card = document.createElement(isLive ? "a" : "article");
  card.className = "project-card";

  if (isLive) {
    // Project websites open separately; rel prevents the new tab controlling this page.
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", `${project.title || `Project ${number}`} (opens in a new tab)`);
  }

  const visual = document.createElement("div");
  // Five visual treatments repeat across the ten slots until screenshots are supplied.
  visual.className = `project-visual visual-${(index % 5) + 1}`;
  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    // The title beside the screenshot identifies the project; the image is decorative.
    image.alt = "";
    image.loading = "lazy";
    visual.append(image);
  } else {
    // The markup below contains only fixed artwork and the generated numeric index.
    // User-editable project text is assigned with textContent further down.
    const artwork = document.createElement("div");
    artwork.className = "project-artwork";
    artwork.innerHTML = `<span class="artwork-label">A LITTLE SOMETHING<br>IN THE MAKING</span><span class="artwork-shape"></span><span class="artwork-number">${number}</span><span class="artwork-star">✳</span>`;
    visual.append(artwork);
  }

  const badge = document.createElement("span");
  badge.className = "project-badge";
  badge.textContent = isLive ? "LIVE PROJECT" : "COMING SOON";
  visual.append(badge);

  const info = document.createElement("div");
  info.className = "project-info";
  const text = document.createElement("div");
  const title = document.createElement("h3");
  // Empty fields retain readable defaults while a project is still being prepared.
  title.textContent = project.title || `Project ${number}`;
  const category = document.createElement("p");
  category.textContent = project.category || "A little space for a big idea";
  text.append(title, category);
  const arrow = document.createElement("span");
  arrow.className = "project-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = isLive ? "↗" : "+";
  info.append(text, arrow);
  card.append(visual, info);
  grid.append(card);
});

// Keep the copyright year current without requiring an annual manual edit.
document.querySelector("#year").textContent = new Date().getFullYear();
