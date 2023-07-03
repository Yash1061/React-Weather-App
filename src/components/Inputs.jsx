import { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };


  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };


  

  return (
    <div className="flex  flex-row justify-center my-6">
      <div className="flex  flex-row w-3/4 items-center justify center space-x-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          type="text"
          className="text-xl font-light p-2 w-full  shadow-xl focus:outline-none  capitalize placeholder:lowercase   "
          placeholder="Search for city..."
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transiton ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transiton ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className=" flex flex-row justify-center items-center w-1/4">
        <button
          name="metric"
          className="text-white text-xl font-light  hover:scale-125 transition ease-out "
          onClick={handleUnitsChange}


        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button
          name="imperial"
          className="text-white text-xl font-light hover:scale-125 transition ease-out "
          onClick={handleUnitsChange}

        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
