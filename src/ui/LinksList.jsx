import { Link } from "react-router-dom";

function LinksList() {
  return (
    <div className="mb-10 flex w-full items-center justify-center">
      <div className="flex w-4/5 flex-wrap justify-center gap-x-6 gap-y-6  rounded-sm  border border-text p-4 md:p-6">
        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/line-height"
        >
          Line Height
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/border"
        >
          Border radius
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/flexbox"
        >
          Flexbox
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/grid"
        >
          Grid
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/text-shadow"
        >
          Text Shadow
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/box-shadow"
        >
          Box Shadow
        </Link>

        <Link
          className="flex w-1/3 items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/gradient"
        >
          Gradient
        </Link>

        <Link
          className="flex w-1/3 items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/letter-spacing"
        >
          Letter Spacing
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/text-decoration"
        >
          Text Decoration
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/text-color"
        >
          Text Color
        </Link>

        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/text-align"
        >
          Text Align
        </Link>
        <Link
          className="flex w-auto items-center justify-center border border-text bg-white px-4 py-2 text-center shadow-customShadow shadow-text transition-all ease-out  hover:shadow-none md:w-1/4"
          to="/transform"
        >
          Transform
        </Link>
      </div>
    </div>
  );
}

export default LinksList;
