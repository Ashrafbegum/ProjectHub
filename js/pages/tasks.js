import { tasks } from "../data/dummy-data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});

function renderTasks() {
  const table = document.querySelector(".table tbody");

  if (!table) return;

  table.innerHTML = tasks
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
