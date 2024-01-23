import WidthControl from "./../../layout/widthControl/WidthControl";
import ConnectWithLeftSide from "./ConnectWithLeftSide";
import ConnectWithRightSide from './ConnectWithRightSide';
const ConnectWithHireToday = () => {
  return (
    <div className=" py-8 my-10 " >
      <WidthControl>
        <div className=" flex flex-col my-10 lg:flex-row justify-center items-center " >
          <ConnectWithLeftSide></ConnectWithLeftSide>
          <ConnectWithRightSide></ConnectWithRightSide> 
        </div>
      </WidthControl>
    </div>
  );
};

export default ConnectWithHireToday;
