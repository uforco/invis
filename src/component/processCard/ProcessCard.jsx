import { PropTypes } from 'prop-types';

const ProcessCard = ({item}) => {
  return (
    <div className=" w-auto 2xl:w-96  overflow-hidden  lg:px-1 p-6 px-1 ">
      <div className=" flex flex-col lg:flex-row gap-3">
        <div className=' flex lg:block justify-start sm:justify-center  ' >
          <div className=" bg-yellow-300 rounded w-[60px] overflow-hidden p-[5px] " >
            <img className=" w-full " src={item?.img} alt={item?.title} />
          </div>
        </div>
        <div className=" text-[#16205F] text-left sm:text-center lg:text-left  font-Poppins " >
          <h2 className="  text-2xl pb-2 m-0tracking-wide font-semibold ">
            {item?.title}
          </h2>
          <p className=" font-medium text-justify sm:text-center lg:text-justify xl:text-left text-sm tracking-wide leading-6 pt-1 " >
            {item?.descraption}
          </p>
        </div>
      </div>
    </div>
  );
};

ProcessCard.propTypes={
    item: PropTypes.object
}

export default ProcessCard;
