import { useReducer } from "react";

import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  displayType: "flex",
  flexDirectionType: "row",
  flexWrapType: "nowrap",
  justifyContentType: "flex-start",
  alignItemsType: "flex-start",
  alignContentType: "flex-start",
  boxArray: [1, 2, 3],
};

function reducer(state, action) {
  switch (action.type) {
    case "displayTypeChange":
      return {
        ...state,
        displayType: action.payload,
      };
    case "flexDirectionTypeChange":
      return {
        ...state,
        flexDirectionType: action.payload,
      };
    case "flexWrapTypeChange":
      return {
        ...state,
        flexWrapType: action.payload,
      };
    case "justifyContentTypeChange":
      return {
        ...state,
        justifyContentType: action.payload,
      };
    case "alignItemsTypeChange":
      return {
        ...state,
        alignItemsType: action.payload,
      };
    case "alignContentTypeChange":
      return {
        ...state,
        alignContentType: action.payload,
      };
    case "addBox":
      if (state.boxArray.length < 8) {
        return {
          ...state,
          boxArray: [...state.boxArray, 1],
        };
      } else {
        return state;
      }
    case "removeBox":
      if (state.boxArray.length > 3) {
        return {
          ...state,
          boxArray: [...state.boxArray.slice(0, -1)],
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

function FlexboxGen() {
  const [
    {
      displayType,
      flexDirectionType,
      flexWrapType,
      justifyContentType,
      alignItemsType,
      alignContentType,
      boxArray,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <section className="mt-10 flex w-full  flex-col items-center justify-around  gap-y-20 md:mt-20 ">
      <GoBackLink />

      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md bg-white px-8 py-8  md:w-1/2">
          {" "}
          <b className="text-accent">Flexbox</b>, short for Flexible Box Layout,
          is a layout model in CSS designed to provide a{" "}
          <span className="text-primary">more efficient way</span> to distribute
          space and align items within a container, even when their size is
          unknown or dynamic. Flexbox is widely used for building
          <span className="text-primary"> responsive</span> and{" "}
          <span className="text-primary">flexible</span> layouts in modern web
          design.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center  gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="h-1/4 w-full  rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-3xl tracking-widest">Flexbox</h2>
          <div className="mb-4 flex justify-between">
            <p>Display</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "displayTypeChange",
                  payload: e.target.value,
                })
              }
              type="displayType"
              value={displayType}
            >
              <option value="flex">flex</option>
              <option value="inline-flex">inline-flex</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p>Flex-direcction</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "flexDirectionTypeChange",
                  payload: e.target.value,
                })
              }
              type="flexDirectionType"
              value={flexDirectionType}
            >
              <option value="row">row</option>
              <option value="column">column</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column-reverse">column-reverse</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p>Flex-wrap</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "flexWrapTypeChange",
                  payload: e.target.value,
                })
              }
              type="flexWrapType"
              value={flexWrapType}
            >
              <option value="wrap">wrap</option>
              <option value="nowrap">nowrap</option>
              <option value="wrap-reverse">wrap-reverse</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p>Justify-content</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "justifyContentTypeChange",
                  payload: e.target.value,
                })
              }
              type="justifyContentType"
              value={justifyContentType}
            >
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p>Align-items</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "alignItemsTypeChange",
                  payload: e.target.value,
                })
              }
              type="alignItemsType"
              value={alignItemsType}
            >
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="baseline">baseline</option>
              <option value="stretch">stretch</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p>Align-content</p>
            <select
              className="rounded-md border border-text px-2"
              onChange={(e) =>
                dispatch({
                  type: "alignContentTypeChange",
                  payload: e.target.value,
                })
              }
              type="alignContentType"
              value={alignContentType}
            >
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="stretch">stretch</option>
            </select>
          </div>

          <div className="flex w-full items-center gap-x-4">
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "addBox" })}
            >
              +Add box
            </button>
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "removeBox" })}
            >
              -Remove box
            </button>
            <button
              className="rounded-md border border-text px-2"
              onClick={() => dispatch({ type: "resetSettings" })}
            >
              Reset settings
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-4/5 w-4/5  rounded-md border-2 border-dotted border-accent bg-white p-4"
            style={{
              display: `${displayType}`,
              flexDirection: `${flexDirectionType}`,
              flexWrap: `${flexWrapType}`,
              justifyContent: `${justifyContentType}`,
              alignItems: `${alignItemsType}`,
              alignContent: `${alignContentType}`,
            }}
          >
            {boxArray.map((box, index) => (
              <div
                className="m-2 h-24 w-24 rounded-sm bg-accent p-2 text-white"
                key={index}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10 flex w-full rounded-lg px-12 py-6">
        <div className="flex w-full flex-col items-start justify-between gap-y-4 rounded-lg bg-text px-6 py-6 text-background md:flex-row md:items-center">
          <p className=" text-background">
            {`display: ${displayType};`}
            <br />
            {`flex-direction: ${flexDirectionType};`}
            <br />
            {`flex-wrap: ${flexWrapType};`}
            <br />
            {`justify-content: ${justifyContentType};`}
            <br />
            {`align-items: ${alignItemsType};`}
            <br />
            {`align-content: ${alignContentType};`}
            <br />
          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `display: ${displayType};\n
                flex-direction: ${flexDirectionType};\n
                flex-wrap: ${flexWrapType};\n
                justify-content: ${justifyContentType};\n
                align-items: ${alignItemsType};\n
                align-content: ${alignContentType};\n`,
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

export default FlexboxGen;
