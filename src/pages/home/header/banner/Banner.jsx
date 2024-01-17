import banner from "./../../../../assets/banner/bannerimg.jpg"

const Banner = () => {
    return (
        <div className=" h-[720px] w-full overflow-hidden " >
            <div className=" flex gap-2 justify-center items-center w-full h-full " >
                <div className=" w-auto h-full bg-slate-600 " >
                    <div className=" h-full w-[537px] " >

                    </div>
                </div>
                <div className=" w-auto  h-full bg-slate-600 flex justify-center items-center " >
                    <img src={banner} alt="" className=" w-[999px] object-cover " />
                </div>
            </div>
        </div> 
    );
};

export default Banner;