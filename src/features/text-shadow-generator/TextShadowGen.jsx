import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  text: "Lorem ipsum dolor sit amet...",
  horizontal: 10,
  vertical: 10,
  blur: 30,
  color: "#020d0d",
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
    case "colorChange":
      return {
        ...state,
        color: action.payload,
      };
    case "textChange":
      return {
        ...state,
        text: action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function TextShadowGen() {
  const [{ horizontal, vertical, blur, text, color }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />
      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md border border-text px-4 py-2 md:w-1/2">
          The <b className="text-accent">Text-shadow</b> property in CSS enables
          the addition of shadows to text. This property is often utilized to
          add <span className="text-primary">emphasis</span> or{" "}
          <span className="text-primary">decorative</span> effects to text
          elements on a webpage.
        </p>
      </div>
      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-2 text-3xl tracking-widest">Text-shadow</h2>

          <div>
            <div>
              <p>Text</p>
              <input
                className="w-auto rounded-md border border-text p-1 px-2"
                type="text"
                value={text}
                onChange={(e) =>
                  dispatch({ type: "textChange", payload: e.target.value })
                }
              />
            </div>

            <div className="flex w-full justify-between">
              <p>Horizontal</p>
              <input
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
          <div className="flex w-full justify-between">
            <p>Color:</p>
            <input
              onChange={(e) =>
                dispatch({ type: "colorChange", payload: e.target.value })
              }
              type="color"
              value={color}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="flex h-56 w-56 items-center justify-center  text-text"
            style={{
              textShadow: `${horizontal}px ${vertical}px ${blur}px ${color}`,
            }}
          >
            {text}
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className=" text-background">
            {`text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color};`}
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `text-shadow: ${horizontal}px ${vertical}px ${blur}px ${color};`,
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

export default TextShadowGen;
