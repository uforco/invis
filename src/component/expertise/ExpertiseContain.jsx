import ExpertiseContainCard from "./ExpertiseContainCard";
import { PropTypes } from 'prop-types';

const ExpertiseContain = ({ContainData}) => { 
  
  return (
    <div>
      <div className=" grid grid-cols-4 gap-5 ">
        {ContainData?.map((data, inx) => (
          <ExpertiseContainCard data={data} key={inx}></ExpertiseContainCard>
        ))}
      </div>
    </div>
  );
};

ExpertiseContain.propTypes={
  ContainData: PropTypes.array
}


export default ExpertiseContain;
