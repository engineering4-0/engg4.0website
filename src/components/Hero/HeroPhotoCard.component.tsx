import React from "react";


interface IHeroPhotoCard {
  className?: string,
  imageURL?: string,
  caption?: string
}

const HeroPhotoCard = (props: IHeroPhotoCard) => {
  return (
    <div
      className={`${props.className} bg-surface hidden flex-col items-center justify-self-center overflow-clip rounded-lg p-2 shadow-2xl shadow-onBackground lg:flex`}
    >
      <img src={props.imageURL} alt="" className="aspect-square w-full max-w-48 rounded-sm object-cover" />
      <div className="my-1 max-w-40 text-center text-xs text-onBackground">{props.caption ?? "Engineering club 4.0 event"}</div>
    </div>
  );
};

export default HeroPhotoCard;
