export const mockDB = {
  projects: [
    {
      id: 1,
      title: "ProjectHub",
      status: "Active",
      progress: 70,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      status: "In Progress",
      progress: 40,
    },
  ],

  tasks: [
    {
      id: 1,
      title: "Build Navbar",
      status: "In Progress",
      priority: "High",
      owner: "Alex",
    },
    {
      id: 2,
      title: "Setup API Layer",
      status: "Todo",
      priority: "Medium",
      owner: "Sarah",
    },
  ],

  users: [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Admin",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Developer",
    },
  ],

  events: [
    {
      id: 1,
      title: "Team Meeting",
      date: 4,
    },
    {
      id: 2,
      title: "Review",
      date: 10,
    },
  ],
};
