import React, { useEffect, useState } from 'react';
import { fetchStatesWise } from '../../api';

const States = (props) => {
  const [states, setstates] = useState([]);
  const [state, setstate] = useState('');
  const [districtData, setDistrictData] = useState([]);
  const [cityData, setCityData] = useState({});

  const changeData = (e) => {
    setstate(e.target.value);
    states.filter((state) => {
      if (state.state === e.target.value) {
        setDistrictData(state.districtData);
      }
    });
  };

  useEffect(() => {
    const statesAPI = async () => {
      setstates(await fetchStatesWise());
    };
    statesAPI();
  }, [setstates]);

  const changeDistrictData = (e) => {
    setCityData(e.target.value);
    districtData.filter((district) => {
      if (district.district === e.target.value) {
        setCityData({
          district: district.district,
          confirmed: district.confirmed,
          active: district.active,
          recovered: district.recovered,
        });
      }
    });
  };

  return (
    <div>
      <div className="form-group">
        <select className="form-control" onChange={changeData}>
          <option>Choose State...</option>
          {states.map((state, i) => (
            <option value={state.state} key={i}>
              {state.state}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select className="form-control" onChange={changeDistrictData}>
          <option value={1}>Choose City...</option>
          {districtData.map((state, i) => (
            <option value={state.district} key={i}>
              {state.district}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <div className="card card-body text-center">
          <div className="card-title">{cityData.district}</div>
          <p>Confirmed: {cityData.confirmed}</p>
          <p>Recovered: {cityData.recovered}</p>
          <p>Active: {cityData.active}</p>
        </div>
      </div>
    </div>
  );
};

export default States;
