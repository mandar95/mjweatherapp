function getWeatherIcone(rangeId) {
    switch (true) {
        case rangeId >= 200 && rangeId <= 232:
            return "w-thunderstorm";
        case rangeId >= 300 && rangeId <= 321:
            return "w-rain";
        case rangeId >= 500 && rangeId <= 531:
            return "w-hail";
        case rangeId >= 600 && rangeId <= 622:
            return "w-snow";
        case rangeId >= 701 && rangeId <= 781:
            return "w-cloudy-windy";
        case rangeId === 800:
            return "w-day-sunny";
        case rangeId >= 801 && rangeId <= 804:
            return "w-cloud";
    }
}

function calCelsius(temp) {
    return Math.floor(temp - 273.15);
}

function formatAMPM(dt) {
    var d = new Date(dt),
        minutes = d.getMinutes().toString().length === 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length === 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return {
        day: days[d.getDay()],
        month: months[d.getMonth()],
        date: d.getDate(),
        year: d.getFullYear(),
        time: hours + ':' + minutes + ampm
    }
}

function convertTime(unixTime) {
    let dt = new Date(unixTime * 1000)
    let h = dt.getHours()
    let m = "0" + dt.getMinutes()
    let t = h + ":" + m.substr(-2)
    return t
}

export {
    getWeatherIcone,
    calCelsius,
    formatAMPM,
    convertTime
}