
import WidthControl from "../../layout/widthControl/WidthControl";
import { PropTypes } from 'prop-types';

const OurHeader = ({data}) => {
  return (
    <div>
      <div className=" relative h-auto 2xl:h-[280px] overflow-hidden ">
        <img className=" w-full " src={data?.headerImg} alt="" />
        <div className=" absolute w-full bg-black bg-opacity-40 h-full top-0 left-0 right-0 ">
          <div className="  w-full flex flex-col justify-center items-center h-full font-Poppins text-white">
            <WidthControl>
              <div className=" text-center " >
                <h2 className=" text-6xl font-semibold ">{data?.headerTitle}</h2>
                <p className=" text-lg py-5 w-auto md:w-[600px] tracking-widest leading-9 ">
                  {data?.description}
                </p>
              </div>
            </WidthControl>
          </div>
        </div>
      </div>
    </div>
  );
};
OurHeader.propTypes={
  data: PropTypes.object,
}
export default OurHeader;
