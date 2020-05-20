import React, { useState, useEffect } from 'react';
import { fetchStates } from '../../api';

const Countries = (props) => {
  const [states, setstates] = useState([]);

  useEffect(() => {
    const statesAPI = async () => {
      setstates(await fetchStates());
    };

    statesAPI();
  }, []);

  const changeData = (e) => {
    props.returnInfo(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <select className="form-control" onChange={changeData}>
            <option>Choose Country...</option>
            {states.map((state, i) => {
              return (
                <option key={i} value={state.country}>
                  {state.country}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Countries;
