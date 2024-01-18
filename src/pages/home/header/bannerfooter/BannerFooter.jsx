import ProcessCard from "./ProcessCard";
import Architect from "./../../../../assets/bannerfooter/Architect.png";
import softwareapplication from "./../../../../assets/bannerfooter/software-application.png";
import technicalsupport from "./../../../../assets/bannerfooter/technical-support.png";

const BannerFooter = () => {
  const data = [
    {
      img: Architect,
      title: "Architect your Solution",
      descraption: ` Our team in on your operational, technological, 
            and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals. `,
    },
    {
      img: softwareapplication,
      title: "Engineer your Solution",
      descraption: `We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
      the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
      industry-specific experience.`,
    },
    {
      img: technicalsupport,
      title: "ReEngineer your Business Process",
      descraption: `Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
      process places the foundation for a more efficient and strong business that can meet demands at scale.`,
    },
  ];
  return (
    <div className="w-full py-20 ">
      <div className=" flex w-full justify-between items-center gap-8 ">
        {
            data.map((item, inx)=> <ProcessCard item={item} key={inx} ></ProcessCard> )
        }
      </div>
    </div>
  );
};

export default BannerFooter;