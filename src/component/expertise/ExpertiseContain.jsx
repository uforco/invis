import ExpertiseContainCard from "./ExpertiseContainCard";

import dedicated from "./../../assets/Expertise/dedicated.png";
import StaffAugmentation from "./../../assets/Expertise/StaffAugmentation.png";
import SoftwareOutsourcing from "./../../assets/Expertise/SoftwareOutsourcing.png";
import RemoteOffice from "./../../assets/Expertise/RemoteOffice.png";
import ExpertiseContainSlider from './ExpertiseContainSlider';

const ExpertiseContain = () => {
  const ContainData = [
    {
      img: dedicated,
      title: "Dedicated Teams",
      descrip: "Find your next team member",
    },
    {
      img: StaffAugmentation,
      title: "Staff Augmentation",
      descrip: "Build a distributed development team",
    },
    {
      img: SoftwareOutsourcing,
      title: "Software Outsourcing",
      descrip: "End-to-End Software Development Outsourcing Solutions",
    },
    {
      img: RemoteOffice,
      title: "Remote Office",
      descrip: "Open your own remote development center and grow your business",
    },
  ];

  return (
    <div className="w-full" >
      <div className=" hidden sm:grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-5 ">
        {ContainData?.map((data, inx) => (
          <ExpertiseContainCard data={data} key={inx}></ExpertiseContainCard>
        ))}
      </div>
      {/* slider */}
      <div className=" block sm:hidden " >
        <ExpertiseContainSlider expertiseInfo={ContainData} ></ExpertiseContainSlider>
      </div>
    </div>
  );
};

export default ExpertiseContain;
