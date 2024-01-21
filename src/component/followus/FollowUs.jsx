import Linkdin from "./../../assets/FollowUs/LinkedIn.png";
import Facebook from "./../../assets/FollowUs/Facebook.png";
import Instagram from "./../../assets/FollowUs/Instagram.png";
import Twitter from "./../../assets/FollowUs/Twitter.png";
import YouTube from "./../../assets/FollowUs/YouTube.png";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const FollowUs = ({ iconSize = 32 }) => {
  const socialIcon = [
    {
      icon: Linkdin,
      link: "https://www.linkedin.com",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com",
    },
    {
      icon: Twitter,
      link: "https://twitter.com",
    },
    {
      icon: YouTube,
      link: "https://www.youtube.com",
    },
  ];

  return (
    <div>
      <h2 className=" font-Poppins text-[#16205F] pb-6 text-4xl font-semibold ">
        Follow us
      </h2>
      <div className=" flex gap-5  ">
        {socialIcon?.map((logo, inx) => (
          <Link to={logo?.link} key={inx}>
            <img
              className={`w-[${iconSize}px]`}
              src={logo?.icon}
              alt={logo?.link}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
FollowUs.propTypes = {
  iconSize: PropTypes.number,
};
export default FollowUs;
