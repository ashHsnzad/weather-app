import { FaDroplet } from "react-icons/fa6";
import { VscWarning } from "react-icons/vsc";

import Wrapper from "../styles/DailyCard";
function DailyCard({ dayData, alerts }) {
  const dayAndMonth = `${dayData.date.split("-")[1]}/${dayData.date.split("-")[2]}`;
  const date = new Date(dayData.date);
  const dayOfTheWeek = date.toLocaleDateString("us-en", {
    weekday: "short",
  });
  console.log(dayOfTheWeek);
  const alertDate = alerts[0]?.effective?.split("T")[0] === dayData.date;
  console.log(alerts[0]?.effective?.split("T")[0]);

  //  "effective": "2026-11-12T18:38:00-08:00",
  // "expires": "2026-11-13T09:00:00-08:00",

  return (
    <Wrapper>
      <section className="summary">
        <div className="date">
          <h4>{dayOfTheWeek.toUpperCase()}</h4>
          <span>{dayAndMonth}</span>
        </div>
        <div className="overall">
          <img
            src={dayData.day.condition.icon}
            alt={dayData.day.condition.text}
          />
          <div className="high-low">
            <h3>
              {dayData.day.maxtemp_c}
              <sup>&deg;</sup>
              <small>c</small>
            </h3>
            <h5>
              {dayData.day.mintemp_c}
              <sup>&deg;</sup>
              <small>c</small>
            </h5>
          </div>
        </div>
        <div className="precipitation">
          <span>
            {dayData.day.daily_chance_of_rain}% <FaDroplet />
          </span>
        </div>
      </section>
      <h3>{dayData.day.condition.text}</h3>

      {alerts.length &&
        alerts.map((alert) => {
          const { effective, expires } = alert;
          if (
            effective.split("T")[0] === dayData.date ||
            effective.split("T")[0] === dayData.date
          )
            return (
              <section className="alerts">
                <div className="alert">
                  <VscWarning />
                  <h5>Alert</h5>
                </div>
                <div>
                  <h5>{alert.event}</h5>
                </div>
                <div>
                  <h5>
                    {alert.effective} - {alert.expires}
                  </h5>
                </div>
              </section>
            );
        })}
    </Wrapper>
  );
}
export default DailyCard;
