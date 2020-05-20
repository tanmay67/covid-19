import React, { Component, Fragment } from 'react';
import { Cards, Chart } from './components';
import { fetchData } from './api';
import Countries from './components/Countries/Countries';
import axios from 'axios';
import SpecificCountry from './components/SpecificCountry/SpecificCountry';
import States from './components/States/States';
import NavbarComp from './components/Navbar/Navbar';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    data: {},
    countryInfo: {},
    statesInfo: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  returnInfo = async (country) => {
    const { data } = await axios.get(
      `https://coronavirus-19-api.herokuapp.com/countries/${country}`
    );
    this.setState({ countryInfo: data });
  };

  render() {
    const { data, statesInfo } = this.state;
    const overall = () => {
      return (
        <Fragment>
          <Cards data={data} />
          <Chart />
        </Fragment>
      );
    };

    const countries = () => {
      return (
        <Fragment>
          <Countries returnInfo={this.returnInfo} />
          <SpecificCountry countryInfo={this.state.countryInfo} />
        </Fragment>
      );
    };
    return (
      <BrowserRouter>
        <div>
          <NavbarComp />
          <div className="container mt-5">
            <Switch>
              <Route path="/overall" render={overall} />
              <Route path="/countries" render={countries} />

              <Route path="/specificcountry" render={() => <States />} />
              <Redirect to="/overall" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
