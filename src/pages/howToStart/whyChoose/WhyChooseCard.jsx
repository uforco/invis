import experience1 from "./../../../assets/HowtoStart/user-experience1.png";
import Innovation from "./../../../assets/HowtoStart/creativity2.png";
import ClientCentric from "./../../../assets/HowtoStart/centralized3.png";
import quality from "./../../../assets/HowtoStart/quality-assurance4.png";
import Delivery from "./../../../assets/HowtoStart/just-in-time5.png";

import ProcessCard from "../../../component/processCard/ProcessCard";

const WhyChooseCard = () => {
  const ContainData = [
    {
      img: experience1,
      title: "Expertise",
      descraption:
        "Our team comprises seasoned professionals with a wealth of experience in the field.",
    },
    {
      img: Innovation,
      title: "Innovation",
      descraption: `We stay ahead of industry trends, leveraging the latest technologies to deliver forward-thinking solutions.`,
    },
    {
      img: ClientCentric,
      title: "Client-Centric Focus",
      descraption: `Your success is our priority. We work closely with clients to understand their goals and tailor our solutions accordingly.`,
    },
    {
      img: quality,
      title: "Quality Assurance",
      descraption: `Rigorous testing ensures that our deliverables meet the highest standards of quality and reliability. `,
    },
    {
      img: Delivery,
      title: "Timely Delivery",
      descraption: `We understand the importance of deadlines and are committed to delivering projects on time.`,
    },
  ];

  return (
    <div className=" pt-5 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:sm:grid-cols-3 gap-24 gap-y-1 ">
        {ContainData?.map((item, inx) => (
          <ProcessCard item={item} key={inx}></ProcessCard>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseCard;
