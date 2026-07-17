import { loadProjects } from "../services/projectService.js";
import { loadTasks } from "../services/taskService.js";

import { renderDashboard } from "../ui/renderDashboard.js";
import { renderProjects } from "../ui/renderProjects.js";
import { renderTasks } from "../ui/renderTasks.js";

document.addEventListener("DOMContentLoaded", () => {
  // LOAD DATA INTO STATE
  loadProjects();
  loadTasks();

  // ROUTE-BASED SIMPLE INIT
  const page = document.body.dataset.page;

  switch (page) {
    case "dashboard":
      renderDashboard();
      break;

    case "projects":
      renderProjects();
      break;

    case "tasks":
      renderTasks();
      break;
  }
});
