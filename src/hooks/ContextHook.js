import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const weatherContext = createContext();

const ContextHook = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [returnedVal, setReturnedVal] = useState();
  const [searchedLoc, setSearchedLoc] = useState();
  const [loadError, setLoadError] = useState(false);

  const storedVal = localStorage.getItem("prevSearches")
    ? JSON.parse(localStorage.getItem("prevSearches"))
    : ["Birmingham", "Lagos", "Manchester", "Dubai"];
  const [prevSearches, setPrevSearches] = useState(storedVal);

  useEffect(() => {
    localStorage.setItem("prevSearches", JSON.stringify(prevSearches));
  }, [prevSearches]);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=cfaf7c3504234c8bb7d142654231402&q=london&aqi=no`
      )
      .then((res) => {
        setLoadError(false);
        setReturnedVal(res.data);
        setSearchedLoc("London");
      })
      .catch((err) => {
        console.log(err.message);
        setLoadError(true);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal === "") {
      alert("Enter a Location");
    } else {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=cfaf7c3504234c8bb7d142654231402&q=${inputVal.toLowerCase()}&aqi=no`
        )
        .then((res) => {
          setLoadError(false);
          setReturnedVal(res.data);
          setSearchedLoc(inputVal);
          setPrevSearches([
            inputVal.charAt(0).toUpperCase() + inputVal.slice(1).toLowerCase(),
            ...prevSearches,
          ]);
        })
        .catch((err) => {
          console.log(err.message);
          setLoadError(true);
        });

      setInputVal("");
    }
  };

  const handleClickedLoc = (loc) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=cfaf7c3504234c8bb7d142654231402&q=${loc.toLowerCase()}&aqi=no`
      )
      .then((res) => {
        setLoadError(false);
        setReturnedVal(res.data);
        setSearchedLoc(loc);
      })
      .catch((err) => {
        console.log(err.message);
        setLoadError(true);
      });
  };

  return (
    <weatherContext.Provider
      value={{
        inputVal,
        setInputVal,
        handleSubmit,
        returnedVal,
        searchedLoc,
        prevSearches,
        handleClickedLoc,
        loadError,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default ContextHook;

export const useWeatherContext = () => {
  return useContext(weatherContext);
};
