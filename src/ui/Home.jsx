import HeroSection from "./HeroSection";
import LinksList from "./LinksList";

function Home() {
  return (
    <section className="mt-10 flex  w-full flex-col items-center justify-around gap-y-20 md:mt-20 ">
      <HeroSection />

      <div>
        <h2 className="px-12 text-center text-2xl md:text-3xl">
          Ready to revolutionize your CSS workflow?{" "}
          <b className="text-accent"> Dive in right now.</b>
        </h2>
      </div>

      <LinksList />
    </section>
  );
}

export default Home;
