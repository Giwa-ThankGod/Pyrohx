import Design from '../../assets/images/design_img.jpeg';
import Website from '../../assets/images/web_img.jpeg';
import Mobile from '../../assets/images/mobile_img.jpeg';
import AI from '../../assets/images/ai_img.jpeg';
import System from '../../assets/images/system_img.jpeg';
import SEO from '../../assets/images/seo_img.jpeg';

const thuMapper = {
    design: Design,
    website: Website,
    mobile: Mobile,
    ai: AI,
    system: System,
    seo: SEO
};

const ServiceCard = ({ thumbnail, title, description }) => {
    return (
        <div className="p-5 space-y-3 bg-white border-gray rounded-xl hover:shadow-md transition ease-in cursor-pointer">
            <div className="w-full h-48 rounded-xl">
                <img src={thuMapper[thumbnail]} alt="service-image" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="space-y-3">
                <h3 className="sora text-lg">{title}</h3>
                <p className="text-tertiary">{description}</p>
            </div>
        </div>
    )
};

export default ServiceCard;