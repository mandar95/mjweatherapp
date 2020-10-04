import React from 'react';
import { getWeatherIcone, formatAMPM, calCelsius } from '../cal'

export default function HourelyWeather(props) {
    var { date, time, month, year } = formatAMPM(props.forecastDetail.dt_txt);
    return (
        <React.Fragment>
            <div className="w-card">
                <div className="w-body">
                    <p className="card-text" style={{ 'fontWeight': '700' }}>{date} {month} {year}</p>
                    <p className="card-text" style={{ 'fontWeight': '700' }}>{time}</p>
                    <i className={getWeatherIcone(props.forecastDetail.weather[0].id)}></i>
                    <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                        <span>{calCelsius(props.forecastDetail.main.temp_max)}<i className="wi wi-celsius"></i></span>&nbsp;
                    |&nbsp;<span>{calCelsius(props.forecastDetail.main.temp_min)}<i className="wi wi-celsius"></i></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}