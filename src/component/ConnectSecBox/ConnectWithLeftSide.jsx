import { useLocation } from "react-router-dom";
import imgconnect from "./../../assets/ConnectWith/leftimgconnect.png";
import Gmap from './../locationMap/Gmap';

const ConnectWithLeftSide = () => {
  const page = useLocation()?.pathname.slice(1)
  
  return (
    <div className=" w-full " >
      {
        page === "contact"?
          <div className=" w-[900px] rounded-br-[120px] rounded-md h-[900px] overflow-hidden " >
              <Gmap></Gmap>
          </div>
        :
        <img className=" w-full  " src={imgconnect} alt="" />
      }
    </div>
  );
};

export default ConnectWithLeftSide;
