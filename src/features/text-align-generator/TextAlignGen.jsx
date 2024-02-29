import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  alignType: "center",
};

function reducer(state, action) {
  switch (action.type) {
    //opening task modal form
    case "alignTypeChange":
      return {
        ...state,
        alignType: action.payload,
      };
    default:
      throw new Error("Unknown");
  }
}

function TextAlignGen() {
  const [{ alignType }, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md border border-text px-4 py-2 md:w-1/2">
          The <b className="text-accent">text-align</b> property in CSS is used
          to specify the horizontal alignment of text within its containing
          element. It accepts values such as "left", "right", "center" and
          "justify" which depend on the document's writing direction. This
          property is commonly used to control the{" "}
          <span className="text-primary">alignment</span> of text within
          paragraphs, headings, and other textual elements on a webpage.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="h-1/4 w-full rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-3xl tracking-widest">Text align</h2>
          <div className="flex items-center justify-between">
            <p>Align value</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "alignTypeChange",
                  payload: e.target.value,
                })
              }
              type="alignType"
              value={alignType}
            >
              <option value="center">center</option>
              <option value="justify">justify</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-auto w-3/4 overflow-hidden rounded-md border-2 border-text bg-background p-4"
            style={{
              textAlign: `${alignType}`,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum sapien id sem lacinia, nec molestie eros venenatis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
        </div>
      </div>

      <div className="mb-8 w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-start justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p className=" text-background">{`text-align: ${alignType};`}</p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(`text-align: ${alignType};`);
            }}
          >
            📋 Copy code
          </button>
        </div>
      </div>
    </section>
  );
}

export default TextAlignGen;
