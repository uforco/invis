import { PropTypes } from "prop-types";

const OurTitleSection = ({ heading }) => {
  return (
    <div className=" font-Poppins flex gap-6 flex-col justify-start items-start w-auto md:w-[680px]  text-[#16205F] ">
      <h2 className=" text-3xl md:text-4xl font-semibold ">
        {heading?.title}
      </h2>
      <div className=" sm:w-[500px] pr-1 ">
        <p className=" font-Poppins text-lg ">{heading?.descraption}</p>
      </div>
    </div>
  );
};
OurTitleSection.propTypes = {
    heading: PropTypes.object,
};
export default OurTitleSection;
