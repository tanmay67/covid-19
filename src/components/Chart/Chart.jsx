import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';

const Chart = (props) => {
  const [dailyData, setdailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className="row">
      <div className="col-md-12">{lineChart}</div>
    </div>
  );
};

export default Chart;
