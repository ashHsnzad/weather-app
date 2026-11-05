import { NavLink } from "react-router";
import { useParams } from "react-router";
import { useAppContext } from "../AppContext";
import Wrapper from "../styles/WeatherPageNavbar";
import logo from "../assets/vite.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function WeatherPageNavbar() {
  const { currentData } = useAppContext();
  console.log("WeatherPageNavbar rendered");
  const { lat, lon, country, city } = useParams();
  const weatherPageUrl = `/${country}/${city}/${lat}/${lon}`;

  if (!currentData) {
    return (
      <Wrapper>
        <h4>loading...</h4>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="top-navbar">
        <div className="top-nav-center">
          <div className="left-side">
            <NavLink to="/" end className="logo">
              <img src={logo} alt="logo" />
              <span>logo</span>
            </NavLink>
            <NavLink className="summary" to={weatherPageUrl}>
              <h4>
                {currentData.location.name}, {currentData.location.region} {""}
                {currentData.current.temp_c}
                <sup>&deg;</sup>
                <small>c</small>
                <img
                  src={currentData.current.condition.icon}
                  alt="currentData.current.condition.text"
                />
              </h4>
            </NavLink>
          </div>
          <div className="right-side"></div>
        </div>
      </section>
      <section className="reports">
        <NavLink to={weatherPageUrl} end>
          <h5>today</h5>
        </NavLink>
        <NavLink to={`${weatherPageUrl}/hourly-weather-forecast`}>
          <h5>hourly</h5>
        </NavLink>
        <NavLink to={`${weatherPageUrl}/3-day-weather-forecast`}>
          <h5>3-day</h5>
        </NavLink>
        <NavLink to={`${weatherPageUrl}/weather-radar`}>
          <h5>radar</h5>
        </NavLink>
        <NavLink to={`${weatherPageUrl}/air-quality`}>
          <h5>air quality</h5>
        </NavLink>
      </section>
    </Wrapper>
  );
}

export default WeatherPageNavbar;
