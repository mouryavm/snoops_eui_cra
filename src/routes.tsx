import React from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from './pages/Login/index';
import RegisterPage from "./pages/Register";
import ForgotPasswordPage from "./pages/Forgot";


const StatsPage = React.lazy(() => import("./pages/Stats"));
const HomePage = React.lazy(() => import("./pages/Home"));


const IsSignIn = true;

const ProtectedRoute = () => {
  if (IsSignIn) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else return <Navigate to="auth/login" />;
};

const AuthRoute = () => {
  if (IsSignIn) {
    return <Navigate to="/" />;
  } else
    return (
      <div>
        <Outlet />
      </div>
    );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "reports",
        element: <StatsPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthRoute />,
    children: [
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "register",
        element: <RegisterPage/>,
      },
      {
        path: "forgot",
        element: <ForgotPasswordPage/>,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
