import { NavLink } from "react-router";
import { useParams } from "react-router";
import { useAppContext } from "../AppContext";
import Wrapper from "../styles/WeatherPageNavbar";
import SearchForm from "./SearchForm";
import Autocomplete from "./Autocomplete";
import SearchQueryHook from "../SearchQueryHook";
import logo from "../assets/vite.svg";

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";

function WeatherPageNavbar() {
  const { currentData } = useAppContext();
  const { searchQuery, setSearchQuery, queryData, queryErrorMessage } =
    SearchQueryHook();
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
          <div className="right-side">
            <SearchForm
              setSearchQuery={setSearchQuery}
              queryData={queryData}
              searchQuery={searchQuery}
            />
            <div className="auto-complete">
              <Autocomplete fetchedPlaces={queryData} />
            </div>
          </div>
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
