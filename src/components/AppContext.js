import React, { createContext, useState } from "react";

export const MyContext = createContext();

const AppContext = ({ children }) => {
  const [currentCity, setCurrentCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [futureWeather, setFutureWeather] = useState(null);
  const [showCurrent, setShowCurrent] = useState(true);

  const value = {
    currentCity,
    setCurrentCity,
    currentWeather,
    setCurrentWeather,
    futureWeather,
    setFutureWeather,
    showCurrent,
    setShowCurrent,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default AppContext;
