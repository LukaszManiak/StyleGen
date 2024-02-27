import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  color: "#5eacb5",
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "colorChange":
      return {
        ...state,
        color: action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function ColorGen() {
  const [{ color }, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />
      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="h-1/4 w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2>Color</h2>
          <div className="flex justify-between">
            <p>Color value</p>

            <input
              onChange={(e) =>
                dispatch({
                  type: "colorChange",
                  payload: e.target.value,
                })
              }
              type="color"
              value={color}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-auto w-3/4 overflow-hidden rounded-md border-4 border-text bg-background p-4"
            style={{
              color: `${color}`,
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum sapien id sem lacinia, nec molestie eros venenatis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className=" text-background">{`color: ${color};`}</p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(`color: ${color};`);
            }}
          >
            📋 Copy code
          </button>
        </div>
      </div>
    </section>
  );
}

export default ColorGen;
