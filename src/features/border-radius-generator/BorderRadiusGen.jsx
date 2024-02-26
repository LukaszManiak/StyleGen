import { useReducer } from "react";
import { Link } from "react-router-dom";

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
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <Link
        className="w-full px-12 transition-all ease-in-out hover:px-6 hover:font-bold"
        to="/"
      >
        👈🏼 Go back
      </Link>
      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2>Border-radius</h2>
          <div className="flex w-1/2 gap-x-4">
            <button
              className={
                selectedStandard === "px"
                  ? "rounded-lg border-2 border-accent"
                  : ""
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
                  ? "rounded-lg border-2 border-accent"
                  : ""
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
            className=" h-56 w-56 border-4 border-text bg-primary"
            style={{
              borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
            }}
          ></div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
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
