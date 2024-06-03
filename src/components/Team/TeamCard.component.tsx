import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface ITeamCard {
  imageURL: string,
  name: string,
  role: string,
  linkedIn: string,
  instagram: string,
  gitHub: string,
  facebook: string,
}

const TeamCard = (props: ITeamCard) => {
  return (
    <div className="w-full max-w-60 items-stretch rounded-lg bg-surface shadow-xl lg:flex lg:max-w-md">
      <a href="/" className="w-full max-w-40">
        <img
          className="aspect-square lg:h-full w-full rounded-lg object-cover object-top lg:rounded-none lg:rounded-l-lg"
          src={props.imageURL}
          alt="Bonnie Avatar"
        />
      </a>
      <div className="flex flex-col items-center justify-evenly px-4 py-4 lg:items-start lg:py-2">
        <h3 className="text-3xl font-bold text-onSurface">
          <a href="/">{props.name}</a>
        </h3>
        <span className="text-sm font-bold text-onSurface">{props.role}</span>
        <p className="w-full text-center text-sm font-light lg:text-left text-onSurface">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, commodi!
        </p>
        <ul className="mt-2 flex gap-4">
          <li>
            <a href="/" className="text-primary hover:text-gray-500">
              <FaLinkedin size="1.25rem" />
            </a>
          </li>
          <li>
            <a href="/" className="text-[#f60078] hover:text-gray-500">
              <FaInstagram size="1.25rem" />
            </a>
          </li>
          <li>
            <a href="/" className="text-[#39569c] hover:text-gray-500">
              <FaFacebook size="1.25rem" />
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-900 hover:text-gray-500">
              <FaGithub size="1.25rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
