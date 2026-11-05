import { useOutletContext } from "react-router";
import { useState } from "react";
import Wrapper from "../styles/HourlyForecast";
import HourlyCard from "../components/HourlyCard";


function HourlyForecast() {
  const [activeId, setActiveId] = useState(null);
  const { currentData } = useOutletContext();
  const currentHour = currentData.location.localtime
    .split(" ")[1]
    .split(":")[0];

  const firstDay = currentData.forecast.forecastday[0]?.hour;
  const firstHour = firstDay.find(
    (hour) => hour.time.split(" ")[1].split(":")[0] === currentHour,
  );

  const remainedHours = firstDay.filter((hour) => {
    return hour.time_epoch >= firstHour.time_epoch;
  });

  console.log(remainedHours);

  const toggleCard = (id) => {
    let newActiveId;
    id === activeId ? (newActiveId = null) : (newActiveId = id);
    setActiveId(newActiveId);
  };
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
    </Wrapper>
  );
}
export default HourlyForecast;
