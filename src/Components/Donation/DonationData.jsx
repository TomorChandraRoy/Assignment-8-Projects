/* eslint-disable react/prop-types */
import SingleDonation from "./SingleDonation";

const DonationData = ({totalAllCard}) => {

    return (
        <div >
           
            <div className="grid grid-cols-1 mx-[60px] gap-14  md:grid-cols-2 mt-[50px] lg:grid-cols-4 lg:mt-32 mb-14 ">
                {
                    
                    totalAllCard?.map(singleData => <SingleDonation singleData1={singleData} key={singleData.id}></SingleDonation> )
                }
            </div>
        </div>
    );
};

export default DonationData;