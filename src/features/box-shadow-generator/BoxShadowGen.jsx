import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  horizontal: 10,
  vertical: 10,
  blur: 30,
  spread: 0,
  color: "#5EACB5",
  inset: false,
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "horizontalChange":
      if (action.payload > 100 || action.payload < -100) return state;
      return {
        ...state,
        horizontal: +action.payload,
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
    case "insetChange":
      return {
        ...state,
        inset: state.inset === "on" ? "" : action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function BoxShadowGen() {
  const [{ horizontal, vertical, blur, spread, color, inset }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md bg-white px-8 py-8  md:w-1/2">
          The <b className="text-accent">box-shadow</b> property in CSS allows
          you to add a shadow effect to elements, such as boxes or buttons. This
          property is commonly used to add{" "}
          <span className="text-primary">depth</span> and{" "}
          <span className="text-primary">visual emphasis</span> to elements on a
          webpage.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-2 text-3xl tracking-widest">Box-Shadow</h2>

          <div>
            <div className="flex w-full justify-between">
              <p>Horizontal</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "horizontalChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={horizontal}
                min="-100"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "horizontalChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={horizontal}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Vertical</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({ type: "verticalChange", payload: e.target.value })
                }
                type="number"
                value={vertical}
                min="-100"
                max="10"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "verticalChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={vertical}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Blur</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "blurChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={blur}
                min="0"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "blurChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="100"
              value={blur}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Spread</p>
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
                min="-100"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "spreadChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={spread}
              step="1"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Color:</p>
            <input
              onChange={(e) =>
                dispatch({ type: "colorChange", payload: e.target.value })
              }
              type="color"
              value={color}
            />
          </div>
          <div className="flex items-center gap-x-2">
            <p>Inset:</p>
            <input
              onChange={(e) =>
                dispatch({ type: "insetChange", payload: e.target.value })
              }
              type="checkbox"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-56 w-56 rounded-md border-2 border-text bg-background"
            style={{
              boxShadow: `${inset ? "inset" : ""} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`,
            }}
          ></div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className=" text-background">
            {`box-shadow: ${inset ? "inset" : ""} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`}
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `box-shadow: ${inset ? "inset" : ""} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${color};`,
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

export default BoxShadowGen;
