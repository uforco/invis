import banner from "./../../../../assets/banner/bannerimg.jpg"

const BannerRight = () => {
  return (
    <div className=" w-auto  h-full bg-slate-600 flex justify-center items-center ">
      <img
        src={banner} 
        alt="banner"
        className=" w-[999px] rounded-bl-[80px] rounded-tr-2xl object-cover "
      />
    </div>
  );
};

export default BannerRight;
