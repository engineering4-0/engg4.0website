import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Event from "/images/events/Event1.jpeg";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-10">
      <h1 className="mx-auto max-w-screen-lg text-center text-6xl text-onBackground">About Us</h1>
      <div className="mx-auto mb-6 flex h-40 w-full max-w-screen-2xl flex-col items-center justify-center gap-3 bg-primary p-10 py-0 text-center">
        <h2 className="text-4xl text-onPrimary">Go-to community for engineering and tech enthusiast at UWindsor.</h2>
        <p className="max-w-screen-md text-onPrimary">
          As a diverse, inclusive, and student-run organization, we're dedicated to providing a dynamic platform for
          science and technology enthusiasts.
        </p>
      </div>
      <div className="container mx-auto flex max-w-screen-lg flex-col items-center gap-6 p-4 sm:px-8 md:flex-row">
        <div>
          <h2 className="mb-2 text-3xl underline text-onBackground">Join us to:</h2>
          <ul className="flex flex-col gap-3">
            <li className="list-disc text-onBackground">Attend workshops and talks by industry professionals.</li>
            <li className="list-disc text-onBackground">Work on real-world projects.</li>
            <li className="list-disc text-onBackground">Organize study groups and participate in technical competitions.</li>
            <li className="list-disc text-onBackground">
              Receive peer review, support, and expand your professional network through social events.
            </li>
          </ul>
        </div>
        <img src={Event} alt="engineering 4.0 event" className="w-full max-w-sm rounded-xl shadow-lg" />
      </div>
      <p className="mt-3 text-center text-onBackground">Embark on a journey of growth and connection with Engineering Club 4.0!</p>
      <div className="flex w-full justify-center">
        <Link to="/register">
          <Button className="text-lg px-5 py-4" variant="solid" color="primary">
            Become A Member
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
