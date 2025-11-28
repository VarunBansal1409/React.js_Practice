import React, { useRef, useState } from "react";
import axios from "axios";

const Weather = () => {
  let [state, setState] = useState(null);
  let city = useRef();
  let api_Key = `f97b69d31a7c2cf3773653c1582b2379`;

  let fetchData = async (city) => {
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;
    let res = await axios.get(url);
    //  console.log(res);
    let { data } = res;
    console.log(data);
    setState(data);
  };


  return (
    <div>
      <input type="search" name="" id="" ref={city} />
      <button
        onClick={() => {
          fetchData(city.current.value);
        }}
      >
        search
      </button>
      <div>
        {
          state && <>
            <h1>{state.name}</h1>
          </>
        }
      </div>
    </div>
  );
};

export default Weather;
