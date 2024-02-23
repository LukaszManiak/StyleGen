import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mt-10 flex  w-full flex-col items-center justify-around gap-y-20 md:mt-20 ">
      <div className="flex w-full flex-col items-center justify-around  gap-y-10 px-12 md:flex-row md:gap-0">
        <div className="w-6/8 flex flex-col gap-y-6 md:w-1/2">
          <p className="text-xl font-semibold tracking-widest text-primary">
            Your Ultimate CSS Styling Solution
          </p>
          <h1 className="text-6xl font-bold tracking-wider">🌊StyleGen</h1>
          <p className="leading-6">
            Elevate your web development game with StyleGen – the ultimate CSS
            styling tool. Say goodbye to tedious manual styling and hello to
            effortless project enhancement. With StyleGen, unleash your
            creativity and efficiency, ensuring your projects stand out with
            style and professionalism.
          </p>
        </div>
        <img
          className="w-6/8 md:w-2/5"
          src="./svg/undraw_add_color_re_buro.svg"
          alt=""
        />
      </div>

      <div>
        <h2 className="px-12 text-center text-3xl">
          Ready to revolutionize your CSS workflow? Dive in right now.
        </h2>
        <p className="text-center text-5xl">👇🏼</p>
      </div>

      <div className="mb-10 flex w-full items-center justify-center">
        <ul className="grid grid-cols-3 gap-x-2 gap-y-2">
          <li className="rounded-md border-2 px-4 py-2 text-center">
            <Link to="/button">Button</Link>
          </li>
          <li className=" rounded-md border-2 px-4 py-2 text-center">
            <Link to="/border">Border</Link>
          </li>
          <li className=" rounded-md border-2 px-4 py-2 text-center">
            <Link to="/flexbox">Flexbox</Link>
          </li>
          <li className=" rounded-md border-2 px-4 py-2 text-center">
            <Link to="/grid">Grid</Link>
          </li>
          <li className=" rounded-md border-2 px-4 py-2 text-center">
            <Link to="/text-shadow">Text Shadow</Link>
          </li>
          <li className=" rounded-md border-2 px-4 py-2 text-center">
            <Link to="/box-shadow">Box Shadow</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
