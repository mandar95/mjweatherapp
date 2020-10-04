import React, { useEffect, useState, useCallback } from 'react';
import City from './city.componet';
import ForecastWeather from './forecast.component';
import Chart from './chart.component'
import { CitySkeleton, ForecastSkeleton } from './skeleton.component';
import { api } from '../api';
import _ from 'lodash';

export default function Weather() {
    const [state, setState] = useState({
        city: 'mumbai',
        cityData: undefined,
        forecastData: undefined,
        chartData: []
    });

    useEffect(() => {
        getWheatherData('mumbai');
    }, []);

    const getWheatherData = async (city) => {
        const api_call = await fetch(`${api.baseUrl}forecast?q=${city}&appid=${api.key}`);
        const response = await api_call.json();

        if (response.cod !== "200") {
            alert("enter proper city name")
            return
        }
        setState({
            city: response.city.name,
            forecastData: [...response.list],
            cityData: {
                ...response.city,
                daytime: response.list[0].dt_txt,
                icone: response.list[0].weather[0].id,
                humadity: response.list[0].main.humidity,
                temp: response.list[0].main.temp_max
            },
        })
    }
    const forecastWeatherList = () => {
        state.chartData = [];
        return state.forecastData.map((currentexercise, i) => {
            var d = new Date(currentexercise.dt_txt)
            var hours = d.getHours().toString().length === 1 ? '0' + d.getHours() : d.getHours()
            var h = parseInt(hours)
            if (i === 0) {
                state.chartData.push(currentexercise);
                return <ForecastWeather forecastDetail={currentexercise} city={state.city} key={currentexercise.dt} />
            }
            else {
                if (h === 0) {
                    state.chartData.push(currentexercise);
                    return <ForecastWeather forecastDetail={currentexercise} city={state.city} key={currentexercise.dt} />
                }
                else {
                    return null
                }
            }


        })
    }
    const debounced = useCallback(
        _.debounce(Value => getWheatherData(Value), 1000),
        [],
    );
    const changeCity = (e) => {
        debounced(e.target.value);
    };
    return (
        <React.Fragment>
            {(typeof state.cityData !== 'undefined') ?
                <div>
                    <input className="w-search"
                        type="text"
                        placeholder="Search..."
                        spellCheck="false"
                        onChange={changeCity} />
                    <City coords={state.cityData.coord}
                        sunrise={state.cityData.sunrise}
                        sunset={state.cityData.sunset}
                        city={state.cityData.name}
                        country={state.cityData.country}
                        daytime={state.cityData.daytime}
                        icone={state.cityData.icone}
                        humadity={state.cityData.humadity}
                        temp={state.cityData.temp}
                    />
                    <div className="w-row w-forecast" style={{ 'marginTop': '20px', 'justifyContent': 'center', 'overflowX': 'auto' }}>{forecastWeatherList()}</div>
                    <Chart chartDetails={state.chartData} />
                </div>
                :
                <div>
                    <CitySkeleton />
                    <div className="w-row" style={{ 'marginTop': '20px' }}><ForecastSkeleton /></div>
                </div>
            }
        </React.Fragment>
    )
}
