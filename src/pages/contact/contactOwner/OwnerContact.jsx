import WidthControl from "./../../../layout/widthControl/WidthControl";
import OwnerContactCard from "./OwnerContactCard";
import invis from "./../../../assets/ConnectWith/Invislogo.png";
const OwnerContact = () => {
  const employeeInfo = [
    {
      employeeImage: invis,
      employeeName: "Office",
      employeePost: "",
      employeeEmail: "info@invis.com",
      employeePhone: "+94 011 283 744",
    },
    {
      employeeImage: "https://i.ibb.co/p3N0q5h/avatar200.png",
      employeeName: "Vishwa Liyanapathirana",
      employeePost: "Human Resources",
      employeeEmail: "Vishwa@invis.com",
      employeePhone: "+94 713 249 222",
    },
    {
      employeeImage: "https://i.ibb.co/p3N0q5h/avatar200.png",
      employeeName: "Kasun Perera",
      employeePost: "Funder/CEO",
      employeeEmail: "Kasun@invis.com",
      employeePhone: "+44 532 82820 9292",
    },
  ];

  return (
    <div className=" my-20 " >
      <WidthControl>
        <div className=" grid gap-1 grid-cols-3 py-16 ">
          {employeeInfo?.map((item, inx) => (
            <OwnerContactCard
              data={item}
              inx={inx}
              key={inx}
            ></OwnerContactCard>
          ))}
        </div>
      </WidthControl>
    </div>
  );
};

export default OwnerContact;
