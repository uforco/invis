import request from "./../../../assets/HowtoStart/cube1.png";
import interview from "./../../../assets/HowtoStart/online2.png";
import hire from "./../../../assets/HowtoStart/technica3.png";

import ProcessCard from "../../../component/processCard/ProcessCard";

const HowToStartCard = () => {
  const ContainData = [
    {
      img: request,
      title: "01. Request",
      descraption: "Tell us more about your requirements and technical needs",
    },
    {
      img: interview,
      title: "02. Interview",
      descraption: `You interview candidates. Average 2 interviews to hire.`,
    },
    {
      img: hire,
      title: "03. Hire",
      descraption: `You choose who to hire, and we handle all the paperwork.`,
    },
  ];

  return (
    <div className=" py-16 pt-4 " >
      <div className=" grid grid-cols-3 gap-24 gap-y-4 ">
        {ContainData?.map((item, inx) => (
          <ProcessCard item={item} key={inx}></ProcessCard>
        ))}
      </div>
    </div>
  );
};

export default HowToStartCard;
