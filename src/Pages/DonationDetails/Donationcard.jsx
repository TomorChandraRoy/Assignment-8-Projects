/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const Donationcard = ({donationPage1} ) => {

  const { id,image,title,description,donate,style : css } = donationPage1 || {};

  console.log(css);

  const handleDonat = ()=>{

    const addedDonation =[];

    const donateAmount = JSON.parse(localStorage.getItem('amount'))


    if(!donateAmount){
      addedDonation.push(donationPage1);
      localStorage.setItem('amount',JSON.stringify(addedDonation))

      // Swal.fire(
      //   'Thank You',
      //   ' Your Donate successfull ',
      //   'success'
      // )
    }

    else{

      const isExits = donateAmount.find(donation2 => donation2.id == id )


      if(!isExits){
      addedDonation.push(...donateAmount,donationPage1)
      localStorage.setItem('amount',JSON.stringify(addedDonation));
      // Swal.fire(
      //   'Thank You',
      //   ' Your Donate Successfull',
      //   'success'
      // )
      }
      else{
        // Swal.fire(
        //   '😍',
        //   'Your donation has already been successful',
        //   'error'
        // )
      }

    }
  }

  return (
    <div>
      <div className="lg:w-[1300px] h-[450px] my-5 ">
        <img className="w-[1300px] h-[450px]  rounded" src={image} alt="" />

        <div className=" bg-[#0b0b0b80] opacity-100 w-[425px] h-[61px] md:w-[768px] lg:w-[1300px]  absolute -mt-[61px] "></div>

       

        <div  className="mx-5">
          <button style={{backgroundColor: css?.color}} onClick={handleDonat} 
           className="btn border-none text-gray-50  -mt-[54px] absolute">
          Donate ${donate}
          </button>
        </div>


      </div>

      <div className="text-center my-5 md:text-center lg:text-left">
      <h2 className=" font-bold md:font-bold text-2xl">{title}</h2>
      <p className=" font-normal mt-3 md:mt-3">{description}</p>
      </div>
    </div>
  );
};

export default Donationcard;
