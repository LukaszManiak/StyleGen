import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  decorationType: "underline",
  decorationStyle: "dashed",
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "decorationTypeChange":
      return {
        ...state,
        decorationType: action.payload,
      };
    case "decorationStyleChange":
      return {
        ...state,
        decorationStyle: action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function TextDecorationGen() {
  const [{ decorationType, decorationStyle }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md bg-white px-8 py-8  md:w-1/2">
          {" "}
          The <b className="text-accent">text-decoration</b> property in CSS is
          used to specify the decoration added to text. It can be used to
          underline, overline, strike through, or blink text. This property is
          often used to style links or to add emphasis to certain text elements
          on a webpage.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="h-1/4 w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-3xl tracking-widest">Text decoration</h2>
          <div className="mb-4 flex justify-between">
            <p>Type</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "decorationTypeChange",
                  payload: e.target.value,
                })
              }
              type="decorationType"
              value={decorationType}
            >
              <option value="underline">underline</option>
              <option value="line-through">line-through</option>
              <option value="overline">overline</option>
              <option value="underline">underline</option>
            </select>
          </div>
          <div className="flex justify-between">
            <p>Style</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "decorationStyleChange",
                  payload: e.target.value,
                })
              }
              type="decorationStyle"
              value={decorationStyle}
            >
              <option value="dashed">dashed</option>
              <option value="dotted">dotted</option>
              <option value="double">double</option>
              <option value="solid">solid</option>
              <option value="wavy">wavy</option>
            </select>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-auto w-3/4 overflow-hidden rounded-md border-2 border-text bg-background p-4"
            style={{
              textDecoration: `${decorationType} ${decorationStyle}`,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum sapien id sem lacinia, nec molestie eros venenatis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
        </div>
      </div>

      <div className="mb-10 w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className=" text-background">{`text-decoration: ${decorationType} ${decorationStyle};`}</p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `text-align: ${decorationType} ${decorationStyle};`,
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

export default TextDecorationGen;
