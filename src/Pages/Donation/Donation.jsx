import { useEffect, useState } from "react";
import DonationPage from "../../Components/Donation/DonationPage/DonationPage";



const Donation = () => {

    const[donation, setDonation] =useState([]);
    const [noFound, setFound] = useState(false);

    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(()=>{
        const donateAmount = JSON.parse(localStorage.getItem('amount'))

        if(donateAmount){
            setDonation(donateAmount)
        }
        else{
            setFound(<h1 className="font-extrabold text-2xl">No Data Found Plz Add Donation Card </h1>)
        }

    }, []);
    console.log(donation);

    const handleRemove =()=>{
        localStorage.clear()
        setDonation([])
        setFound('No Data Found')
    }

    return (
        <div>{noFound ? <p className="h-[80vh] flex items-center justify-center">{noFound}</p> : (
            <div className="mt-10">
            {donation.length >0 && <button onClick={handleRemove} className="p-3 bg-green-500 block mx-auto rounded font-bold text-[#f3f1f1]"> Deleted All Donation</button>}

            <div className="grid gap-5 my-10 grid-cols-1 md:grid-cols-1  lg:grid-cols-2 ">
            {
                isShowAll  ? donation.map((singleData) => (
                <DonationPage donation1={singleData} key={singleData.id}></DonationPage>))


                :donation.slice(0, 4).map((singleData) => (
                <DonationPage donation1={singleData} key={singleData.id}></DonationPage>))

            }
            </div>

            <div>
                {
            donation.length>  4 &&

            <button  onClick={()=>setIsShowAll(!isShowAll)}  className="px-4 py-2 text-xl bg-[#009444] block mx-auto my-5 rounded font-bold text-white"> {
                isShowAll ? '' : 'See All'
            }
            </button>
                }
            </div>
        </div>
        )}
        </div>
    );
};

export default Donation;
