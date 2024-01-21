import { PropTypes } from 'prop-types';

const ProcessCard = ({item}) => {
  return (
    <div className=" w-full px-0 p-6 ">
      <div className=" flex gap-6">
        <div>
          <div className=" bg-yellow-300 rounded w-[60px] overflow-hidden p-[5px] " >
            <img className=" w-full " src={item?.img} alt={item?.title} />
          </div>
        </div>
        <div className=" text-[#16205F] font-Poppins " >
          <h2 className="  text-2xl pt-0 mt-0 tracking-wide font-semibold ">
            {item?.title}
          </h2>
          <p className=" font-medium text-sm tracking-wide leading-6 pt-1 " >
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
