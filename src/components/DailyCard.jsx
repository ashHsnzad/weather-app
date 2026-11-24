import { FaDroplet } from "react-icons/fa6";
import { VscWarning } from "react-icons/vsc";
import Wrapper from "../styles/DailyCard";
function DailyCard({ dayData, alerts }) {
  const { avgtemp_c, avgtemp_f, avghumidity, wind_mph, maxwind_kph, uv } =
    dayData.day;
  console.log(uv);
  const dayAndMonth = `${dayData.date.split("-")[1]}/${dayData.date.split("-")[2]}`;
  const date = new Date(dayData.date);
  const dayOfTheWeek = date.toLocaleDateString("en-US", {
    weekday: "short",
  });
  console.log(dayOfTheWeek);
  const alertDate = alerts?.some(
    (alert) =>
      alert?.effective?.split("T")[0] === dayData.date ||
      alert?.expires?.split("T")[0] === dayData.date,
  );
  console.log(alerts);

  const firstEffective = alerts[0]?.effective?.split("T")[0];
  const dateOfTheDay = dayData.date;
  console.log(typeof firstEffective);
  console.log(typeof dateOfTheDay);

  return (
    <Wrapper style={{ borderLeft: alertDate ? "3px solid red" : "none" }}>
      <section className="summary">
        <div className="date-overall">
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
        </div>
        <div className="precipitation">
          <span>
            <FaDroplet /> {dayData.day.daily_chance_of_rain}%
          </span>
        </div>
      </section>
      <h3>{dayData.day.condition.text}</h3>

      {alerts.length > 0 && alertDate && (
        <section className="alert">
          <div className="alert-title">
            <VscWarning />
            <h5>Alerts</h5>
          </div>
          {alerts.map((alert) => {
            const { effective, expires } = alert;
            if (
              effective.split("T")[0] === dayData.date ||
              expires.split("T")[0] === dayData.date
            ) {
              const effectiveTime = new Date(effective.slice(0, 19));
              const effectiveTimeFormatted = effectiveTime.toLocaleDateString(
                "en-US",
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  weekday: "long",
                },
              );
              const expiresTime = new Date(expires.slice(0, 19));
              const expiresTimeFormatted = expiresTime.toLocaleDateString(
                "en-US",
                {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  weekday: "long",
                },
              );
              return (
                <div key={alert.identifier}>
                  <div className="alert-type">
                    <h5>{alert.event}</h5>
                  </div>
                  <div className="alert-duration">
                    <h6>
                      {effectiveTimeFormatted} - {expiresTimeFormatted}
                    </h6>
                  </div>
                </div>
              );
            }
          })}
        </section>
      )}
      <section className="data-table">
        <div>
          <h4>average temperature</h4>
          <h4>
            {avgtemp_c}
            <sup>&deg;</sup>
            <small>c</small>
          </h4>
        </div>
        <div>
          <h4>humidity</h4>
          <h4>{avghumidity}%</h4>
        </div>
        <div>
          <h4>wind</h4>
          <h4>{maxwind_kph} km/h</h4>
        </div>
        <div>
          <h4>UV index</h4>
          <h4>{uv}</h4>
        </div>
      </section>
    </Wrapper>
  );
}
export default DailyCard;
