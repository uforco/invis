import ConnectWithFromPage from "./ConnectWithFromPage";
const ConnectWithRightSide = () => {
  return (
    <div className=" w-full sm:w-[600px] h-auto md:h-[700px] ">
      <div className=" relative w-full h-full flex justify-center items-center ">

        <div className=" bg-white lg:absolute z-30 xl:rounded-tl-[70px] lg:md:rounded-tl-[0px]  my-5 mx-4 -mt-32 sm:-mt-44 md:-mt-[400px] lg:m-0 right-0 pt-8 sm:pt-16 px-5 py-12 sm:px-16 sm:pr-10 pr-3 font-Poppins  font-semibold ">

          <h1 className=" text-[#16205F] text-2xl sm:text-[38px] leading-[40px] sm:leading-[50px] font-semibold ">
            Connect With Your Next Great Hire Today!
          </h1>
          <div>
            <ConnectWithFromPage></ConnectWithFromPage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithRightSide;
