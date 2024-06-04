import { useReducer } from "react";
import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  scale: 1,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  skewX: 0,
  skewY: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "scaleChange":
      return {
        ...state,
        scale: action.payload > 2 ? 2 : +action.payload,
      };
    case "rotateChange":
      return {
        ...state,
        rotate: action.payload > 360 ? 360 : +action.payload,
      };
    case "translateXChange":
      return {
        ...state,
        translateX: action.payload > 100 ? 100 : +action.payload,
      };
    case "translateYChange":
      return {
        ...state,
        translateY: action.payload > 100 ? 100 : +action.payload,
      };
    case "skewXChange":
      return {
        ...state,
        skewX: action.payload > 100 ? 100 : +action.payload,
      };
    case "skewYChange":
      return {
        ...state,
        skewY: action.payload > 100 ? 100 : +action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function TransformGen() {
  const [{ scale, rotate, translateX, translateY, skewX, skewY }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <section className="mt-8 flex w-full flex-col items-center justify-around gap-y-20 md:mt-20">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md border border-text px-4 py-2 md:w-1/2">
          The <b className="text-accent">Transform</b> property in CSS enables
          the application of various transformations like scaling, rotating,
          translating, and skewing elements. This property is often utilized to
          add emphasis or decorative effects to elements on a webpage.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-2 text-3xl">Transform</h2>
          <div>
            <div className="flex w-full justify-between">
              <p>Scale</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({ type: "scaleChange", payload: e.target.value })
                }
                type="number"
                value={scale}
                min="0"
                max="2"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "scaleChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="2"
              value={scale}
              step="0.1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Rotate</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({ type: "rotateChange", payload: e.target.value })
                }
                type="number"
                value={rotate}
                min="0"
                max="360"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "rotateChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="360"
              value={rotate}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Translate X</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "translateXChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={translateX}
                min="-100"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "translateXChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={translateX}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Translate Y</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "translateYChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={translateY}
                min="-100"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "translateYChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={translateY}
              step="1"
            />
          </div>

          <div>
            <div className="flex w-full justify-between">
              <p>Skew X</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "skewXChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={skewX}
                min="-100"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "skewXChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={skewX}
              step="1"
            />
          </div>

          <div>
            <div className="flex w-full justify-between">
              <p>Skew Y</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "skewYChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={skewY}
                min="-100"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "skewYChange", payload: e.target.value })
              }
              type="range"
              min="-100"
              max="100"
              value={skewY}
              step="1"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-56 w-56 rounded-lg border-2 border-text bg-accent"
            style={{
              transform: `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`,
            }}
          ></div>
        </div>
      </div>

      <div className="mb-4 w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className="text-background">
            {`transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg);`}
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `transform: scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg);`,
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

export default TransformGen;
