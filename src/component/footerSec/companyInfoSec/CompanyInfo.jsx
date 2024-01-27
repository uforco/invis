import logo from "./../../../assets/logo/Invislogo.png";
import phone from "./../../../assets/footer/Phone.png";
import email from "./../../../assets/footer/Email.png";
import Location from "./../../../assets/footer/Location.png";
const CompanyInfo = () => {
  return (
    <div>
      <div className=" flex flex-col font-Poppins gap-10 " >
        <div className=" w-56 ">
          <img src={logo} alt="" />
        </div>
        <div className=" flex flex-col gap-4 " >
          <p>
            Expertly trained, battle-tested, elite software developers on demand
          </p>
          <div className=" flex justify-start gap-3 items-center ">
            <span>
              <img className=" w-6 h-6 " src={phone} alt="phone" />
            </span>
            <p>+94 713249222</p>
          </div>
          <div className=" flex justify-start gap-3  ">
            <span>
              <img className=" w-6 h-6 " src={email} alt="phone" />
            </span>
            <p>info@invis.com</p>
          </div>
          <div className=" flex justify-start gap-3 ">
            <span>
              <img className=" -ml-[2px] w-8 lg:w-10 2xl:w-8 " src={Location} alt="phone" />
            </span>
            <p>311 Marshall cres, Orangeville, ON, L9W 4Y5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
