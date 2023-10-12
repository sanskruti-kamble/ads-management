import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props) {
  const [data, setData] = useState({
    labels: [`40% Male`, `35% Female`, `25% Unknown`],

    datasets: [
      {
        data: [props?.data?.male, props?.data?.female, props?.data?.unknown],
        backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 4,
        hoverOffset: 5,
        radius: "100%",
      },
    ],
  });

  const options = {
    cutout: "60%",
    aspectRatio: 1.77,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "black",
          font: {
            size: 18,
          },
        },
      },
    },
  };

  useEffect(() => {
    setData({
      labels: [`40% Male`, `35% Female`, `25% Unknown`],

      datasets: [
        {
          data: [props?.data?.male, props?.data?.female, props?.data?.unknown],
          backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
          borderColor: ["#fff", "#fff", "#fff"],
          borderWidth: 4,
          hoverOffset: 5,
          radius: "100%",
        },
      ],
    });
  }, [props.data]);

  return (
    <>
      <Doughnut
        data={data}
        options={options}
        style={{ height: "250px", width: "500px" }}
      />
    </>
  );
}
