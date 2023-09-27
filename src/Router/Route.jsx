import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/ErrorPage/Error";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Pages/Donation/Donation";

const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
            
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donationdata/:id",
                element: <DonationDetails></DonationDetails>,
                loader : () => fetch('/donation.json')
            }
        ]
    }
])

export default myCreateRoute;