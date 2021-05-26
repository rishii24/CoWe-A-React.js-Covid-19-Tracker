import { Cards, Chart, Country } from './components'
import { fetchData } from './api'
import covidImg from './images/Covid.png';
import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import style from './App.module.css';

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data })

    // console.log(fetchedData)

  }


  // To get info about particular country and display it on UI
  handleCountryChange = async (country) => {
    //fetch data then set state
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {

    const { data,country } = this.state

    return (
      <div className={style.App}>
        <Typography className={style.Heading}>CoWe` - A Covid-19 Tracker</Typography>
        <img src={covidImg} className={style.covidimg} alt="Covid-19"></img>
        <Typography className={style.headPara}>CoWe` is a data tracker that helps in tracking covid-19 (SARS-CoV-2) cases across the globe <br/>
        and lets us know the current covid situation with daily updation in data.</Typography>
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}


export default App;
