import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStates = async () => {
  const { data } = await axios.get(
    'https://coronavirus-19-api.herokuapp.com/countries'
  );
  return data;
};

export const fetchStatesWise = async () => {
  const { data } = await axios.get(
    'https://api.covid19india.org/v2/state_district_wise.json'
  );
  const renderData = data.map((state) => ({
    state: state.state,
    districtData: state.districtData,
  }));
  return renderData;
};
