import { FaDroplet } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function HourlyCard({ hour, activeId, toggleCard }) {
  const id = hour.time_epoch;
  const isCardOpen = id === activeId;
  return (
    <section className="hour-report">
      <div className="hour-summary">
        <div className="time-temp">
          <h5>{hour.time.split(" ")[1].split(":")[0]}</h5>
          <img src={hour.condition.icon} alt="hour.condition.text" />
          <h4>
            {hour.temp_c}
            <sup>&deg;</sup>
            <small>c</small>
          </h4>
        </div>
        <div className="realfeel">
          <h5>
            RealFeel{hour.feelslike_c}
            <sup>&deg;</sup>
            <small>c</small>
          </h5>
        </div>
        <div className="rain-button">
          <div className="rain">
            <FaDroplet />
            <h5>{hour.chance_of_rain}%</h5>
            {hour.chance_of_snow !== 0 && (
              <div>
                <FaRegSnowflake />
                <h5>{hour.chance_of_snow}%</h5>
              </div>
            )}
          </div>
          <button onClick={() => toggleCard(id)}>
            {isCardOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HourlyCard;
