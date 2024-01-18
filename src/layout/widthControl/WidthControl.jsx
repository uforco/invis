import PropTypes from "prop-types";

const WidthControl = ({ children }) => {
  return <div className=" w-auto max-w-screen-2xl mx-auto ">{children}</div>;
};

WidthControl.propTypes = {
  children: PropTypes.object,
};

export default WidthControl;
