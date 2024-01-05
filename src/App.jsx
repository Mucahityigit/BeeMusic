import { RouterProvider } from "react-router-dom";
import "./App.css";
import rootes from "./routes/Index";
import { useSelector } from "react-redux";
import Login from "./auth/login";
import { useEffect, useState } from "react";
function App() {
  // const [currentToken, setCurrentToken] = useState(
  //   // window.localStorage.getItem("token")
  // );
  const { token } = useSelector((state) => state.token);
  const [currentToken, setCurrentToken] = useState(token);
  useEffect(() => {
    console.log(currentToken);
    // setCurrentToken(window.localStorage.getItem("token"));
  }, [token]);
  console.log(token);

  return (
    <>{token ? <RouterProvider router={rootes}></RouterProvider> : <Login />}</>
  );
}

export default App;
