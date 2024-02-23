import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import ButtonGen from "./features/button-generator/ButtonGen";
import BorderRadiusGen from "./features/border-radius-generator/BorderRadiusGen";
import FlexboxGen from "./features/flexbox-generator/FlexboxGen";
import GridGen from "./features/grid-generator/GridGen";
import TextShadowGen from "./features/text-shadow-generator/TextShadowGen";
import AppLayout from "./ui/AppLayout";
import BoxShadowGen from "./features/box-shadow-generator/BoxShadowGen";

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
      {
        path: "/flexbox",
        element: <FlexboxGen />,
      },
      {
        path: "/grid",
        element: <GridGen />,
      },
      {
        path: "/text-shadow",
        element: <TextShadowGen />,
      },
      {
        path: "/box-shadow",
        element: <BoxShadowGen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
