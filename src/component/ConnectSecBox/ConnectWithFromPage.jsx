import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
// import Server_Url from "../../hook/Server_Url";
import Server_Url from "./../../hook/Server_Url";

const ConnectWithFromPage = () => {
  const postEmail = Server_Url();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    postEmail.post("/email", data).then(({ data }) => {
      console.log(data);
      // reset()
      if (data?.mail) {
        reset();
      }
    });
  };

  // console.log(watch("Checkbox"))

  return (
    <Card color="transparent" shadow={false}>
      <form onSubmit={handleSubmit(onSubmit)} className=" py-2  w-full ">
        <div className=" flex flex-col w-full pt-8 py-3 gap-6">
          <div className=" flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
            <div className=" w-full md:w-[270px] lg:w-[250px] xl:w-[280px] ">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-[#16205F] "
              >
                Company
              </Typography>
              <Input
                size="lg"
                placeholder="Company Name"
                className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("company", { required: true })}
              />
            </div>
            <div className=" w-full md:w-[270px] lg:w-[250px] xl:w-[280px]">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-[#16205F] "
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your Name"
                className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("name", { required: true })}
              />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
            <div className=" w-full md:w-[270px] lg:w-[250px] xl:w-[280px]   ">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-[#16205F] "
              >
                Phone Number
              </Typography>
              <Input
                size="lg"
                placeholder="Phone Number"
                type="number"
                className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("number", { required: true })}
              />
            </div>
            <div className=" w-full md:w-[270px] lg:w-[250px] xl:w-[280px] ">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-[#16205F] "
              >
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("gmail", { required: true })}
              />
            </div>
          </div>
          <div className=" flex justify-start w-full items-center ">
            <div className=" w-full ">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 text-[#16205F] "
              >
                Project Detail
              </Typography>
              {/* <Textarea size="md"  /> */}
              <Textarea
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 h w-full focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("project_detail", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className=" flex mb-6 flex-col ">
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex text-[#16205F] items-center font-Poppins font-normal"
              >
                By sending this form I confirm that I have read and accept the
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            {...register("Checkbox", { required: true })}
          />
          <Link
            to={""}
            className=" ml-8 sm:-mt-2 font-semibold hover:underline "
          >
            Privacy Policy
          </Link>
        </div>
        <Button
          type="submit"
          className=" transition group duration-500 ease-in-out shadow-sm shadow-[#ff99007a] flex justify-center items-center  gap-2 rounded-lg bg-gradient-to-r hover:bg-gradient-to-br p-3 w-full lg:w-1/2 from-[#f90]  to-[#F2CB00] text-sm text-white font-Poppins font-medium "
        >
          <div className=" relative ">
            <h2 className=" px-4 pr-14 uppercase font-Poppins font-semibold ">
              GET CONSULTATION
            </h2>
            <span className=" absolute transition ease-in-out top-1/2 -translate-y-1/2 group-hover:right-[24px] right-[28px] text-xl  ">
              <FaArrowRightLong></FaArrowRightLong>
            </span>
          </div>
        </Button>
      </form>
    </Card>
  );
};

export default ConnectWithFromPage;
