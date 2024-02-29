import { useReducer } from "react";
import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  selectedStandard: "px",
  topRight: 0,
  topLeft: 0,
  bottomRight: 0,
  bottomLeft: 0,
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "topLeftChange":
      return {
        ...state,
        topLeft: action.payload > 150 ? 150 : +action.payload,
      };
    case "topRightChange":
      return {
        ...state,
        topRight: action.payload > 150 ? 150 : +action.payload,
      };
    case "bottomRightChange":
      return {
        ...state,
        bottomRight: action.payload > 150 ? 150 : +action.payload,
      };
    case "bottomLeftChange":
      return {
        ...state,
        bottomLeft: action.payload > 150 ? 150 : +action.payload,
      };
    case "standardChange":
      return {
        ...state,
        selectedStandard: action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function BorderRadiusGen() {
  const [
    { selectedStandard, topRight, topLeft, bottomRight, bottomLeft },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <section className="mt-8 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md border border-text px-4 py-2 md:w-1/2">
          <b className="text-accent">Border-radius</b> is a CSS property that
          allows you to create rounded corners for elements such as boxes and
          buttons. This property is commonly used for creating{" "}
          <span className="text-primary">visually appealing</span> user
          interfaces and elements on webpages.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="w-full  rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-2 text-3xl">Border-radius</h2>
          <div className="flex w-1/2 gap-x-4">
            <button
              className={
                selectedStandard === "px"
                  ? "rounded-lg border-2 border-accent px-2 py-1"
                  : "px-2 py-1"
              }
              onClick={() =>
                dispatch({ type: "standardChange", payload: "px" })
              }
            >
              Pixels
            </button>
            <button
              className={
                selectedStandard === "%"
                  ? "rounded-lg border-2 border-accent px-2 py-1"
                  : "px-2 py-1"
              }
              onClick={() => dispatch({ type: "standardChange", payload: "%" })}
            >
              Percents
            </button>
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Top left</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({ type: "topLeftChange", payload: e.target.value })
                }
                type="number"
                value={topLeft}
                min="0"
                max="150"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "topLeftChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="150"
              value={topLeft}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Top right</p>

              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({ type: "topRightChange", payload: e.target.value })
                }
                type="number"
                value={topRight}
                min="0"
                max="150"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "topRightChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="150"
              value={topRight}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Bottom right</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "bottomRightChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={bottomRight}
                min="0"
                max="150"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "bottomRightChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="150"
              value={bottomRight}
              step="1"
            />
          </div>
          <div>
            <div className="flex w-full justify-between">
              <p>Bottom left</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "bottomLeftChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={bottomLeft}
                min="0"
                max="150"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "bottomLeftChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="150"
              value={bottomLeft}
              step="1"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className=" h-56 w-56 border-2 border-text bg-background"
            style={{
              borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
            }}
          ></div>
        </div>
      </div>

      <div className="mb-4 w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className=" text-background">
            {`border-radius: ${topLeft}${selectedStandard} ${topRight}${selectedStandard} ${bottomRight}${selectedStandard} ${bottomLeft}${selectedStandard};`}
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `border-radius: ${topLeft}${selectedStandard} ${topRight}${selectedStandard} ${bottomRight}${selectedStandard} ${bottomLeft}${selectedStandard};`,
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

export default BorderRadiusGen;
