import Star from '../../assets/icons/star.svg?react';
import Quote from '../../assets/icons/quote.svg?react';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';

const ImageMap = {
    img1,
    img2,
    img3,
    img4
};

const TestimonyCard = ({ name, feedback, photo }) => {
    return (
        <div className="flex-shrink-0 w-[324px] md:w-[469px] p-5 space-y-5 bg-[#263F43] border border-[#2C4D53] rounded-xl transition ease-in cursor-pointer">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                 {Array(5).fill().map((_, i) => <Star key={i} />)}
                </div>
                <Quote />
            </div>

            <p className='text-sm md:text-base text-white'>"{feedback}"</p>

            <div className="flex items-center gap-2">
                <div className='w-[32px] h-[32px] bg-gray-200 rounded-full'>
                    <img src={ImageMap[photo]} alt="photo" className='w-full h-full object-cover rounded-full' />
                </div>
                <p className="text-white">{name}</p>
            </div>
        </div>
    )
};

export default TestimonyCard;