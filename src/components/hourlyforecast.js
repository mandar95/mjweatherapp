import React, { useState, useEffect } from 'react';
import { api } from "../api";
import HourelyWeather from "./hourly.component";
import { formatAMPM } from '../cal'

export default function HourlyForecast(props) {
    var text = props.location.search;
    var Api = api;
    var city = text.substring((text.indexOf("=") + 1), text.indexOf("&"));
    var day = text.substring((text.indexOf("&") + 5));

    const [state, setState] = useState({
        forecastData: undefined,
    });

    useEffect(() => {
        getWheatherData(city);
    }, []);

    const getWheatherData = async (city) => {
        var City = city.toLowerCase();
        const api_call = await fetch(`${Api.baseUrl}forecast?q=${City}&appid=${Api.key}`);
        const response = await api_call.json();
        setState({
            forecastData: [...response.list],
        })
    }
    const forecastWeatherList = () => {
        return state.forecastData.map((currentexercise, i) => {
            var d = formatAMPM(currentexercise.dt_txt).day
            if (d === day) {
                return <HourelyWeather forecastDetail={currentexercise} key={currentexercise.dt} />
            }
            else {
                return null;
            }
        })
    }
    function back() {
        props.history.push("/")
    }
    return (
        <React.Fragment>
            {(typeof state.forecastData !== 'undefined') ?
                <div className="w-row" style={{ 'marginTop': '20px', 'overflowX': 'auto' }}>
                    <button onClick={back} className="w-btn">back</button>
                    {forecastWeatherList()}
                </div>
                :
                <div className="w-loading">
                    Loading...
                </div>
            }
        </React.Fragment>
    )
}