import { useReducer } from "react";
import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  spaceValue: 5,
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "spaceValueChange":
      return {
        ...state,
        spaceValue: action.payload > 100 ? 100 : +action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function LetterSpacingGen() {
  const [{ spaceValue }, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md border border-text px-4 py-2 md:w-1/2">
          The <b className="text-accent">letter-spacing</b> property in CSS
          controls the amount of space between characters in a text element.
          This property is commonly used for adjusting the spacing of text to
          <span className="text-primary"> improve readability</span> or{" "}
          <span className="text-primary">achieve</span> a specific design
          aesthetic.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="h-1/4 w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-2 text-3xl tracking-widest">Letter Spacing</h2>
          <div>
            <div className="flex w-full justify-between">
              <p>Space Value</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "spaceValueChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={spaceValue}
                min="0"
                max="100"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({ type: "spaceValueChange", payload: e.target.value })
              }
              type="range"
              min="0"
              max="100"
              value={spaceValue}
              step="1"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-auto w-3/4 overflow-hidden rounded-md border-2 border-text bg-background p-4"
            style={{
              letterSpacing: `${spaceValue}px`,
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
          <p className=" text-background">{`letter-spacing: ${spaceValue}px;`}</p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(`letter-spacing: ${spaceValue}px;`);
            }}
          >
            📋 Copy code
          </button>
        </div>
      </div>
    </section>
  );
}

export default LetterSpacingGen;
