import { state } from "../core/state.js";

export function renderTasks() {
  const table = document.querySelector(".table tbody");

  if (!table) return;

  table.innerHTML = state.tasks
    .map(
      (t) => `
        <tr>
            <td>${t.title}</td>
            <td>${t.status}</td>
            <td>${t.priority}</td>
            <td>${t.owner}</td>
        </tr>
    `,
    )
    .join("");
}
