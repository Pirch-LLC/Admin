import Users from "../views/users";
import AddUser from "../views/users/add";

export const PrivateRoutes = [
  {
    path: "/users",
    name: "Users",
    component: Users,
    exact: true,
    children: [
      {
        path: "add",
        name: "Add User",
        component: AddUser,
        exact: true,
      },
      {
        path: ":id",
        name: "Edit User",
        component: AddUser,
        exact: true,
      },
    ],
  },
];
