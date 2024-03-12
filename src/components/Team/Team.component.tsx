import { Button, Card, Image } from "@nextui-org/react";

export default function Team() {
  return (
    <section className="grid grid-cols-6 grid-rows-2 lg:grid-cols-6 bg-background gap-x-4 min-h-dvh py-5">
      <div className="col-start-6 col-end-6 row-span-2 flex flex-col justify-center align-middle">
        <Button color="primary">Know All</Button>
      </div>

      <div className="flex flex-col justify-end text-center col-start-2 col-end-2 row-start-1 row-end-1">
        <h2 className="text-7xl font-extrabold  text-pretty -rotate-90 lg:-rotate-0">
          Meet
        </h2>
      </div>
      <div className="flex flex-col justify-start text-center col-start-3 col-end-3 row-start-2 row-end-2">
        <h2 className="text-7xl font-extrabold  text-pretty rotate-90 lg:rotate-0">
          the
        </h2>
      </div>
      <div className="flex flex-col justify-end text-center col-start-4 col-end-4 row-start-1 row-end-1">
        <h2 className="text-7xl font-extrabold  text-pretty -rotate-90 lg:-rotate-0">
          Team
        </h2>
      </div>
      <Card className="col-start-1 col-end-1 row-start-2 row-end-2 h-1/2 top-1/2">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/4513667/pexels-photo-4513667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Card>
      <Card className="col-start-3 col-end-3 row-start-1 row-end-1 h-1/2">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/4513667/pexels-photo-4513667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Card>

      <Card className="col-start-5 col-end-5 row-start-2 row-end-2 h-1/2 top-1/2">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/4513667/pexels-photo-4513667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Card>
    </section>
  );
}
