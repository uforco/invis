import { PropTypes } from 'prop-types';

const EasyProcessCard = ({data}) => {
    console.log(data)
    return (
        <div className=" flex flex-col gap-6 justify-center items-center " >
            <div className=" w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] " >
                <img className=" w-full " src={data?.img} alt={data?.processTitle} />
            </div>
            <div className=" flex gap-2 text-[#16205F] font-Poppins font-semibold justify-center items-end " >
                <span className=" text-3xl " >{data?.processNumber}</span>
                <p className=" uppercase text-lg md:text-base font-semibold lg:font-medium " >{data?.processTitle}</p>
            </div>
        </div>
    );
};

EasyProcessCard.propTypes={
    data: PropTypes.object
}

export default EasyProcessCard;