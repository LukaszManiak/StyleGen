import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mt-10 flex  w-full flex-col items-center justify-around gap-y-20 md:mt-20 ">
      <div className="border- flex w-full flex-col items-center  justify-around gap-y-10  px-12  md:flex-row md:gap-0">
        <div className="w-6/8 flex flex-col gap-y-6 md:w-1/2">
          <p className=" text-center text-xl font-semibold tracking-widest text-primary md:text-start">
            Your Ultimate CSS Styling Solution
          </p>
          <h1 className="text-center text-5xl font-bold tracking-wider md:text-start md:text-6xl">
            🌊StyleGen
          </h1>
          <p className="text-center leading-6 md:text-start">
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
        <h2 className="px-12 text-center text-2xl md:text-3xl">
          Ready to revolutionize your CSS workflow? Dive in right now.
        </h2>
        <p className="text-center text-4xl md:text-5xl">👇🏼</p>
      </div>

      <div className="mb-10 flex w-full items-center justify-center">
        <ul className="grid w-4/5 grid-cols-3 gap-x-2 gap-y-2 rounded-md bg-secondary p-6">
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/line-height">Line Height</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/border">Border radius</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/flexbox">Flexbox</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/grid">Grid</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/text-shadow">Text Shadow</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/box-shadow">Box Shadow</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/gradient">Gradient</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/letter-spacing">Letter Spacing</Link>
          </li>
          <li className="rounded-md border-2 px-4 py-2 text-center transition-all ease-in-out hover:cursor-pointer hover:border-text hover:bg-text hover:text-background">
            <Link to="/list-style">List Style</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
