import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Artist from "../pages/Artist";

const rootes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/artist/:artistID",
        element: <Artist />,
      },
    ],
  },
  // {
  //   path: "forgot-password",
  //   element: <ForgotPassword />,
  // },
]);

export default rootes;
