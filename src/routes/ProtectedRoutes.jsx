import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRoutes } from "./AllRoutes";
import { isAuthenticated } from "../services/auth";
import PrivateLayout from "../layout/panel/PrivateLayout";

const Auth = () => {
  return isAuthenticated() ? (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  ) : (
    <Navigate to="/" />
  );
};

// Recursive flattener to convert nested routes into a flat list with full paths
const flattenRoutes = (routes, basePath = "") => {
  return routes.flatMap((route) => {
    const fullPath = `${basePath}/${route.path}`.replace(/\/+/g, "/");

    const currentRoute = {
      path: fullPath,
      element: <route.component />,
    };

    if (route.children) {
      return [currentRoute, ...flattenRoutes(route.children, fullPath)];
    }

    return [currentRoute];
  });
};

export const ProtectedRoutes = () => {
  const flattenedRoutes = flattenRoutes(PrivateRoutes);

  return (
    <Routes>
      <Route element={<Auth />}>
        {flattenedRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};
