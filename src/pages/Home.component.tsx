import EventGallery from "../components/EventGallery/EventGallery.component";
import Footer from "../components/Footer/Footer.component";
import Hero from "../components/Hero/Hero.component";
import Marquee from "../components/Marquee/Marquee.component";
import Navbar from "../components/Navbar/Navbar.component";
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
      <Hero />
      <Marquee
        textList={textList}
        rotationClass={"rotate-3 top-20"}
      />
      <Team />
      <Marquee
        textList={textList2}
        rotationClass={"-rotate-3 top-10"}
      />
      <EventGallery />
    </>
  );
}

export default Home;
