function Header() {
  return (
    <header>
      <nav className=" bg-backround w-full  px-12 py-8">
        <div className="flex items-center gap-x-2">
          <div
            style={{
              backgroundColor: "rgba(130, 129, 234, 1)",
              backgroundImage:
                "radial-gradient(circle, rgba(130, 129, 234, 1) 0%, rgba(41, 189, 219, 1) 30%, rgba(238, 251, 252, 1) 100%)",
            }}
            className="h-6 w-6 rounded-full bg-text"
          ></div>
          <h1 className=" text-xl font-bold tracking-wide text-text">
            StyleGen
          </h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
