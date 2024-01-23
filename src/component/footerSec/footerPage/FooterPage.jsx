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
    <div className=" border-t my-10 mb-6 ">
      <WidthControl>
        <div className=" py-6 ">
          <div className=" grid gap-3 grid-cols-4 ">
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
          <p>Copyright © 2024 - All right reserved by Invis Tech Inc.</p>
        </WidthControl>
      </div>
    </div>
  );
};

export default FooterPage;
