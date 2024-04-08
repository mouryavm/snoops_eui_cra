import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Register";
import ForgotPasswordPage from "./pages/Forgot";
import NotFoundPage from "./pages/Error/NotFound";
import AddSourcesPage from "./pages/Logs/AddSources/AddSourcesPage";
import FileUpload from "./pages/Logs/AddSources/Upload/FileUpload";
import S3bucket from "./pages/Logs/AddSources/s3Bucket";
import { useAuthContext } from "./context/AuthContext/AuthProvider";
import InviteOrg from "./pages/InviteOrg/InviteOrg";

const StatsPage = React.lazy(() => import("./pages/Stats"));
const HomePage = React.lazy(() => import("./pages/Home"));

//const IsSignIn = false;

// Function to render protected routes
const ProtectedRoute = () => {
  const { isSignIn } = useAuthContext();
  if (isSignIn) {
    return (
      <Layout.PageLayout>
        <Outlet />
      </Layout.PageLayout>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
};

const AuthRoute = () => {
  const { isSignIn } = useAuthContext();
  if (isSignIn) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
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
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "logs/addSources",
        element: <AddSourcesPage />,
      },
      {
        path: "logs/addSources/fileupload",
        element: <FileUpload />,
      },
      {
        path: "logs/addSources/s3bucket",
        element: <S3bucket />,
      },
      {
        path: "inviteOrg",
        element: <InviteOrg />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthRoute />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
