import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donationcard from "./Donationcard";

const DonationDetails = () => {

  const [donation, setDonation] = useState({});
  

  const { id } = useParams();
  

  const dataDonation = useLoaderData();
 

  useEffect(() => {
    const findDonation = dataDonation?.find(
      (singleData) => singleData.id == id);
    
    setDonation(findDonation);
  }, [id, dataDonation]);


  return (
        <div>
            <Donationcard donationPage1={donation}></Donationcard>
        </div>
  );

};

export default DonationDetails;
