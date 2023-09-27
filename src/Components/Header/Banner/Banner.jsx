import { useEffect, useState } from "react";
import DonationData from "../../Donation/DonationData";

const Banner = () => {

const [allCard, setAllCard] = useState([]);
const [allCatagory, setAllCatagory] = useState([]);

useEffect(()=>{
  fetch('/donation.json')
  .then (res => res.json())
  .then(data => {setAllCard(data),setAllCatagory(data)});
},[])
const handleOnSumit = e =>{
e.preventDefault()
const inValue = e.target.catagoryName.value.trim()
const allData = allCatagory
const fillter = allData.filter(cardData => cardData.category === inValue)
setAllCard(fillter)

}
  return (
    <div>
      <div className="h-[70vh] mb-28 mt-10 ">
        <div className="hero min-h-ful ">
          <img  src="/public/Rectangle 4281.png" alt="" />

          <div className="hero-overlay opacity-90  bg-slate-200 "></div>
  

          <div className="hero-content text-center text-black">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold text-[#0B0B0B]">
                I Grow By Helping People In Need
              </h1>

              <div >
                <form onSubmit={handleOnSumit} className="flex gap-1">
                <input
                  name="catagoryName"
                  placeholder="Search here...."
                  className="input  w-full max-w-xs"
                />
                <input type="submit" className=" btn-primary btn border-none bg-[#FF444A] text-white" value={'Search'}></input>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      <DonationData totalAllCard={allCard}></DonationData>
    </div>
  );
};

export default Banner;
