import OurServiceListCard from "./OurServiceListCard";
import Asset1 from "./../../../assets/OurService/Asset1.png";
import Asset2 from "./../../../assets/OurService/Asset2.png";
import Asset3 from "./../../../assets/OurService/Asset3.png";

const OurServiceList = () => {
  const OurService = [
    {
      serviceImg: Asset1,
      serviceName: "Website Development",
      serviceTitle: "Transform your ideas info a captivating online experience",
      serviceItem: [
        "responsive Design",
        "Customized Development",
        "Seamless Navigation",
        "E-commerce Integration",
      ],
    },
    {
      serviceImg: Asset2,
      serviceName: "Content & Strategy Development",
      serviceTitle:
        "Content is king, and strategy is its queen. Elevate your brand with our tailored content and strategic planning",
      serviceItem: [
        "Content creation",
        "SEO Optimaization",
        "Social media strategy",
        "brand management",
      ],
    },
    {
      serviceImg: Asset3,
      serviceName: "Creative Visual Development",
      serviceTitle:
        "Our creative team transforms ideas into visually stunning realities, ensuring your brand shines in the digital crowd.",
      serviceItem: [
        "Graphic Design",
        "Branding",
        "illustrations",
        "photography",
      ],
    },
  ];

  return (
    <div>
        <div className=" flex justify-center items-center pt-10 py-16 " >
            <h2 className=" text-5xl font-bold text-[#16205F] " >Our Services</h2>
        </div>
      <div className=" grid gap-5 grid-cols-2 ">
        {OurService?.map((item, inx) => (
          <OurServiceListCard data={item} key={inx}></OurServiceListCard>
        ))}
      </div>
    </div>
  );
};

export default OurServiceList;
