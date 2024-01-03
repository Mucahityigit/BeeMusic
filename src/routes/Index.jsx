import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../auth/login";

const token = window.localStorage.getItem("token");
let rootes;
if (!token) {
  rootes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
} else {
  window.location.hash = "";
  rootes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "chatpage",
        //   element: <ChatPage />,
        // },
      ],
    },
    // {
    //   path: "forgot-password",
    //   element: <ForgotPassword />,
    // },
  ]);
}

export default rootes;
