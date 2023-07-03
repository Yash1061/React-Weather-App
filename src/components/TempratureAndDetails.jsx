import React from "react";
import{UilArrowUp,UilArrowDown,
UilTemperature, UilTear , UilWind , UilSun,
UilSunset} from "@iconscout/react-unicons";
import { formatLocalTime, iconFromCode } from "../services/WeatherServices";

const TempratureAndDetails = ( {weather:{details , icon ,temp , temp_min , temp_max , sunrise , sunset , speed, humidity  , feels_like , timezone , }} ) => {
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-xl text-cyan-200  ">
        <p>{`${details}`}</p>
      </div>
      <div className="text-white flex flex-row items-center justify-between py-3">
        <img
          // src="http://openweathermap.org/img//wn/01d@2x.png"
          src={iconFromCode(icon)}
          alt="bhai nahi chalra  "
          className="w-20"
        />
        <p className="text-5xl ">{`${temp.toFixed()}°`}</p>
      
      <div className="flex flex-col space-y-2">
        <div
          className="text-white flex font-light text-sm items-center justify-center
        "
        >
            <UilTemperature size={18} className="mr-1"/>
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}° `}</span>


        </div>
        <div
          className="text-white flex font-light text-sm items-center justify-center
        "
        >
            <UilTear size={18} className="mr-1"/>
            Humidity
            <span className="font-medium ml-1">{`${humidity.toFixed()}% `}</span>


        </div>
        <div
          className="text-white flex font-light text-sm items-center justify-center
        "
        >
            <UilWind size={18} className="mr-1"/>
            wind  
            <span className="font-medium ml-1">{`${speed.toFixed()} km/hr `}</span>


        </div>
      </div>
      </div>
   
        <div className=" flex items-center justify-center space-x-2
        text-white text-sm py-3">
            <UilSun />
            <p className="text-white">Rise
            <span className="font-medium ml-1">{formatLocalTime(sunrise , timezone ,  "hh:mm a")}              </span></p>
            <p className="font-light">|</p>
            <UilSunset />
            <p className="text-white">Set
            <span className="font-medium ml-1">{formatLocalTime(sunset , timezone ,  "hh:mm a")}</span></p>
            <p className="font-light">|</p>

            <UilSun />
            <p className="text-white">High
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span></p>
            <p className="font-light">|</p>

            <UilSun />
            <p className="text-white">Low
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span></p>

        </div>




    </div>
  );
};

export default TempratureAndDetails;
