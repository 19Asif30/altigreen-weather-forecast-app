import "./App.css";
import Header from "./components/header";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SelectBox from "./components/Select";
import { MDBBtn } from "mdb-react-ui-kit";
import { useContext, useEffect } from "react";
import { MyContext } from "./components/AppContext";
import CarouselCmp from "./components/CarouselCmp";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentCityData from "./components/CurrentCityData";

function App() {
  const {
    currentCity,
    currentWeather,
    setCurrentWeather,
    showCurrent,
    setShowCurrent,
    setFutureWeather,
  } = useContext(MyContext);

  function currentWeatherStructure(obj) {
    let tmp = {};
    tmp.city = obj.name;
    tmp.country = obj.sys.country;
    tmp.temperature = (obj.main.temp - 273.15).toFixed(2) + "C";
    tmp.weather = obj.weather[0].main;
    tmp.latitude = obj.coord.lat;
    tmp.longitude = obj.coord.lon;
    tmp.visibility = obj.visibility + "m";
    tmp["wind speed"] = obj.wind.speed + "m/s";

    setCurrentWeather(tmp);
  }

  function futureForecastStructure(info) {
    let object = {};
    for (let i in info.list) {
      if (!Object.keys(object).includes(info.list[i].dt_txt.slice(0, 10))) {
        object[info.list[i].dt_txt.slice(0, 10)] = [];
      }
    }
    for (let i = 0; i < info.list.length; i++) {
      let obj = info.list[i];
      let key = info.list[i].dt_txt.slice(0, 10);
      let inf = {};
      inf.time = parseInt(info.list[i].dt_txt.slice(11, 13)).toFixed(2);
      inf.temperature = (obj.main.temp - 273.15).toFixed(2) + " C";
      inf.feels_like = (obj.main.feels_like - 273.15).toFixed(2) + " C";
      inf.humidity = obj.main.humidity + "%";
      inf.weather = obj.weather[0].main;
      inf.wind_speed = obj.wind.speed + "m/s";
      inf.visibility = obj.visibility + "m";
      object[key].push(inf);
    }

    setFutureWeather(object);
  }

  const getCurrentWeather = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=d0ee4d737ff7091bdb707d9b1fe6776e`
    );

    let data = await response.json();
    currentWeatherStructure(data);
  };

  const getFutureForecast = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=d0ee4d737ff7091bdb707d9b1fe6776e`
    );
    let data = await response.json();
    futureForecastStructure(data);
  };

  useEffect(() => {
    if (currentCity) {
      getCurrentWeather();
      getFutureForecast();
    }
  }, [currentCity]);

  return (
    <div className="App">
      <Header />
      <SelectBox />
      <div className="btns-wrap">
        <MDBBtn
          className="me-1"
          color="success"
          onClick={() => setShowCurrent(true)}
        >
          Current Weather
        </MDBBtn>
        <MDBBtn
          className="me-1"
          color="danger"
          onClick={() => setShowCurrent(false)}
        >
          Future Forecast
        </MDBBtn>
      </div>
      <div className="content-wrap">
        {currentCity && currentWeather ? (
          <div className="content-items">
            {showCurrent ? <CurrentCityData /> : <CarouselCmp />}
          </div>
        ) : (
          <div className="no-content">Nothing to display</div>
        )}
      </div>
    </div>
  );
}

export default App;
