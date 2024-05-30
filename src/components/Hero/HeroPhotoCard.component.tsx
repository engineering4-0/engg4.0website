import React from "react";


interface IHeroPhotoCard {
  className?: string,
  imageURL?: string,
  caption?: string
}

const HeroPhotoCard = (props: IHeroPhotoCard) => {
  return (
    <div
      className={`${props.className} hidden flex-col items-center justify-self-center overflow-clip rounded-lg bg-white p-2 shadow-2xl shadow-gray-600 lg:flex`}
    >
      <img src={props.imageURL} alt="" className="aspect-square w-full max-w-48 rounded-sm object-cover" />
      <div className="my-1 max-w-40 text-center text-xs">{props.caption ?? "Engineering club 4.0 event"}</div>
    </div>
  );
};

export default HeroPhotoCard;
