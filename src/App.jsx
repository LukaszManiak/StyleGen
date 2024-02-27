import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";

import BorderRadiusGen from "./features/border-radius-generator/BorderRadiusGen";
import FlexboxGen from "./features/flexbox-generator/FlexboxGen";
import GridGen from "./features/grid-generator/GridGen";
import TextShadowGen from "./features/text-shadow-generator/TextShadowGen";
import AppLayout from "./ui/AppLayout";
import BoxShadowGen from "./features/box-shadow-generator/BoxShadowGen";
import ListStyleGen from "./features/list-style-generator/ListStyleGen";
import LetterSpacingGen from "./features/letter-spacing-generator/LetterSpacingGen";
import GradientGen from "./features/gradient-generator/GradientGen";
import LineHeightGen from "./features/line-height-generator/LineHeightGen";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/line-height",
        element: <LineHeightGen />,
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
      {
        path: "/list-style",
        element: <ListStyleGen />,
      },
      {
        path: "/letter-spacing",
        element: <LetterSpacingGen />,
      },
      {
        path: "/gradient",
        element: <GradientGen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
