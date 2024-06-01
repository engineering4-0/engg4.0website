import React, {useState, useEffect} from "react";
import { Fragment } from "react";
import { MdBorderColor } from "react-icons/md";
import { request } from 'graphql-request';

import { SlEvent } from "react-icons/sl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



export default function Event() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { events } = await request(
        'https://api-ca-central-1.hygraph.com/v2/clwtbe7cr00ur07tehhg8cnvz/master',
        `
        {
          events{
            id,
            title,
            location,
            time,
            thumbnail {
              url
            }
          }
        }
    `
      );
      console.log(events);
      setEvents(events);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl text-onBackground">Past Events</h1>
      <div className="mb-12 mt-8">
        <VerticalTimeline lineColor="#BEADFA">
          {events.map((event) => {
            return (
              <Fragment key={event.title}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#f3f4f6",
                    borderColor: "#BEADFA",
                    border: "1rem"
                    
                  }}
                  contentArrowStyle={{ borderRight: "0.4rem solid", color:"#BEADFA" }}
                  date={event.time}
                  dateClassName="dateClass"
                  icon={<SlEvent />}
                  iconStyle={{ background: "#fff", fontSize: "1.5rem", color:"#BEADFA" }}
                >
                  <div className=" flex flex-col items-center justify-center text-cente">
                    <img
                      className="aspect-video w-full max-w-lg rounded-lg object-cover border-8 border-primary"
                      src={event.thumbnail.url}
                      alt="event"
                    />
                    <h3 className="mt-4 text-2xl text-onSurface">{event.title}</h3>
                    <p className="!my-1 !text-xs !text-onSurface">{event.location}</p>
                    <p className="!text-sm text-onSurface">{event.description}</p>
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
