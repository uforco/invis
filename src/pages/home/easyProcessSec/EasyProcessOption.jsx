import EasyProcessCard from "./EasyProcessCard";

import youask from "./../../../assets/Easyprocess/youask.png";
import weproceed from "./../../../assets/Easyprocess/weproceed.png";
import handshake from "./../../../assets/Easyprocess/handshake.png";
import medal from "./../../../assets/Easyprocess/medal.png";

const EasyProcessOption = () => {
  const Option = [
    {
      img: youask,
      processNumber: "01",
      processTitle: "YOU ASK",
    },
    {
      img: weproceed,
      processNumber: "02",
      processTitle: "WE PROCEED",
    },
    {
      img: handshake,
      processNumber: "03",
      processTitle: "Negotiate",
    },
    {
      img: medal,
      processNumber: "04",
      processTitle: "YOU GET",
    },
  ];

  return (
    <div className="w-full grid gap-16 sm:gap-9 lg:gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
      {Option.map((data, inx) => (
        <EasyProcessCard data={data} key={inx}></EasyProcessCard>
      ))}
    </div>
  );
};

export default EasyProcessOption;
