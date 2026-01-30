import Phone from "../../assets/icons/phone.svg?react";
import Map from "../../assets/icons/map.svg?react";
import Connection from "../../assets/icons/connection.svg?react";
import Rocket from "../../assets/icons/rocket.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";

const IconMapper = {
    phone: <Phone className="w-14 h-14 ml-8" />,
    map: <Map className="w-20 h-20" />,
    connection: <Connection className="w-20 h-20" />,
    rocket: <Rocket className="w-20 h-20" />,
}

const HowCard = ({ icon, index, title, description, stackIndex }) => {
  return (
    <div
      className="sticky top-24 transition-all duration-500 ease-in-out"
      style={{
        zIndex: 10 + stackIndex,
        transform: `translateY(${stackIndex * 0}px)`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-24 bg-[#FAFAFA] border-b-2 border-[var(--tertiary-color)]">
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <h2 className="text-base md:text-6xl text-[var(--tertiary-color)] font-medium">
            {index}
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              {IconMapper[icon]}
            </div>

            <div className="flex items-center gap-3">
              <h3 className="sora text-2xl">{title}</h3>
              <ArrowRight />
            </div>
          </div>
        </div>

        <p className="w-6/12 text-tertiary font-light">{description}</p>
      </div>
    </div>
  );
};

export default HowCard;