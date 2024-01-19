import WidthControl from "./../../layout/widthControl/WidthControl";
import ConnectWithLeftSide from "./ConnectWithLeftSide";
import ConnectWithRightSide from './ConnectWithRightSide';
const ConnectWithHireToday = () => {
  return (
    <div className=" py-20 " >
      <WidthControl>
        <div className=" grid grid-cols-3 " >
          <ConnectWithLeftSide></ConnectWithLeftSide>
          <ConnectWithRightSide></ConnectWithRightSide> 
        </div>
      </WidthControl>
    </div>
  );
};

export default ConnectWithHireToday;
