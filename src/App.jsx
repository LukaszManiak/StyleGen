import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";

import BorderRadiusGen from "./features/border-radius-generator/BorderRadiusGen";
import FlexboxGen from "./features/flexbox-generator/FlexboxGen";
import GridGen from "./features/grid-generator/GridGen";
import TextShadowGen from "./features/text-shadow-generator/TextShadowGen";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import BoxShadowGen from "./features/box-shadow-generator/BoxShadowGen";
import TextDecorationGen from "./features/text-decoration-generator/TextDecorationGen";
import LetterSpacingGen from "./features/letter-spacing-generator/LetterSpacingGen";
import GradientGen from "./features/gradient-generator/GradientGen";
import ColorGen from "./features/text-color-generator/ColorGen";
import LineHeightGen from "./features/line-height-generator/LineHeightGen";
import TextAlignGen from "./features/text-align-generator/TextAlignGen";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
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
        path: "/text-decoration",
        element: <TextDecorationGen />,
      },
      {
        path: "/letter-spacing",
        element: <LetterSpacingGen />,
      },
      {
        path: "/gradient",
        element: <GradientGen />,
      },
      {
        path: "/text-color",
        element: <ColorGen />,
      },
      {
        path: "/text-align",
        element: <TextAlignGen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
