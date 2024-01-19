import ConnectWithFromPage from './ConnectWithFromPage';
const ConnectWithRightSide = () => {
  return (
    <div className=" col-span-1">
      <div className=" relative w-full h-full flex justify-center items-center ">
        <div className=" absolute rounded-tl-[60px] bg-white right-0 p-16 px-20 pr-0 font-Poppins  font-semibold ">
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
