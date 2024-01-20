import { FaCheck } from "react-icons/fa";
const PriceCard = () => {
    return (
        <div className=" bg-blue-gray-500 py-10 w-96 border  border-red-600  overflow-hidden " >
                <div className=" font-Poppins flex flex-col gap-1 justify-center items-center ">
                  <h1 className=" uppercase text-3xl font-medium border-b-2 border-black ">Basic</h1>
                  <p className=" uppercase font-medium tracking-widest ">WebSite Design</p>
                  <h2 className=" font-bold text-4xl mt-1 "> $ 200 </h2>
                </div>

                <div className=" flex py-5 flex-col justify-center items-center gap-2 " >
                  <div className=" flex gap-1 font-Poppins font-semibold uppercase justify-center items-center ">
                    <h4 className=" bg-green-500 text-white rounded-full p-1 ">
                      <FaCheck></FaCheck>
                    </h4>
                    <p>Creative ui/ux Design</p>
                  </div>
                  <div className=" flex gap-1 font-Poppins font-semibold uppercase justify-center items-center ">
                    <h4 className=" bg-green-500 text-white rounded-full p-1 ">
                      <FaCheck></FaCheck>
                    </h4>
                    <p>Creative ui/ux Design</p>
                  </div>
                  <div className=" flex gap-1 font-Poppins font-semibold uppercase justify-center items-center ">
                    <h4 className=" bg-green-500 text-white rounded-full p-1 ">
                      <FaCheck></FaCheck>
                    </h4>
                    <p>Creative ui/ux Design</p>
                  </div>
                </div>

              </div>
    );
};

export default PriceCard;