import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";

const rootes = createBrowserRouter([
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

export default rootes;
