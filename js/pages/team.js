import { users } from "../data/dummy-data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTeam();
});

function renderTeam() {
  const table = document.querySelector(".table tbody");

  if (!table) return;

  table.innerHTML = users
    .map(
      (u) => `
        <tr>
            <td>${u.name}</td>
            <td>${u.role}</td>
        </tr>
    `,
    )
    .join("");
}
