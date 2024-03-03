import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

function createColorForm(id) {
  return {
    id: id,
    vertical: 0,
    color: "#5EACB5",
  };
}

const initialState = {
  selectedStandard: "linear",
  angleValue: 90,
  colorArray: [
    {
      id: 1,
      vertical: 0,
      color: "#5EACB5",
    },
    {
      id: 288,
      vertical: 100,
      color: "#020d0d",
    },
  ],
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
      const { value, id } = action.payload;
      if (value > 100 || value < -100) return state;

      const changedValue = state.colorArray.map((colorItem) => {
        if (colorItem.id === id) {
          return { ...colorItem, vertical: value };
        } else {
          return colorItem;
        }
      });

      return {
        ...state,
        colorArray: changedValue,
      };
    case "colorChange":
      const { colorValue, colorId } = action.payload;

      const changedColors = state.colorArray.map((colorItem) => {
        if (colorItem.id === colorId) {
          return { ...colorItem, color: colorValue };
        } else {
          return colorItem;
        }
      });

      return {
        ...state,
        colorArray: changedColors,
      };
    case "standardChange":
      return {
        ...state,
        selectedStandard: action.payload,
      };
    case "addColor":
      if (state.colorArray.length < 6) {
        return {
          ...state,
          colorArray: [...state.colorArray, createColorForm(new Date() * 2)],
        };
      } else {
        return state;
      }
    case "removeColor":
      if (state.colorArray.length > 2) {
        return {
          ...state,
          colorArray: [...state.colorArray.slice(0, -1)],
        };
      } else {
        return state;
      }
    case "resetSettings":
      return {
        ...initialState,
      };
    default:
      throw new Error("Unknown");
  }
}

function GradientGen() {
  const [{ angleValue, colorArray, selectedStandard }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />
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

          {selectedStandard === "linear" && (
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
                  dispatch({
                    type: "angleValueChange",
                    payload: e.target.value,
                  })
                }
                type="range"
                min="0"
                max="360"
                value={angleValue}
                step="1"
              />
            </div>
          )}

          {colorArray.map((colorItem, index) => (
            <div key={index}>
              <div className="flex w-full justify-between">
                <p>Color {index + 1}:</p>
                <div className="flex items-center gap-x-4">
                  <input
                    onChange={(e) =>
                      dispatch({
                        type: "colorChange",
                        payload: {
                          colorValue: e.target.value,
                          colorId: colorItem.id,
                        },
                      })
                    }
                    type="color"
                    value={colorItem.color}
                  />
                  <input
                    className="rounded-md border border-text px-2"
                    onChange={(e) =>
                      dispatch({
                        type: "verticalChange",
                        payload: {
                          value: e.target.value,
                          id: colorItem.id,
                        },
                      })
                    }
                    type="number"
                    value={colorItem.vertical}
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <input
                className="w-1/2"
                onChange={(e) =>
                  dispatch({
                    type: "verticalChange",
                    payload: {
                      value: e.target.value,
                      id: colorItem.id,
                    },
                  })
                }
                type="range"
                min="0"
                max="100"
                value={colorItem.vertical}
                step="1"
              />
            </div>
          ))}

          <div className="flex w-full items-center gap-x-4">
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "addColor" })}
            >
              +Add
            </button>
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "removeColor" })}
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
            className="h-4/5 w-4/5 rounded-md"
            style={{
              backgroundColor: `${colorArray[0].color}`,
              backgroundImage: `${selectedStandard}-gradient(${selectedStandard === "linear" ? angleValue + "deg" : "circle"}, ${colorArray.map((colorItem) => `${colorItem.color} ${colorItem.vertical}%`)}`,
            }}
          ></div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
        <div className="flex w-full flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row md:items-center">
          <p className=" text-background">
            {`background-color: ${colorArray[0].color};`}
            <br />
            {`background-image: ${selectedStandard}-gradient(${selectedStandard === "linear" ? angleValue + "deg" : "circle"}, ${colorArray.map((colorItem) => `${colorItem.color} ${colorItem.vertical}%`)}) `}
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `background-color: ${colorArray[0].color};
                background-image: ${selectedStandard}-gradient(${selectedStandard === "linear" ? angleValue + "deg" : "circle"}, ${colorArray.map((colorItem) => `${colorItem.color} ${colorItem.vertical}% ,`)}); `,
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
