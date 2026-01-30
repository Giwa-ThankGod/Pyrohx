import Idea from "../../assets/icons/idea.svg?react";
import Chart from "../../assets/icons/chart-increase.svg?react";
import Target from "../../assets/icons/target.svg?react";

const IconMapper = {
    idea: <Idea />,
    chart: <Chart />,
    target: <Target />,
}

const WhyCard = ({ icon, title, description }) => {
    return (
        <div className="">
            <div className="w-full pb-5 md:py-10">
                {IconMapper[icon]}
            </div>
            <div className="space-y-3">
                <h3 className="sora text-lg">{title}</h3>
                <p className="text-tertiary">{description}</p>
            </div>
        </div>
    )
};

export default WhyCard;