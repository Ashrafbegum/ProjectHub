import { state } from "../core/state.js";
import { mockDB } from "../data/mock-db.js";

export function loadProjects() {
  state.projects = [...mockDB.projects];
}

export function filterProjects(searchText) {
  state.filters.projects.search = searchText;

  return state.projects.filter((p) =>
    p.title.toLowerCase().includes(searchText.toLowerCase()),
  );
}
