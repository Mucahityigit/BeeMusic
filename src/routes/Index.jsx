import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Artist from "../pages/Artist";
import Album from "../pages/Album";
import Favorite from "../pages/Favorite";
import Song from "../pages/Song";
import Discover from "../pages/Discover";
import Category from "../pages/Category";

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
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/artist/:artistID",
        element: <Artist />,
      },
      {
        path: "/album/:albumID",
        element: <Album />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/song/:songID",
        element: <Song />,
      },
      {
        path: "/category/:genre",
        element: <Category />,
      },
    ],
  },
  // {
  //   path: "forgot-password",
  //   element: <ForgotPassword />,
  // },
]);

export default rootes;
