/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationPage = ({ donation1 }) => {
  console.log(donation1);
  const {category,donate,image,title,style} = donation1;
  
  return (
    <div>
      <div style={{backgroundColor:style.card_color}} className="relative flex w-full max-w-[48rem]   flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-[280px]  lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
        <div  className="px-3 p-5 md:px-5 lg:px-5">
          <h6 style={{backgroundColor: style.category_bg, color:style.color}} className="mb-4  w-fit px-1 rounded block font-sans text-base font-semibold  leading-relaxed tracking-normal antialiased">
            {category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-[#0B0B0B] antialiased">
            {title}
          </h4>
          <h3 style={{color:style.color}}>${donate}.00</h3>

          <a className="inline-block" href="#">
            <Link to='/'>
            <button style={{backgroundColor:style.color}} className="btn text-gray-50 mt-5">
              View Details
            </button>          
            </Link>
          </a>

        </div>
      </div>
    </div>
  );
};

export default DonationPage;
