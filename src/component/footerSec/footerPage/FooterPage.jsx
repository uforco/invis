import FollowUs from "../../followus/FollowUs";
import WidthControl from "./../../../layout/widthControl/WidthControl";
import CompanyInfo from "./../companyInfoSec/CompanyInfo";
import InfoCard from "./../infoCard/InfoCard";

const FooterPage = () => {
  const companyInfoLink = [
    {
      title: "Company",
      optionText: [
        {
          name: "About Us",
          pageLink: "/about",
        },
        {
          name: "Services",
          pageLink: "/services",
        },
        {
          name: "Privacy Policy",
          pageLink: "/privacy_policy",
        },
        {
          name: "Terms & Conditions",
          pageLink: "/terms",
        },
        {
          name: "Contact",
          pageLink: "/contact",
        },
      ],
    },
    {
      title: "Services",
      optionText: [
        {
          name: "Hire Permanent Staff",
          pageLink: "",
        },
        {
          name: "Staff Augmentation",
          pageLink: "",
        },
        {
          name: "Software Outsourcing",
          pageLink: "",
        },
        {
          name: "Build Remote Office",
          pageLink: "",
        },
      ],
    },
    {
      title: "How to Start",
      optionText: [
        {
          name: "You Asked",
          pageLink: "",
        },
        {
          name: "We Proceed",
          pageLink: "",
        },
        {
          name: "Negotiate",
          pageLink: "",
        },
        {
          name: "You Get",
          pageLink: "",
        },
      ],
    },
  ];

  return (
    <div className=" border-t my-0 mb-6 ">
      <WidthControl>
        <div className=" py-6 mx-5 ">
          <div className=" grid gap-20 gap-y-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <CompanyInfo></CompanyInfo>
            {companyInfoLink?.map((data, inx) => (
              <InfoCard data={data} inx={inx} key={inx}></InfoCard>
            ))}
          </div>
          <div className=" pt-12 ">
            <FollowUs titleSize={"32px"} iconSize={"28px"}></FollowUs>
          </div>
        </div>
      </WidthControl>
      <div className="pt-6 mt-8 border-t ">
        <WidthControl>
          <p className=" mx-5 text-center " >Copyright © 2024 - All right reserved by Invis Tech Inc.</p>
        </WidthControl>
      </div>
    </div>
  );
};

export default FooterPage;
