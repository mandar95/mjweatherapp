import React from 'react';
import { getWeatherIcone, calCelsius, convertTime } from '../cal'

export default function City(props) {
    let { day, time } = formatAMPM(props.daytime);
    return (
        <React.Fragment>
            <div className="w-row">
                <div className="w-left">
                    <i style={{ 'height': '210px', 'width': '240px' }} className={getWeatherIcone(props.icone)}></i>
                    <div className="w-city">
                        <span>{props.city},{props.country}</span><br />
                        <span>{day},{time}</span>
                    </div>
                </div>
                <div className="w-right">
                    <div className="w-right-child">
                        <div>Humadity&nbsp;{props.humadity}%</div>
                        <div>Coordinates&nbsp;
                            {Math.round(parseInt(props.coords.lat).toFixed(4))} ,
                            {Math.round(parseInt(props.coords.lon).toFixed(4))}
                        </div>
                        <div><i className="wi wi-sunset"></i>&nbsp;{convertTime(props.sunset)}</div>
                        <div><i className="wi wi-sunrise"></i>&nbsp;{convertTime(props.sunrise)}</div>
                        <div style={{ 'fontSize': '50px' }}>{calCelsius(props.temp)}<i className="wi wi-celsius"></i></div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

function formatAMPM(dt) {
    var d = new Date(dt),
        minutes = d.getMinutes().toString().length === 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length === 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
        day: days[d.getDay()],
        time: hours + ':' + minutes + ampm
    }
}

