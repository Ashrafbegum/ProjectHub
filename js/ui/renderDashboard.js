import { state } from "../core/state.js";

export function renderDashboard() {
  const projectStat = document.querySelector(".stat-projects");
  const taskStat = document.querySelector(".stat-tasks");

  if (projectStat) projectStat.textContent = state.projects.length;
  if (taskStat) taskStat.textContent = state.tasks.length;
}
