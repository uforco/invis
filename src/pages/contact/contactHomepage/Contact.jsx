import ConnectWithHireToday from "../../../component/ConnectSecBox/ConnectWithHireToday";
import OurTitleSection from "../../../component/ourTitleSection/OurTitleSection";
import headerimg from "./../../../assets/OurService/headerimg.png";
import OurHeader from "./../../../component/ourHeader/OurHeader";
import WidthControl from "./../../../layout/widthControl/WidthControl"; 
import OwnerContact from './../contactOwner/OwnerContact';
import FollowUs from './../../../component/followus/FollowUs';
const Contact = () => {
  const herderData = {
    headerImg: headerimg,
    headerTitle: "Contact",
    description: `Fuel your success with our comprehensive IT and business solutions. Contact us today for innovative strategies and transformative technologies.`,
  };

  const heading = {
    title: "Get in touch",
    descraption:
      "Please feel free to get in touch with us via any convenient means (phone, whatsapp, email, submit a contact form). We will be glad to answer your questions as soon as possible.",
  };

  return (
    <div>
      <OurHeader data={herderData}></OurHeader>
      <WidthControl>
        <div className=" py-24 pb-16 ">
          <OurTitleSection heading={heading}></OurTitleSection>
        </div>
      </WidthControl>
      <ConnectWithHireToday></ConnectWithHireToday>
      <OwnerContact></OwnerContact>
      <WidthControl>
        <div className=" mb-28 " >
          <FollowUs iconSize={45} ></FollowUs>
        </div>
      </WidthControl>
    </div>
  );
};

export default Contact;
