/* eslint-disable react/prop-types */
import SingleDonation from "./SingleDonation";

const DonationData = ({totalAllCard}) => {

    return (
        <div >
           
            <div className="grid grid-cols-1 mx-[60px] gap-14 mb-14 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    
                    totalAllCard?.map(singleData => <SingleDonation singleData1={singleData} key={singleData.id}></SingleDonation> )
                }
            </div>
        </div>
    );
};

export default DonationData;