import React, { Component } from 'react';
import './App.css';

import WeatherPerDay from './components/perDay'
import Detailed from './components/Detailed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monday: {
        name: 'monday',
        forecast: 'sun'
      },
      tuesday: {
        name: 'tuesday',
        forecast: 'snow'
      },
      wednesday: {
        name: 'wednesday',
        forecast: 'sun'
      },
      thursday: {
        name: 'thursday',
        forecast: 'sun'
      },
      friday: {
        name: 'friday',
        forecast: 'sun'
      }, saturday: {
        name: 'saturday',
        forecast: 'rain'
      }, sunday: {
        name: 'sunday',
        forecast: 'rain'
      }, details: {
        name: false,
        forecast: false
      }
    }
    this.showDetails = this.showDetails.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  showDetails(e) {
    const currentDay = !!e.target.querySelector('.card-title') ? e.target.querySelector('.card-title').innerText : null;
    if (currentDay) {
      this.setState((prevState) => {
        return { details: { name: currentDay, forecast: this.state[currentDay].forecast } }
      })
    }
  }

  async getWeather() {
    const response = await fetch('http://localhost:5000/')
    const weather = await response.json();
    this.setState((prevState) => {
      return { monday: { name: weather.name, forecast: weather.forecast } }
    })
  }

  componentDidMount() {
    this.getWeather()
  }


  render() {
    return (
      <div className="App" >
        <div className="alert alert-info" role="alert">
          Weather App
          </div>
        <div style={{ margin: "2rem" }} className="card-deck">
          <WeatherPerDay day={this.state.monday.name} forecast={this.state.monday.forecast} onHover={this.showDetails} />
          <WeatherPerDay day={this.state.tuesday.name} forecast={this.state.tuesday.forecast} onHover={this.showDetails} />
          <WeatherPerDay day={this.state.wednesday.name} forecast={this.state.wednesday.forecast} onHover={this.showDetails} />
          <WeatherPerDay day={this.state.thursday.name} forecast={this.state.thursday.forecast} onHover={this.showDetails} />
          <WeatherPerDay day={this.state.friday.name} forecast={this.state.friday.forecast} onHover={this.showDetails} />
          <WeatherPerDay day={this.state.saturday.name} forecast={this.state.saturday.forecast} onHover={this.showDetails} />
          <WeatherPerDay day={this.state.sunday.name} forecast={this.state.sunday.forecast} onHover={this.showDetails} />
        </div>
        <div>
          <Detailed day={this.state.details.name} forecast={this.state.details.forecast} />
        </div>
      </div>
    );
  }
}

export default App;
