import EasyProcessHeader from "./EasyProcessHeader";
import WidthControl from "./../../../layout/widthControl/WidthControl";
import EasyProcessOption from './EasyProcessOption';

const EasyProcess = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-[#ffa41c] to-[#F2CB00] ">
      <WidthControl>
        <div className=" w-full flex flex-col items-center h-[590px] py-16 " >
          <EasyProcessHeader></EasyProcessHeader>
          <EasyProcessOption></EasyProcessOption>
        </div>
      </WidthControl>
    </div>
  );
};

export default EasyProcess;
