import { state } from "../core/state.js";
import { mockDB } from "../data/mock-db.js";

export function loadTasks() {
  state.tasks = [...mockDB.tasks];
}

export function filterTasks(filters) {
  return state.tasks.filter((t) => {
    const matchStatus = filters.status === "all" || t.status === filters.status;

    const matchPriority =
      filters.priority === "all" || t.priority === filters.priority;

    const matchSearch = t.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });
}
