import headerimg from "./../../../assets/OurService/headerimg.png";
import WidthControl from "./../../../layout/widthControl/WidthControl";

const ServiceHeader = () => {
  return (
    <div>
      <div className=" relative overflow-hidden ">
        <img src={headerimg} alt="" />
        <div className=" absolute w-full bg-black bg-opacity-35 h-full top-0 left-0 right-0 ">
          <div className="  w-full flex flex-col justify-center items-center h-full font-Poppins text-white">
            <WidthControl>
              <div className=" text-center  " >
                <h2 className=" text-6xl font-semibold ">Our Services</h2>
                <p className=" text-xl py-5 w-auto md:w-[600px] tracking-widest leading-9 ">
                  We specialize in helping you build a team of expert
                  developers.
                </p>
              </div>
            </WidthControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
