import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props) {
  const [data, setData] = useState({
    labels: [
      `${calculatePercentage(props?.data?.male)}% Male`,
      `${calculatePercentage(props?.data?.female)}% Female`,
      `${calculatePercentage(props?.data?.unknown)}% Unknown`,
    ],

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
      labels: [
        `${calculatePercentage(props?.data?.male)}% Male`,
        `${calculatePercentage(props?.data?.female)}% Female`,
        `${calculatePercentage(props?.data?.unknown)}% Unknown`,
      ],

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

  function calculatePercentage(actualCount) {
    const totalCount =
      props?.data?.male + props?.data?.female + props?.data?.unknown;
    return parseFloat((actualCount / totalCount) * 100).toFixed();
  }

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
