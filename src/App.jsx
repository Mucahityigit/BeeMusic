import { RouterProvider } from "react-router-dom";
import "./App.css";
import rootes from "./routes/Index";
function App() {
  return <RouterProvider router={rootes}></RouterProvider>;
}

export default App;
