import { Fragment } from "react";

interface Marquee {
  textList: string[];
  rotationClass: string;
}

export default function Marquee(props: Marquee): JSX.Element {
  return (
    <div className="relative flex items-center h-56 overflow-hidden">
      <div
        className={`absolute border-4 border-primary -left-60 ${props.rotationClass} w-[200%] h-fit flex overflow-hidden top-[48%]`}
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
                  <span className="text-xs w-3 h-3 rounded-full bg-primary mx-5 block"></span>
                </Fragment>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
