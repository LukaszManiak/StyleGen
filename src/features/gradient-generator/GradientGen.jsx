import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  selectedStandard: "linear",
  angleValue: 90,
  vertical: 10,
  blur: 30,
  spread: 0,
  color: "#5EACB5",
  inset: false,
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "angleValueChange":
      if (action.payload > 360 || action.payload < 0) return state;
      return {
        ...state,
        angleValue: +action.payload,
      };
    case "verticalChange":
      if (action.payload > 100 || action.payload < -100) return state;
      return {
        ...state,
        vertical: +action.payload,
      };
    case "blurChange":
      if (action.payload > 100 || action.payload < 0) return state;
      return {
        ...state,
        blur: +action.payload,
      };
    case "spreadChange":
      if (action.payload > 100 || action.payload < -100) return state;
      return {
        ...state,
        spread: +action.payload,
      };
    case "colorChange":
      return {
        ...state,
        color: action.payload,
      };
    case "standardChange":
      return {
        ...state,
        selectedStandard: action.payload,
      };
    // case "addBox":
    //   if (state.boxArray.length < 8) {
    //     return {
    //       ...state,
    //       boxArray: [...state.boxArray, 1],
    //     };
    //   } else {
    //     return state;
    //   }
    // case "removeBox":
    //   if (state.boxArray.length > 3) {
    //     return {
    //       ...state,
    //       boxArray: [...state.boxArray.slice(0, -1)],
    //     };
    //   } else {
    //     return state;
    //   }
    case "resetSettings":
      return {
        ...initialState,
      };
    default:
      throw new Error("Unknown");
  }
}

function GradientGen() {
  const [{ angleValue, color, spread, selectedStandard }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />
      <h1 className="w-full px-12 text-3xl">(not finished yet...)</h1>
      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md border border-text px-4 py-2 md:w-1/2">
          <b className="text-accent">CSS gradients</b> allow smooth color
          transitions in backgrounds, borders, or text. Linear gradients create
          transitions along a line, while radial gradients radiate from a center
          point. They offer <span className="text-primary">flexibility</span> in
          color blending for{" "}
          <span className="text-primary"> visually appealing</span> web design.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-2 text-3xl tracking-widest">Gradient</h2>

          <div className="flex w-1/2 gap-x-4">
            <button
              className={
                selectedStandard === "linear"
                  ? "rounded-lg border-2 border-accent px-2 py-1"
                  : "px-2 py-1"
              }
              onClick={() =>
                dispatch({ type: "standardChange", payload: "linear" })
              }
            >
              Linear
            </button>
            <button
              className={
                selectedStandard === "radial"
                  ? "rounded-lg border-2 border-accent px-2 py-1"
                  : "px-2 py-1"
              }
              onClick={() =>
                dispatch({ type: "standardChange", payload: "radial" })
              }
            >
              Radial
            </button>
          </div>

          <div>
            <div className="flex w-full justify-between">
              <p>Angle</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "angleValueChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={angleValue}
                min="0"
                max="360"
              />
            </div>
            <input
              className="w-1/2"
              onChange={(e) =>
                dispatch({ type: "angleValueChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="360"
              value={angleValue}
              step="1"
            />
          </div>

          <div>
            <div className="flex w-full justify-between">
              <p>Color 1:</p>
              <div className="flex items-center gap-x-4">
                <input
                  onChange={(e) =>
                    dispatch({ type: "colorChange", payload: e.target.value })
                  }
                  type="color"
                  value={color}
                />
                <input
                  className="rounded-md border border-text px-2"
                  onChange={(e) =>
                    dispatch({
                      type: "spreadChange",
                      payload: e.target.value,
                    })
                  }
                  type="number"
                  value={spread}
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <input
              className="w-1/2"
              onChange={(e) =>
                dispatch({ type: "spreadChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="100"
              value={spread}
              step="1"
            />
          </div>

          <div className="flex w-full items-center gap-x-4">
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "addBox" })}
            >
              +Add
            </button>
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "removeBox" })}
            >
              -Remove
            </button>
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "resetSettings" })}
            >
              Reset settings
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-2 md:w-1/2">
          <div
            className="h-4/5 w-4/5 rounded-md border-2 border-text bg-background"
            // style={{
            //   boxShadow: `${inset ? "inset" : ""} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`,
            // }}
          ></div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
        <div className="flex w-full flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row md:items-center">
          <p className=" text-background">
            {`background-color: rgba(76, 186, 186, 1);`}
            <br />
            {`background-image: linear-gradient(90deg, rgba(76, 186, 186, 1) 0%, rgba(0, 0, 0, 1) 100%);`}
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `background-image: linear-gradient(90deg, rgba(76, 186, 186, 1) 0%, rgba(0, 0, 0, 1) 100%);`,
              );
            }}
          >
            📋 Copy code
          </button>
        </div>
      </div>
    </section>
  );
}

export default GradientGen;
