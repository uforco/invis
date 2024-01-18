
import BannerRight from './BannerRight';
import BannerLeft from './BannerLeft';
const Banner = () => {
    return (
        <div className=" h-[720px] w-full pb-14 overflow-hidden " >
            <div className=" flex gap-2 justify-center items-center w-full h-full " >
                <BannerLeft></BannerLeft>
                <BannerRight></BannerRight>
            </div> 
        </div> 
    );
};

export default Banner;