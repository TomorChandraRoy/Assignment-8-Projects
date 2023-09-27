/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleDonation = ({ singleData1 }) => {

  const {id,image,title, style, category} = singleData1 || {};
  
  // console.log(singleData1);

  return (
    <Link to={`/donationData/${id}`}>
    <div style={{backgroundColor:style.card_color}}  className="card  card-compact bg-base-100 shadow-xl">
     <figure><img src={image} alt="" /></figure>
     <div className="card-body">
        <div className="card-title w-fit">

          <p style={{color:style.color, backgroundColor:style.category_bg }}  className=" text-sm font-medium px-2 rounded">{category}</p>
          
        </div>
        
           <h2 style={{color:style.color}} className="text-[17px] font-semibold">{title}</h2>
     </div>
   </div> 
    </Link>
  );
};

export default SingleDonation;

