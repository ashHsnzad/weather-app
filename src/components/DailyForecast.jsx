import Wrapper from "../styles/DailyForecast";
import { FaDroplet } from "react-icons/fa6";
function DailyForecast({ forecast }) {
  return (
    <Wrapper>
      <div className="daily-title">
        <h4>3-day weather forecast</h4>
      </div>
      <section className="daily-forecast">
        {forecast.map((day) => {
          const date = new Date(day.date_epoch * 1000);
          const dayOfTheWeek = date.toLocaleDateString("en-US", {
            weekday: "long",
          }).slice(0, 3);

          const dayAndMonth = `${day.date.split("-")[1]}/${day.date.split("-")[2]}`;
          return (
            <div className="each-day">
              <div className="dateAndOverall">
                <div className="date">
                  <h4>{dayOfTheWeek.toUpperCase()}</h4>
                  <span>{dayAndMonth}</span>
                </div>
                <div className="overall">
                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                  />
                  <div className="high-low">
                    <h3>
                      {day.day.maxtemp_c}
                      <sup>&deg;</sup>
                      <small>c</small>
                    </h3>
                    <h5>
                      {day.day.mintemp_c}
                      <sup>&deg;</sup>
                      <small>c</small>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="day-night-rain">
                <div className="dayAndNight">
                  <div className="morning">
                    <h5>Morning:</h5>
                    <span>
                      <img
                        src={day.hour[11].condition.icon}
                        alt={day.hour[11].condition.text}
                      />
                      {day.hour[11].condition.text}
                    </span>
                  </div>
                  <div className="night">
                    <h5>Night:</h5>
                    <span>
                      <img
                        src={day.hour[23].condition.icon}
                        alt={day.hour[23].condition.text}
                      />
                      {day.hour[23].condition.text}
                    </span>
                  </div>
                </div>
                <div className="precipitationChance">
                  <span>
                    {day.day.daily_chance_of_rain}% <FaDroplet />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}

export default DailyForecast;
