import CurrentWeather from "../components/CurrentWeather";
import Carousel from "../components/Carousel";
import { useOutletContext, useParams, NavLink } from "react-router";
import AlertsHeader from "../components/AlertsHeader";
import Map from "../components/Map";
import Wrapper from "../styles/Radar";
import { FiArrowRight } from "react-icons/fi";

function Radar() {
  const { currentData } = useOutletContext();
  const { city, country, lat, lon } = useParams();
  const weatherPageUrl = `/${country}/${city}/${lat}/${lon}`;
  const dayOne = currentData?.forecast?.forecastday[0]?.hour;
  const dayTwo = currentData?.forecast?.forecastday[1]?.hour;
  let firstTwoDays;
  if (dayOne && dayTwo) {
    firstTwoDays = [...dayOne, ...dayTwo];
  }

  const alerts = currentData.alerts?.alert;
  return (
    <Wrapper>
      {alerts.length > 0  && <AlertsHeader alerts={alerts} />}
      <section className="map-container">
        <div className="map-title">
          <h4>{city.toUpperCase()} WEATHER RADAR</h4>
        </div>
        <div className="map">
          <Map />
        </div>
      </section>
      <CurrentWeather data={currentData.current} />
      <Carousel
        firstTwoDays={firstTwoDays}
        currentTime={currentData.location.localtime}
      />
      <h4>Further ahead</h4>
      <hr />
      <NavLink
        to={`${weatherPageUrl}/hourly-weather-forecast`}
        className="further-ahead"
      >
        <div>
          <h4>hourly</h4>
          <FiArrowRight />
        </div>
      </NavLink>
      <hr />
      <NavLink
        to={`${weatherPageUrl}/3-day-weather-forecast`}
        className="further-ahead"
      >
        <div>
          <h4>3-day</h4>
          <FiArrowRight />
        </div>
      </NavLink>
    </Wrapper>
  );
}
export default Radar;
