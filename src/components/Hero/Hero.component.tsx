/*
TODO:

1.) Images will be taken from firebase.
2.) Consistent theme and sizing.

*/

import { Button } from "@nextui-org/react";
import HeroPhotoCard from "./HeroPhotoCard.component";
import event1 from "/images/events/Event1.jpeg"
import event2 from "/images/events/Event2.jpeg"
import event3 from "/images/events/Event3.jpeg"
import event4 from "/images/events/Event4.jpeg"
import HeroMembers from "./HeroMembers.component";

export default function Hero() {
  return (
    <section className="grid place-items-center bg-background px-10 lg:grid-cols-5 lg:grid-rows-2">
      {/* adds dotted background to hero section */}
      <div className="bg-height absolute inset-0 -z-10 w-full bg-[radial-gradient(var(--tw-primary)_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container col-span-3 col-start-2 col-end-5 row-span-2 mx-auto flex flex-col items-center justify-center gap-10 py-10">
        <div className="flex max-w-2xl flex-col items-center text-center 2xl:max-w-3xl">
          <h1 className="text-primary mb-4 text-5xl font-bold uppercase md:text-6xl lg:text-7xl 2xl:text-8xl">
            Student-run, Applied Science Club!
          </h1>
          <p className="text-onBackground max-w-2xl">
            Engineering 4.0 is a student-run organization dedicated to supporting and providing a platform for all
            engineers and tech enthusiasts of the{" "}
            <a
              href="https://www.uwindsor.ca/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="font-bold transition-colors duration-300 ease-in-out hover:text-primary"
            >
              University of Windsor
            </a>
            !
          </p>
        </div>
        <HeroMembers />
        <div className="flex items-center justify-evenly gap-4 text-sm sm:items-stretch sm:text-base">
          <Button className="text-lg px-5 py-4 text-onPrimary" color="primary">
            Join Us!
          </Button>
          <Button
            className="text-lg px-5 py-4 text-onBackground"
            color="primary"
            variant="bordered"
          >
            Learn More
          </Button>
        </div>
      </div>
      <HeroPhotoCard className="col-start-1 row-start-1 -rotate-[45deg] justify-self-end" imageURL={event1} />
      <HeroPhotoCard className="rotate-[25deg] justify-self-end" imageURL={event2} />
      <HeroPhotoCard className="-rotate-12 justify-self-start" imageURL={event3} />
      <HeroPhotoCard className="rotate-[4deg] justify-self-start" imageURL={event4} />
    </section>
  );
}
