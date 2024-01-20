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
        <div className=" my-24 mt-14 " >
          <div className=" flex justify-center items-center flex-col py-5  w-full ">
            <h4 className=" text-lg font-semibold mb-2 capitalize " >Package</h4>
            <h2 className=" capitalize pb-14  font-Poppins text-[#16205F] text-[42px] font-semibold ">
              the best price
            </h2>
          </div>
          <div className=" flex justify-center items-center ">
            <div className="grid grid-cols-3  ">
              {
                pricedetails.map((data, inx) => <PriceCard data={data} inxNum={inx} key={inx} ></PriceCard> )
              }
            </div>
          </div>
        </div>
      </WidthControl>
    </div>
  );
};

export default BestPriceforPackage;
