import WidthControl from "./../../layout/widthControl/WidthControl";
import PriceCard from "./PriceCard";

const BestPriceforPackage = () => {
  const pricedetails = [
    {
      packageName: "Basic",
      packageTitle: "website design",
      packagePrice: 200,
      packagedetails: [
        "PRE-BUILT THEME BASED WEBSITE",
        "UP-TO 3 PAGES WEBSITE",
        "PREMIUM THEME",
        "GOOGLE ANALYTICS SETUP",
        "SOCIAL MEDIA PAGE INTEGRATIONS",
        "TURBO FAST WEB HOSTING",
        "SSL CERTIFICATE",
        "7-DAYS DELIVERY",
        "7-DAYS FREE SUPPORT",
      ],
    },
    {
      packageName: "PREMIUM",
      packageTitle: "WEBSITE + SEO + DASHBOARD",
      packagePrice: 300,
      packagedetails: [
        "CREATIVE UI/UX DESIGN",
        "UP-TO 5 PAGES WEBSITE",
        "PREMIUM THEME",
        "CONTENT PLANNING",
        "TECHNICAL SEO OPTIMIZATIONS",
        "LOADING THEME OPTIMIZATIONS",
        "GOOGLE ANALYTICS SETUP",
        "SOCIAL MEDIA PAGE INTEGRATIONS",
        "MONTHLY CONTENT UPDATE (MAX 1 PAGE)",
        "TURBO FAST WEB HOSTING",
        "14-DAYS DELIVERY",
        "7-DAYS FREE SUPPORT",
      ],
    },
    {
      packageName: "STANDARD",
      packageTitle: "WEBSITE + SEO",
      packagePrice: 250,
      packagedetails: [
        "CREATIVE UI/UX DESIGN ",
        "UP-TO 5 PAGES WEBSITE",
        "PREMIUM THEME",
        "CONTENT PLANNING",
        "TECHNICAL SEO OPTIMIZATIONS",
        "SOCIAL MEDIA PAGE INTEGRATIONS",
        "TURBO FAST WEB HOSTING",
        "10-DAYS DELIVERY",
        "7-DAYS FREE SUPPORT",
      ],
    },
  ];
  return (
    <div>
      <WidthControl>
        <div className=" my-24 mt-14 mx-0 md:-ml-7 xl:ml-0 ">
          <div className=" flex justify-center items-center flex-col py-5  w-full ">
            <h4 className=" text-lg font-semibold mb-2 capitalize ">Package</h4>
            <h2 className=" capitalize pb-14 font-Poppins text-[#16205F] text-[42px] font-semibold ">
              the best price
            </h2>
          </div>
          <div className=" w-full flex justify-center ">
            <div className="grid md:grid-cols-2 gap-0 md:gap-8 xl:gap-0 xl:grid-cols-3  ">
              <div>
                <PriceCard data={pricedetails[0]} inxNum={0}></PriceCard>
              </div>
              <div className=" block -mt-28 -mb-5 sm:-mb-4 xl:m-0 md:hidden xl:block ">
                <PriceCard data={pricedetails[1]} inxNum={1}></PriceCard>
              </div>
              <div className=" block md:hidden xl:block" >
                <PriceCard data={pricedetails[2]} inxNum={2}></PriceCard>
              </div>
              {/* optional div */}
              <div className=" mt-32  xl:mt-0 hidden md:block xl:hidden " >
                <PriceCard data={pricedetails[1]} inxNum={1}></PriceCard>
              </div>
            </div>
          </div>
          <div className="   -mt-60 -ml-60 justify-center hidden md:flex xl:hidden ">
            <PriceCard data={pricedetails[2]} inxNum={2}></PriceCard>
          </div>
        </div>
      </WidthControl>
    </div>
  );
};

export default BestPriceforPackage;
