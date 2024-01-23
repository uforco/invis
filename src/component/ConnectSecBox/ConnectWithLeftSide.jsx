import { useLocation } from "react-router-dom";
import imgconnect from "./../../assets/ConnectWith/leftimgconnect.png";
import Gmap from "./../locationMap/Gmap";

const ConnectWithLeftSide = () => {
  const page = useLocation()?.pathname.slice(1);

  return (
    <div className=" w-full  overflow-hidden ">
      {page === "contact" ? (
        <div className=" w-auto mx-2 flex justify-center lg:rounded-br-[100px] rounded-md  h-[350px] sm:h-[600px] xl:h-[900px] overflow-hidden ">
          <div className="w-full h-full">
            <Gmap></Gmap>
          </div>
        </div>
      ) : (
        <div className=" w-[140%] md:w-full lg:h-[700px] xl:h-auto  ">
          <img
            className="w-full lg:h-full xl:h-auto object-cover "
            src={imgconnect}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ConnectWithLeftSide;
