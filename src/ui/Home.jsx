import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mt-10 flex  w-full flex-col items-center justify-around gap-y-20 md:mt-20 ">
      <div className="border- flex w-full flex-col-reverse items-center  justify-around gap-y-10  px-12  md:flex-row md:gap-0">
        <div className="w-6/8 flex flex-col gap-y-6 md:w-1/2">
          <p className=" text-center text-xl font-semibold tracking-widest text-primary md:text-start">
            Your Ultimate CSS Styling Solution
          </p>
          <h1 className="text-center text-5xl font-bold tracking-wider md:text-start md:text-6xl">
            StyleGen
          </h1>
          <p className="text-center leading-6 md:text-start">
            Elevate your web development game with StyleGen – the ultimate CSS
            styling tool. Say goodbye to tedious manual styling and hello to
            effortless project enhancement. With StyleGen, unleash your
            creativity and efficiency, ensuring your projects stand out with
            style and professionalism.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "rgba(130, 129, 234, 1)",
            backgroundImage:
              "radial-gradient(circle, rgba(130, 129, 234, 1) 0%, rgba(41, 189, 219, 1) 30%, rgba(238, 251, 252, 1) 100%)",
          }}
          className="h-72 w-72 rounded-full bg-text"
        ></div>
      </div>

      <div>
        <h2 className="px-12 text-center text-2xl md:text-3xl">
          Ready to revolutionize your CSS workflow?{" "}
          <b className="text-accent"> Dive in right now.</b>
        </h2>
      </div>

      <div className="mb-10 flex w-full items-center justify-center">
        <div className="flex w-4/5 flex-wrap justify-center gap-x-6  gap-y-6  border border-text  p-6">
          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/line-height"
          >
            Line Height
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/border"
          >
            Border radius
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/flexbox"
          >
            Flexbox
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/grid"
          >
            Grid
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/text-shadow"
          >
            Text Shadow
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/box-shadow"
          >
            Box Shadow
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/gradient"
          >
            Gradient
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/letter-spacing"
          >
            Letter Spacing
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/text-decoration"
          >
            Text Decoration
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/text-color"
          >
            Text Color
          </Link>

          <Link
            className="flex w-1/4 items-center justify-center border border-text px-4 py-2 text-center shadow-customShadow shadow-text transition-all  ease-out hover:shadow-none"
            to="/text-align"
          >
            Text Align
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
