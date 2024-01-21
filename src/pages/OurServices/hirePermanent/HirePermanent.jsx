import ProcessCard from "../../../component/processCard/ProcessCard";
import dedicated from "./../../../assets/Expertise/dedicated.png";
import StaffAugmentation from "./../../../assets/Expertise/StaffAugmentation.png";
import SoftwareOutsourcing from "./../../../assets/Expertise/SoftwareOutsourcing.png";
import RemoteOffice from "./../../../assets/Expertise/RemoteOffice.png";
import OurTitleSection from './../../../component/ourTitleSection/OurTitleSection';
const HirePermanent = () => {
  const ContainData = [
    {
      img: dedicated,
      title: "Dedicated Teams",
      descraption:
        "Building an extended team with Courtney is just like opening your own remote development center, but without the hassle. ",
    },
    {
      img: StaffAugmentation,
      title: "Staff Augmentation",
      descraption: `IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.`,
    },
    {
      img: SoftwareOutsourcing,
      title: "Software Outsourcing",
      descraption: `Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.`,
    },
    {
      img: RemoteOffice,
      title: "Remote Office",
      descraption: `Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.`,
    },
  ];

  const heading = {
    title: "Hire Permanent and Remote Developers",
    descraption: "From full-time remote engineering teams to hourly contractors, work with remote devs as needed"
  }

  return (
    <div className=" py-24 flex flex-col gap-16 ">
      <OurTitleSection heading={heading} ></OurTitleSection>
      <div>
        <div className=" grid grid-cols-2 gap-32 gap-y-4 ">
          {ContainData?.map((item, inx) => (
            <ProcessCard item={item} key={inx}></ProcessCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HirePermanent;
