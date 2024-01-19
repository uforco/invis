import WidthControl from "./../../layout/widthControl/WidthControl";
import ConnectWithLeftSide from "./ConnectWithLeftSide";
import ConnectWithRightSide from './ConnectWithRightSide';
const ConnectWithHireToday = () => {
  return (
    <div className=" py-10 " >
      <WidthControl>
        <div className=" flex justify-center items-center " >
          <ConnectWithLeftSide></ConnectWithLeftSide>
          <ConnectWithRightSide></ConnectWithRightSide> 
        </div>
      </WidthControl>
    </div>
  );
};

export default ConnectWithHireToday;
