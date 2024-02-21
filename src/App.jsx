import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import ButtonGen from "./features/button/ButtonGen";
import BorderRadiusGen from "./features/border-radius/BorderRadiusGen";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/button",
        element: <ButtonGen />,
      },
      {
        path: "/border",
        element: <BorderRadiusGen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
