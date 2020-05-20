import React from 'react';
import CountUp from 'react-countup';

const SpecificCountry = (props) => {
  const renderData = props.countryInfo.country ? (
    <div className="card card-body text-center">
      <h1 className="card-title">{props.countryInfo.country}</h1>
      <p>
        Infected:{' '}
        <CountUp
          start={0}
          end={props.countryInfo.cases}
          duration={1.5}
          separator=","
        />
      </p>
      <p>
        Deahs:{' '}
        <CountUp
          start={0}
          end={props.countryInfo.deaths}
          duration={1.5}
          separator=","
        />
      </p>
      <p>
        Recovered:{' '}
        <CountUp
          start={0}
          end={props.countryInfo.recovered}
          duration={1.5}
          separator=","
        />
      </p>
    </div>
  ) : null;

  return <div>{renderData}</div>;
};

export default SpecificCountry;
