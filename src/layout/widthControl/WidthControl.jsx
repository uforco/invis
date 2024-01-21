import PropTypes from "prop-types";

const WidthControl = ({ children }) => {
  return <div className=" w-auto max-w-screen-2xl h-auto mx-auto overflow-hidden ">{children}</div>;
};

WidthControl.propTypes = {
  children: PropTypes.object,
};

export default WidthControl;
