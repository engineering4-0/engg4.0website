import React from 'react'
import { Fragment } from "react";
// import { SlEvent } from "react-icons/sl";
// import "./EventsPage.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import event_1_1 from "../../public/images/events/Event1.jpeg";
export default function Event() {
  const pastEvents = [
    {
      images: [event_1_1],
      title: "Club Day!",
      // subHeading: "this is sub heading",
      location: "CAW Center",
      time: "Feb 16, 2023",
      description:
        "Attendees learned about our projects, met with the club members, and got involved! Free coffee, hot chocolate, and marshmallows were provided for all who attended. All were welcome!",
    },
    {
      images: [event_1_1],
      title: "Welcome Event 👋",
      // subHeading: "this is sub heading",
      location: "CEI, Room Mo 1100",
      time: "March 11, 2023",
      description:
        "Members and attendees gathered for a night of networking and fun activities, where they learned about what the club can offer. They also enjoyed free refreshments and meetup with the team.",
    },
    {
      images: [event_1_1],
      title: "Club Coffee Day ☕",
      // subHeading: "this is sub heading",
      location: "CAW Center",
      time: "June, 2023",
      description:
        "Club Coffee Day was a fun and joyful event conducted in June 2023. The event acted as an introduction event to new club members and an opportunity for all students to learn about the club, possible hirings, and upcoming events!",
    },
    {
      images: [
        event_1_1
      ],
      title: "Industry Skills that matters",
      // subHeading: "this is sub heading",
      location: "Toldo Health Center",
      time: "June, 2023",
      description:
        "Industry Skills that Matter is a workshop conducted by Engineering 4.0 on June 2023 to bring working professionals from various Industries to provide a seminar on what skills are required by all students to land their dream jobs! The workshop brought three working professionals from the workforce to discuss their experiences and struggles to land their jobs!",
    },
    {
      images: [event_1_1],
      title: "Club Showcase Day",
      // subHeading: "this is sub heading",
      location: "CEI building",
      time: "September, 2023",
      description:
        "The Club Showcase Day is an event conducted with the Windsor Engineering Society from the University of Windsor. The event showcased six student clubs from the University to both Undergraduate and Graduate Students. The students participated in a giveaway raffle to win goodies, learn what the club is about, and apply for possible hirings",
    },
  ];
  return (
<div className="container mx-auto">
      <h1 className="text-center text-5xl">Past Events</h1>
      <div className="mb-12 mt-8">
        <VerticalTimeline lineColor="">
          {pastEvents.map((event) => {
            return (
              <Fragment key={event.title}>
                <VerticalTimelineElement
                  contentStyle={{ background: "#f3f4f6", borderRadius: "1rem", boxShadow: "none" }}
                  contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                  date={event.time}
                  // icon={<SlEvent />}
                  iconStyle={{ background: "#fff", fontSize: "1.5rem" }}
                >
                  <div className=" flex flex-col items-center justify-center text-center">
                    <img
                      className="aspect-video w-full max-w-lg rounded-lg object-cover"
                      src={event.images[0]}
                      alt="event"
                    />
                    <h3 className="mt-4 text-2xl">{event.title}</h3>
                    <p className="!my-1 !text-xs !text-slate-600">{event.location}</p>
                    <p className="!text-sm">{event.description}</p>
                  </div>
                </VerticalTimelineElement>
              </Fragment>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
