import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import SkeletonRect from '../component/skeleton';
import Chart from 'chart.js/auto';

const BarChart = (props) => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if(props.data){
      var myList = [];
      setData(props.data);
      let isAvailable;
      props.data.forEach(obj => {
        isAvailable = false;
        myList.forEach(inObj => {
          if (obj.PRODUCTLINE === inObj.category) {
            inObj.salesCount += obj.QUANTITYORDERED;
            isAvailable = true;
          }
        })
        if (!isAvailable) {
          myList.push({ category: obj.PRODUCTLINE, salesCount: obj.QUANTITYORDERED })
        }
      })
      setChartData({
        labels: myList.map((data) => data.category),
        datasets: [
          {
            label: "Sold Count",
            data: myList.map((data) => data.salesCount),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      })
    }

  },[props.data])

  return <>
    <div style={{ height: 500, width: '100%' }}>
      {(data.length === 0)? <SkeletonRect />: <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Products sold by Category."
              },
              legend: {
                display: false
              }
            }
          }}
        />}
    </div>
  </>;
}

export default BarChart;