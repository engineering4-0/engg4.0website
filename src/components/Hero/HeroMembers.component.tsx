import React from "react";

// TODO:
/*

This list should go in firebase.

*/
const MEMBERS = [
  {
    id: 1,
    name: "Abishek",
    img: "/images/BoardMembers/Abishek.jpg",
    role: "President",
    linkedIn: "https://www.linkedin.com/in/abishekbr1/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 2,
    name: "Divya",
    img: "/images/BoardMembers/Divya.webp",
    role: "Vice President",
    linkedIn: "https://www.linkedin.com/in/divya-khurana-7331ba261/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 3,
    name: "Sockalingam",
    img: "/images/BoardMembers/Sockalingam.jpg",
    role: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/sockalingam-saravanan-341a9a193/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 4,
    name: "Thiruvikraman",
    img: "/images/BoardMembers/Vikram.webp",
    role: "Operations Head",
    linkedIn: "https://www.linkedin.com/in/thiruvikraman-s/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 5,
    name: "Ameya",
    img: "/images/BoardMembers/Ameya.jpg",
    role: "Technical Head",
    linkedIn: "https://www.linkedin.com/in/ameya-ade-833a16146/",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
  {
    id: 6,
    name: "Aeshita Dhiman",
    img: "/images/BoardMembers/Aeshita.jpg",
    role: "Digital Marketing Head",
    linkedIn: "",
    instagram: "",
    gitHub: "",
    facebook: "",
  },
];

const HeroMembers = () => {
  return (
    <div className="flex items-center justify-start">
      {MEMBERS.map((member) => {
        return (
          <img
            key={member.id}
            src={member.img}
            alt={member.name}
            className="-mr-3 aspect-square h-10 w-10 rounded-full object-cover object-top"
          />
        );
      })}
      <div className="text-onBackground flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-primary-100 object-cover object-top p-2 text-sm">
        +50
      </div>
      <span className="text-onBackground ml-1.5">Volunteers</span>
    </div>
  );
};

export default HeroMembers;
