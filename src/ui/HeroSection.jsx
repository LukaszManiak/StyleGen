function HeroSection() {
  return (
    <div className="border- flex w-full flex-col-reverse items-center  justify-around gap-y-10  px-12  md:flex-row md:gap-0">
      <div className="flex w-5/6 flex-col gap-y-6 md:w-1/2">
        <p className=" text-center text-xl font-semibold tracking-widest text-primary md:text-start">
          Your Ultimate CSS Styling Solution
        </p>
        <h1 className="text-center text-5xl font-bold tracking-wider md:text-start md:text-6xl">
          StyleGen
        </h1>
        <p className="text-center text-xl leading-6 md:text-start">
          Elevate your web development game with StyleGen – the ultimate CSS
          styling tool. Say goodbye to tedious manual styling and hello to
          effortless project enhancement. With StyleGen, unleash your creativity
          and efficiency, ensuring your projects stand out with style and
          professionalism.
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
  );
}

export default HeroSection;
