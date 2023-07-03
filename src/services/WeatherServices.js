import { DateTime } from "luxon";

const API_KEY = "26b1e0361cf5d1833a5775f129874721";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// const API =
//       "http://api.openweathermap.org/data/2.5/weather?q=" +
//       place +
//      https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=26b1e0361cf5d1833a5775f129874721
//       "&units=metric&APPID=b7dead8b79bc60100c82091c47484c04";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  // onsole.log(url)
  url.search = new URLSearchParams({ ...searchParams, appid:API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
// export default getWeatherData;


const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
//   return formattedCurrentWeather;

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("weather", {
    lat,
    lon,
    exclude: "current , minutely , alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);
  return {
    ...formattedCurrentWeather,
    ...formattedForecastWeather,
  };
};

const formatForecastWeather = (data) => {
    // let { timezone, daily, hourly } = data;
    // daily = daily.slice(1,2).map((d) => {
    //   return {
    //     title: formatLocalTime(d.dt, timezone, "ccc"),
    //     temp: d.temp.day,
    //     icon: d.weather[0].icon,
    //   };
    // });
  
    // hourly = hourly.slice(1,2).map((d) => {
    //   return {
    //     title: formatLocalTime(d.dt, timezone, "hh:mm a"),
    //     temp: d.temp,
    //     icon: d.weather[0].icon,
    //   };
    // });
  
    // return { timezone, daily, hourly };
  };

  const formatLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  
const iconFromCode = (code) =>`http://openweathermap.org/img//wn/${code}@2x.png`;

export default getFormattedWeatherData;
export {formatLocalTime , iconFromCode}
