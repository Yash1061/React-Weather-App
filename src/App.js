import "./App.css";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempratureAndDetails from "./components/TempratureAndDetails";
import Forecast from "./components/Forecast";
// import weatherServices from "./services/WeatherServices";
  // import getWeatherData from "./services/WeatherServices";
import getFormattedWeatherData from "./services/WeatherServices";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    const fetchWeather = async ()=>{
      await getFormattedWeatherData({...query , units }).then(data=>{
         setWeather(data);
         console.log(data)
      });

      

    };
    fetchWeather();
  },[query , units])


  const formatWeather  = ()=>
  {
    if (!weather ) return "from-cyan-700 to-blue-700 "
    const thresold = units ==="metric" ? 25 : 60;
    if(weather.temp <= thresold) return "from-cyan-700 to-blue-700 "
    
      return "from-yellow-700 to-orange-700"
  
  }




  // const fetchData = async ()=>{
  //   const data= await getFormattedWeatherData({q:'tokyo'});
  //   console.log(data)
  // }
  // fetchData()

  // getWeatherData('weather', { q: 'tokyo' })
  return (
  <div  className = "h-screen	my-0 	"style={{ backgroundImage: `linear-gradient(to right, rgba(16, 141 , 199), rgba( 239,142,56))`, }}>
         <h1 className="text-sky-950  underline-offset-4
	   pt-5  text-center text-5xl">Weather App</h1>
    <div className={`mx-auto max-w-screen-md mt-4 px-32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shado-gray-400 ${formatWeather()}`}>
      
      <TopButton setQuery = {setQuery} />
      <Inputs  setQuery = {setQuery}  units={units} setUnits = {setUnits} />

          {weather && (
            <>
            
            <TimeAndLocation weather = {weather}/>
            <TempratureAndDetails weather = {weather} />
            <Forecast title="HOURLY FORECAST" />
            <Forecast title="DAILY FORECAST" />

            </>

          )}
        
          
        
      
    </div>
    </div>

  );
}

export default App;
