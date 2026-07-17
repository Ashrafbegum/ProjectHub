import { state } from "../core/state.js";

export function renderProjects() {
  const container = document.querySelector(".projects-grid");

  if (!container) return;

  container.innerHTML = state.projects
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
