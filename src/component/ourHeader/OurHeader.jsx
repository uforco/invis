
import WidthControl from "../../layout/widthControl/WidthControl";
import { PropTypes } from 'prop-types';

const OurHeader = ({data}) => {
  return (
    <div>
      <div className=" relative h-[200px] md:h-[280px] 2xl:h-auto overflow-hidden ">
        <img className=" w-full h-[200px] md:h-[280px] 2xl:h-auto lg:w-full  " src={data?.headerImg} alt="" />
        <div className=" absolute w-full  bg-black bg-opacity-40 h-full top-0 left-0 right-0 ">
          <div className="  w-full flex flex-col justify-center items-center h-full font-Poppins text-white">
            <WidthControl>
              <div className=" text-center " >
                <h2 className=" text-4xl sm:text-6xl font-semibold ">{data?.headerTitle}</h2>
                <p className="  sm:text-lg font-light px-2 md:px-0  md:font-semibold pt-2  md:py-5 w-full md:w-[600px] tracking-widest md:leading-9 ">
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
