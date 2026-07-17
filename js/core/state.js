export const state = {
  projects: [],
  tasks: [],
  users: [],
  events: [],

  filters: {
    projects: {
      search: "",
      status: "all",
    },
    tasks: {
      search: "",
      status: "all",
      priority: "all",
    },
  },
};
