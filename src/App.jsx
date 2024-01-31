import { RouterProvider } from "react-router-dom";
import "./App.css";
import rootes from "./routes/Index";
import { useSelector } from "react-redux";
import Login from "./auth/Login";

function App() {
  const { token } = useSelector((state) => state.token);

  return (
    <>{token ? <RouterProvider router={rootes}></RouterProvider> : <Login />}</>
  );
}

export default App;
