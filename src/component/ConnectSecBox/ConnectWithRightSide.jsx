import ConnectWithFromPage from './ConnectWithFromPage';
const ConnectWithRightSide = () => {
  return (
    <div className=" w-[600px]  bg-blue-gray-200 ">
      <div className=" relative w-full h-full flex justify-center items-center ">
        <div className=" absolute rounded-tl-[60px] bg-white mt-12 right-0 pt-16 py-12 px-16 pr-3 font-Poppins  font-semibold ">
          <h1 className=" text-[#16205F] text-[38px] leading-[50px] font-semibold " >Connect With Your <br /> Next Great Hire Today!</h1>
          <div>
              <ConnectWithFromPage></ConnectWithFromPage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithRightSide;
