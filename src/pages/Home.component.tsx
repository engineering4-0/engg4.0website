import Hero from "../components/Hero/Hero.component";
import Marquee from "../components/Marquee/Marquee.component";
import Navbar from "../components/Navbar/Nav.component";
import Team from "../components/Team/Team.component";

function Home() {
  const textList = ["Web-Development", "Finance", "Operations", "Social Media"];
  const textList2 = [
    "Game-Night",
    "Industrial-Connect",
    "3D-Modeling-Workshops",
  ];
  return (
    <>
      <Navbar />
      <div className="flex bg-background justify-center overflow-hidden">
        <div className="px-8 2xl:px-6 max-w-[1536px]">
          <Hero />
          <Marquee
            textList={textList}
            rotationClass={"rotate-3"}
          />
          <Team />
          <Marquee
            textList={textList2}
            rotationClass={"-rotate-3"}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
