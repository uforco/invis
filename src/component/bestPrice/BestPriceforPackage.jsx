import WidthControl from "./../../layout/widthControl/WidthControl";
import PriceCard from './PriceCard';

const BestPriceforPackage = () => {


    // const pricedetails = [
    //     {
    //         packageName: "Basic",
    //         packageTitle: "website design",
    //         packagePrice: 200,
    //         packagedetails: [
    //             ""
    //         ]

    //     }
    // ]











  return (
    <div>
      <WidthControl>
        <div>
          <div className=" flex justify-center py-5 items-center w-full ">
            <h2 className=" capitalize font-Poppins text-[#16205F] text-[42px] font-semibold ">
              the best price for package
            </h2>
          </div>
          <div className=" flex justify-center items-center " >
            <div className=" " >
              {/* <PriceCard></PriceCard>
              <PriceCard></PriceCard>
              <PriceCard></PriceCard> */}
              <p className=" text-6xl py-3 font-bold text-center w-full " > Coming soon.... </p>
            </div>
          </div>
        </div>
      </WidthControl>
    </div>
  );
};

export default BestPriceforPackage;
