import { useLoaderData } from "react-router-dom";
import Chart from "react-apexcharts";

const Statistics = () => {
  let totalData = 0;
  let lokalTk = 0;

  const allData = useLoaderData();

  allData.forEach((element) => {
    const price = element.donate;
    totalData = totalData + price;
  });


  const lokalData = JSON.parse(localStorage.getItem("amount"));
  if(lokalData){
    lokalData .forEach  ((element ) => {
      const price = element.donate
      lokalTk = lokalTk + price;
    });
  }
  else{
    ''
  }


  return (
    <div className="ml-20 my-10">
      <Chart
        type="pie"
        width={"90%"}
        height={450}
        series={[ totalData, lokalTk] }
        options={{
          labels: ["Total Donation", "Your Donation"],
          colors: ["#FF444A", "#00C49F"],

          legend: {
            position: "bottom",
            
          },

          dataLabels: {
            style: {
              fontSize: "16px",
              fontWeight: "bold",
              
            },
          },
        }}
      />
    </div>
  );
};

export default Statistics;

