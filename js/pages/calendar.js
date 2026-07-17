import { events } from "../data/dummy-data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
});

function renderEvents() {
  const days = document.querySelectorAll(".calendar__day");

  days.forEach((day) => {
    const date = parseInt(day.textContent);

    const event = events.find((e) => e.date === date);

    if (event) {
      const span = document.createElement("span");
      span.textContent = event.title;
      day.appendChild(span);
    }
  });
}
