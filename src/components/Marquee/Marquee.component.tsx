import { Fragment } from "react";

interface Marquee {
  textList: string[];
  rotationClass: string;
}

export default function Marquee(props: Marquee): JSX.Element {
  return (
    <div className="relative flex items-center py-16">
      <div
        className={`absolute border-1 border-primary -left-60 ${props.rotationClass} w-[200%] h-fit flex overflow-hidden top-[48%]`}
      >
        {[1, 2, 3, 4].map((value) => (
          <div
            key={value}
            className="text-3xl font-extrabold uppercase animate-scroll flex shrink-0 min-h-full items-center justify-center"
          >
            <span className="flex items-center py-2">
              {props.textList.map((text) => (
                <Fragment key={text}>
                  {text}
                  <span className="text-xs w-3 h-3 rounded-full bg-secondary mx-5 block"></span>
                </Fragment>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
