// Define your sideNav data
export const SideBarNavData = [
  
  {
    name: "Discover",
    id: 0,
    icon: "search",
    path:"discover"
  },{
    name: "Dashboard",
    id: 1,
    icon: "dashboardApp",
    path:"dashboard"
    
  },
  {
    name: "Logs",
    id: 2,
    icon: "visTagCloud",
    path:"logs",
    items: [
      {
        name: "Add Sources",
        id: 20,
        path:"logs/addSources"
      },
      {
        name: "Connected Sources",
        id: 21,
        path:"logs/connectedSources"
      },
    ],
  },
  {
    name: "User Management",
    id: 3,
    icon: "users",
    path:"userManagement"
  },
  {
    name: "Agents",
    id: 4,
    icon: "logstashIf",
  },
  

  {
    name: "Rules",
    id: 5,
    icon: "indexSettings",
    path:"rules",
    items: [
      {
        name: "Rules",
        id: 22,
        path:'rules'
      },
      {
        name: "Alerts",
        id: 23,
        path:'alerts'
      },
    ],
  },
];
