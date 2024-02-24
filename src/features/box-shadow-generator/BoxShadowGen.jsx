function BoxShadowGen() {
  return (
    <section className="mt-10 flex  w-full flex-col items-center justify-around gap-y-20 md:mt-20 ">
      <div className="flex w-full justify-between px-12 py-6">
        <div className="bg-white w-1/2 rounded-lg"></div>

        <div className="bg-white flex w-1/2 flex-col items-center justify-center rounded-lg">
          <div className="h-6 w-6 bg-primary"></div>
        </div>
      </div>

      <div className="w-full rounded-lg px-12 py-6">
        <p className="rounded-lg bg-text px-12 py-6 text-background">text</p>
      </div>
    </section>
  );
}

export default BoxShadowGen;
