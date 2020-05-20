import React from 'react';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className="row text-center m-0 p-0">
      <div className="col-md-4 mt-2">
        <div className="card card-body border border-primary">
          <div className="card-title">Infected</div>
          <h5>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={1.5}
              separator=","
            />
          </h5>
          <p>{new Date(lastUpdate).toDateString()}</p>
          <p>Number of active cases of COVID-19</p>
        </div>
      </div>

      <div className="col-md-4 mt-2">
        <div className="card card-body border border-success">
          <div className="card-title">Recovered</div>
          <h5>
            <CountUp
              start={0}
              end={recovered.value}
              duration={1.5}
              separator=","
            />
          </h5>
          <p>{new Date(lastUpdate).toDateString()}</p>
          <p>Number of recoveries from COVID-19</p>
        </div>
      </div>

      <div className="col-md-4 mt-2">
        <div className="card card-body border border-danger">
          <div className="card-title">Deaths</div>
          <h5>
            <CountUp
              start={0}
              end={deaths.value}
              duration={1.5}
              separator=","
            />
          </h5>
          <p>{new Date(lastUpdate).toDateString()}</p>
          <p>Number of deaths caused by COVID-19</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
