import React from "react";

const Forecast = (props) => {
  return (
    <div>
      <div className=" flex flex-row justify-start mt-5">
        <p className="text-white font-medium uppercase">{props.title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row justify-between items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-light">04:30 AM</p>
          <img
            src="http://openweathermap.org/img//wn/01d@2x.png"
            alt="bhai nahi chalra  "
            className="w-12 my-1"
          />
          <p className="font-medium">22*</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-light">04:30 AM</p>
          <img
            src="http://openweathermap.org/img//wn/01d@2x.png"
            alt="bhai nahi chalra  "
            className="w-12 my-1"
          />
          <p className="font-medium">22*</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-light">04:30 AM</p>
          <img
            src="http://openweathermap.org/img//wn/01d@2x.png"
            alt="bhai nahi chalra  "
            className="w-12 my-1"
          />
          <p className="font-medium">22*</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-light">04:30 AM</p>
          <img
            src="http://openweathermap.org/img//wn/01d@2x.png"
            alt="bhai nahi chalra  "
            className="w-12 my-1"
          />
          <p className="font-medium">22*</p>
        </div>
      </div>
     
    </div>
  );
};

export default Forecast;
