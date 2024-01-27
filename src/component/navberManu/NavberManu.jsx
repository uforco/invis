import { useEffect, useState } from "react";
import WidthControl from "./../../layout/widthControl/WidthControl";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "./../../assets/logo/Invislogo.png";
import { Link, NavLink } from "react-router-dom";
const NavberManu = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 font-Poppins mb-4 flex capitalize flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-semibold"
      >
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-[#f90]" : " text-[#16205F] hover:text-[#F90] "
              }
            >
              Home
            </span>
          )}
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-semibold"
      >
        <NavLink to={"/how_to_start"}>
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-[#f90]" : " text-[#16205F] hover:text-[#F90] "
              }
            >
              how to start
            </span>
          )}
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-Poppins font-semibold"
      >
        <NavLink to={"/services"}>
          {({ isActive }) => (
            <span
              className={
                isActive ? "text-[#f90]" : " text-[#16205F] hover:text-[#F90] "
              }
            >
              services
            </span>
          )}
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 block lg:hidden font-Poppins font-semibold"
      >
        <NavLink to={"/contact"}>
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-[#f90]"
                  : " text-[#16205F] capitalize hover:text-[#F90] "
              }
            >
              contact us
            </span>
          )}
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <div className=" relative w-full h-14 my-1 ">
      <div className=" fixed z-50 top-0 right-0 left-0 ">
        <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <WidthControl>
            <>
              <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                  as="a"
                  href="#"
                  className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                  <Link to={"/"}>
                    <img className=" w-28 " src={logo} alt="" />
                  </Link>
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="mr-2 hidden lg:block">{navList}</div>
                  <div className="hidden lg:flex items-center gap-x-1">
                    <Button className="w-full sm:w-auto relative transition group duration-200 ease-in-out shadow-sm  flex justify-center items-center  gap-2 rounded-lg bg-transparent border-2  border-[#16205F]  p-2 text-sm text-[#16205F] font-semibold hover:border-[#0d1542] hover:bg-[#0b153d] hover:text-white font-Poppins">
                      <h2 className=" px-4 pr-10 ">Build a team</h2>
                      <span className=" absolute  top-1/2 -translate-y-1/2 group-hover:right-[18px] right-[22px] text-xl ">
                        <FaArrowRightLong></FaArrowRightLong>
                      </span>
                    </Button>
                  </div>
                  <div className=" hidden lg:block ">
                    <Typography
                      as="li"
                      variant="small"
                      color="blue-gray"
                      className="p-1 font-Poppins font-semibold"
                    >
                      <NavLink to={"/contact"}>
                        {({ isActive }) => (
                          <span
                            className={
                              isActive
                                ? "text-[#f90]"
                                : " text-[#16205F] capitalize hover:text-[#F90] "
                            }
                          >
                            contact us
                          </span>
                        )}
                      </NavLink>
                    </Typography>
                  </div>
                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
              </div>
              <MobileNav className=" Navmanuheight " open={openNav}>
                <div className=" py-3 ">{navList}</div>
                <div className="flex justify-center w-full items-center pt-3 pb-6 gap-x-1">
                  <Button className="w-full relative transition group duration-500 ease-in-out shadow-sm shadow-[#ff99007a] flex justify-center items-center  gap-2 rounded-lg bg-gradient-to-r hover:bg-gradient-to-br p-3 from-[#f90] to-[#F2CB00] text-sm text-white font-Poppins font-medium ">
                    <h2 className=" px-4 pr-10 normal-case ">Build a team</h2>
                    <span className=" absolute transition ease-in-out top-1/2 -translate-y-1/2 group-hover:right-[24px] right-[28px] text-xl  ">
                      <FaArrowRightLong></FaArrowRightLong>
                    </span>
                  </Button>
                </div>
              </MobileNav>
            </>
          </WidthControl>
        </Navbar>
      </div>
    </div>

    // </div>
  );
};

export default NavberManu;
