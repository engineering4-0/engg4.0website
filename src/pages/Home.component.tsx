import Hero from "../components/Hero/Hero.component";
import Navbar from "../components/Navbar/Nav.component";
import Team from "../components/Team/Team.component";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex bg-background justify-center">
        <div className="px-8 2xl:px-6 max-w-[1536px]">
          <Hero />
          <Team />
        </div>
      </div>
    </>
  );
}

export default Home;
