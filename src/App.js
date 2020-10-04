import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Weather from './components/weather.component';
import HourlyForecast from './components/hourlyforecast'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="w-container">
          <Route path="/" exact component={Weather} />
          <Route path="/hourly" component={HourlyForecast} />
        </div>
      </Router>
    )
  }
}
export default App;
