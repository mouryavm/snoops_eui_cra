// Define your sideNav data
export const SideBarNavData = [
  {
    name: "Dashboard",
    id: 0,
    icon: "dashboardApp",
    path:"dashboard"
  },
  {
    name: "Reports",
    id: 1,
    icon: "reportingApp",
    path:"reports"
  },
  {
    name: "Settings",
    id: 2,
    icon: "managementApp",
    path:"dashboard",
    items: [
      {
        name: "Profile",
        id: 20,
      },
      {
        name: "Preferences",
        id: 21,
      },
    ],
  },
];
