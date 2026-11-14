import {
  useOutletContext,
  NavLink,
  useSearchParams,
  useParams,
} from "react-router";

import { useState } from "react";
import Wrapper from "../styles/HourlyForecast";
import HourlyCard from "../components/HourlyCard";
import { FiArrowRight } from "react-icons/fi";

function HourlyForecast() {
  const [activeId, setActiveId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const day = searchParams.get("day");
  const { lat, lon, city, country } = useParams();
  const dailyRoute = `/${country}/${city}/${lat}/${lon}/3-day-weather-forecast`;
  const { currentData } = useOutletContext();
  const currentHour = currentData.location.localtime
    .split(" ")[1]
    .split(":")[0];

  const firstDay = currentData.forecast.forecastday[0]?.hour;
  const secondDay = currentData.forecast.forecastday[1]?.hour;
  const thirdDay = currentData.forecast.forecastday[2]?.hour;
  const firstHour = firstDay.find(
    (hour) => hour.time.split(" ")[1].split(":")[0] === currentHour,
  );

  const remainedHours = firstDay.filter((hour) => {
    return hour.time_epoch >= firstHour.time_epoch;
  });

  console.log(remainedHours);
  console.log(thirdDay);
  const toggleCard = (id) => {
    let newActiveId;
    id === activeId ? (newActiveId = null) : (newActiveId = id);
    setActiveId(newActiveId);
  };
  if (!day) {
    return (
      <Wrapper>
        {remainedHours.map((hour) => {
          return (
            <HourlyCard
              hour={hour}
              key={hour.time_epoch}
              activeId={activeId}
              toggleCard={toggleCard}
            />
          );
        })}
        <h4>Further ahead</h4>
        <hr />
        <NavLink to="?day=2" className="further-ahead">
          <div>
            <h4>Tomorrow</h4>
            <FiArrowRight />
          </div>
        </NavLink>
        <hr />
        <NavLink to="?day=3" className="further-ahead">
          <div>
            <h4>The day after Tomorrow</h4>
            <FiArrowRight />
          </div>
        </NavLink>
        <hr />
        <NavLink to={dailyRoute} className="further-ahead">
          <div>
            <h4>3-day</h4>
            <FiArrowRight />
          </div>
        </NavLink>
      </Wrapper>
    );
  }
  if (day === "2") {
    console.log(secondDay);
    return (
      <Wrapper>
        {secondDay.map((hour) => {
          return (
            <HourlyCard
              hour={hour}
              key={hour.time_epoch}
              activeId={activeId}
              toggleCard={toggleCard}
            />
          );
        })}
        <h4>Further ahead</h4>
        <hr />
        <NavLink to="?day=3" className="further-ahead">
          <div>
            <h4>Next Day</h4>
            <FiArrowRight />
          </div>
        </NavLink>
        <hr />
        <NavLink to={dailyRoute} className="further-ahead">
          <div>
            <h4>3-day</h4>
            <FiArrowRight />
          </div>
        </NavLink>
      </Wrapper>
    );
  }
  if (day === "3") {
    return (
      <Wrapper>
        {thirdDay.map((hour) => {
          return (
            <HourlyCard
              hour={hour}
              key={hour.time_epoch}
              activeId={activeId}
              toggleCard={toggleCard}
            />
          );
        })}
        <h4>Further ahead</h4>
        <hr />
        <NavLink to={dailyRoute} className="further-ahead">
          <div>
            <h4>3-day</h4>
            <FiArrowRight />
          </div>
        </NavLink>
      </Wrapper>
    );
  }
}
export default HourlyForecast;
