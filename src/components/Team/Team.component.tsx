import React from "react";
import TeamCard from "./TeamCard.component";


const MEMBERS = [
  {
    id: 1,
    name: "Abishek",
    img: "/engg4.0website/images/teamMembers/Abishek.jpg",
    role: "President",
    linkedIn: "https://www.linkedin.com/in/abishekbr1/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 2,
    name: "Divya",
    img: "/engg4.0website/images/teamMembers/Divya.webp",
    role: "Vice President",
    linkedIn: "https://www.linkedin.com/in/divya-khurana-7331ba261/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 3,
    name: "Sockalingam",
    img: "/engg4.0website/images/teamMembers/Sockalingam.jpg",
    role: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/sockalingam-saravanan-341a9a193/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 4,
    name: "Thiruvikraman",
    img: "/engg4.0website/images/teamMembers/Vikram.webp",
    role: "Operations Head",
    linkedIn: "https://www.linkedin.com/in/thiruvikraman-s/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 5,
    name: "Ameya",
    img: "/engg4.0website/images/teamMembers/Ameya.jpg",
    role: "Technical Head",
    linkedIn: "https://www.linkedin.com/in/ameya-ade-833a16146/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 6,
    name: "Aeshita Dhiman",
    img: "/engg4.0website/images/teamMembers/Aeshita.jpg",
    role: "Digital Marketing Head",
    linkedIn: "",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
];

const Team = () => {
  return (<div className="mx-auto my-6 flex max-w-screen-lg flex-col items-center gap-2 px-4" >
    <h2 className="text-center text-5xl text-onBackground" > Our Board Members </h2>
    < div className="mx-auto my-4 flex flex-wrap justify-center gap-14" >
      {
        MEMBERS.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              imageURL={member.img}
              role={member.role}
              linkedIn={member.linkedIn}
              instagram={member.instagram}
              gitHub={member.gitHub}
              facebook={member.facebook}
            />
          );
        })
      }
    </div>
  </div>);
};

export default Team;
