import { projects } from "../data/dummy-data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

function renderProjects() {
  const container = document.querySelector(".projects-grid");

  if (!container) return;

  container.innerHTML = projects
    .map(
      (p) => `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.status}</p>
        </div>
    `,
    )
    .join("");
}
