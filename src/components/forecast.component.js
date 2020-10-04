import React from 'react';
import { Link } from 'react-router-dom';
import { getWeatherIcone, formatAMPM, calCelsius } from '../cal'

export default function ForecastWeather(props) {
    let { day } = formatAMPM(props.forecastDetail.dt_txt);
    return (
        <Link
            to={"/hourly?city=" + props.city + "&day=" + day}>
            <div className="w-card">
                <div className="w-body">
                    <p className="card-text" style={{ 'fontWeight': '700' }}>{day}</p>
                    <i className={getWeatherIcone(props.forecastDetail.weather[0].id)}></i>
                    <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                        <span>{calCelsius(props.forecastDetail.main.temp_max)}<i className="wi wi-celsius"></i></span>&nbsp;
                    |&nbsp;<span>{calCelsius(props.forecastDetail.main.temp_min)}<i className="wi wi-celsius"></i></span>
                    </div>
                </div>
            </div>
        </Link>
    )
}