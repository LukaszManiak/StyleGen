import { useReducer } from "react";
import GoBackLink from "../../ui/GoBackLink";

const initialState = {
  columns: 5,
  rows: 5,
  columnGap: 0,
  rowGap: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "columnsChange":
      return {
        ...state,
        columns: +action.payload > 12 ? 12 : +action.payload,
      };
    case "rowsChange":
      return {
        ...state,
        rows: +action.payload > 12 ? 12 : +action.payload,
      };
    case "columnGapChange":
      return {
        ...state,
        columnGap: +action.payload > 50 ? 50 : +action.payload,
      };
    case "rowGapChange":
      return {
        ...state,
        rowGap: +action.payload > 50 ? 50 : +action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function GridGen() {
  const [{ columns, rows, columnGap, rowGap }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const gridItems = Array.from({ length: columns * rows }, (_, index) => (
    <div
      key={index}
      className="flex items-center justify-center rounded-lg border-2 border-accent"
      style={{ minHeight: "50px", minWidth: "50px" }}
    >
      {index + 1}
    </div>
  ));

  return (
    <section className="mt-10 flex w-full flex-col items-center justify-around gap-y-20 md:mt-20">
      <GoBackLink />
      <div className="w-full px-12 text-xl">
        <p className="w-full rounded-md bg-white px-8 py-8  md:w-1/2">
          {" "}
          <b className="text-accent">CSS Grid</b> is a powerful layout system in
          CSS that allows you to create complex grid-based layouts with rows and
          columns. It enables precise control over the placement and sizing of
          elements within a grid container.CSS Grid is widely used for building
          responsive and dynamic layouts in modern web design.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center gap-y-20 px-12 py-6 md:flex-row md:justify-between md:gap-x-20 md:gap-y-0">
        <div className="flex h-1/4 w-full flex-col gap-y-4 rounded-lg bg-white p-6 md:w-1/2">
          <h2 className="text-3xl tracking-widest">Grid</h2>
          <div>
            <div className="mb-2 flex w-full justify-between">
              <p>Columns</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "columnsChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={columns}
                min="0"
                max="12"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({
                  type: "columnsChange",
                  payload: e.target.value,
                })
              }
              type="range"
              min="0"
              max="12"
              value={columns}
              step="1"
            />
          </div>
          <div>
            <div className="mb-2 flex w-full justify-between">
              <p>Rows</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "rowsChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={rows}
                min="0"
                max="12"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({
                  type: "rowsChange",
                  payload: e.target.value,
                })
              }
              type="range"
              min="0"
              max="12"
              value={rows}
              step="1"
            />
          </div>
          <div>
            <div className="mb-2 flex w-full justify-between">
              <p>Column Gap</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "columnGapChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={columnGap}
                min="0"
                max="50"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({
                  type: "columnGapChange",
                  payload: e.target.value,
                })
              }
              type="range"
              min="0"
              max="50"
              value={columnGap}
              step="1"
            />
          </div>
          <div>
            <div className="mb-2 flex w-full justify-between">
              <p>Row Gap</p>
              <input
                className="rounded-md border border-text px-2"
                onChange={(e) =>
                  dispatch({
                    type: "rowGapChange",
                    payload: e.target.value,
                  })
                }
                type="number"
                value={rowGap}
                min="0"
                max="50"
              />
            </div>
            <input
              onChange={(e) =>
                dispatch({
                  type: "rowGapChange",
                  payload: e.target.value,
                })
              }
              type="range"
              min="0"
              max="50"
              value={rowGap}
              step="1"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 md:w-1/2">
          <div
            className="h-auto w-3/4 overflow-hidden rounded-md border border-text p-4"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              columnGap: `${columnGap}px`,
              rowGap: `${rowGap}px`,
            }}
          >
            {gridItems}
          </div>
        </div>
      </div>

      <div className="mb-8 w-full rounded-lg px-12 py-6">
        <div className="flex flex-col items-center justify-between rounded-lg bg-text px-6 py-6 text-background md:flex-row">
          <p
            className="text-background"
            style={{ whiteSpace: "pre-wrap" }}
          >{`display: grid;\ngrid-template-columns: repeat(${columns}, 1fr);\ngrid-template-rows: repeat(${rows}, 1fr);\ncolumn-gap: ${columnGap}px;\nrow-gap: ${rowGap}px;`}</p>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `display: grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr); column-gap: ${columnGap}px; row-gap: ${rowGap}px;`,
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

export default GridGen;
