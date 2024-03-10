/*
TODO:

1.) Add past event images to right section with transition effect.
2.) Images will be taken from firebase.
3.) Consistent theme and sizing.

*/

import { Button, Card, Image } from "@nextui-org/react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 pt-4 bg-background h gap-x-2">
      <div className=" flex flex-col col-span-1 min-h-[calc(100vh-6rem)] justify-center">
        <h2 className="text-5xl font-extrabold text-center lg:text-left text-pretty">
          STUDENT-RUN APPLIED SCIENCE CLUB! 👋
        </h2>
        <p className="pt-4 text-center md:text-2xl lg:text-left text-pretty">
          Engineering 4.0 is a student-run organization dedicated to supporting
          and providing a platform for all engineers and tech enthusiasts of the
          University of Windsor!
        </p>
        <div className="pt-10 flex gap-4 justify-center lg:justify-start">
          <Button color="primary">Join Us</Button>
          <Button color="secondary" variant="bordered">
            Learn More
          </Button>
        </div>
      </div>
      <div className="col-span-1 h-[calc(100vh-6rem)] grid grid-cols-4 grid-rows-4 gap-3 py-4 relative">
        <svg className="absolute m-auto left-0 right-0 top-0 bottom-0 !z-0 w-5/6 h-5/6">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              className="fill-primary"
              id="pattern-circle"
              cx="10"
              cy="10"
              r="2"
              // fill="#6d8b74"
            ></circle>
          </pattern>

          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
        <div className="col-start-1 col-end-1 row-start-2 row-end-2 rounded-xl bg-primary !z-1"></div>
        <div className="col-start-3 col-end-3 row-start-1 row-end-1 rounded-xl bg-secondary !z-1"></div>
        <Card className="col-start-2 col-end-2 row-start-2 row-end-4">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>
        <Card className="col-start-3 col-end-5 row-start-3 row-end-3">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/4513667/pexels-photo-4513667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>
        <div className="col-start-3 col-end-3 row-start-4 row-end-4 rounded-xl bg-tertiary z-1"></div>
      </div>
    </section>
  );
}
