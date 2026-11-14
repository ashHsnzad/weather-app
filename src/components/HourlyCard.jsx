import { FaDroplet } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Wrapper from "../styles/HourlyCard";

function HourlyCard({ hour, activeId, toggleCard }) {
  const id = hour.time_epoch;
  let isCardOpen = id === activeId;
  return (
    <Wrapper onClick={() => toggleCard(id)}>
      <section className="hour-summary">
        <div className="left-side">
          <h4>{hour.time.split(" ")[1].split(":")[0]}</h4>
          <img src={hour.condition.icon} alt="hour.condition.text" />
          <h2>
            {hour.temp_c}
            <sup>&deg;</sup>
            <small>c</small>
          </h2>
        </div>
        <div className="right-side">
          <h5 className="realfeel">
            RealFeel{hour.feelslike_c}
            <sup>&deg;</sup>
            <small>c</small>
          </h5>
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
      <h3 className="condition-text">{hour.condition.text}</h3>
      <section className="table-top-data">
        <div className="each-two-sells">
          <div className="each-sell">
            <h4>
              RealFeel Shade<sup>TM</sup>
            </h4>
            <h4>
              {(hour.feelslike_c - 2).toFixed(1)}
              <sup>&deg;</sup>
              <small>c</small>
            </h4>
          </div>
          <div className="each-sell">
            <h4>Wind</h4>
            <h4>
              {hour.wind_dir} {hour.wind_kph}km/h
            </h4>
          </div>
        </div>
        <div className="each-two-sells">
          <div className={`each-sell ${!isCardOpen ? "last-one" : ""}`}>
            <h4>UV</h4>
            <h4>{hour.uv}</h4>
          </div>
          <div className={`each-sell ${!isCardOpen ? "last-one" : ""}`}>
            <h4>Wind Gusts</h4>
            <h4>{hour.gust_kph}km/h</h4>
          </div>
        </div>
      </section>
      {isCardOpen && (
        <section className="accordion">
          <div className="each-two-sells">
            <div className="each-sell">
              <h4>humidity</h4>
              <h4>{hour.humidity}%</h4>
            </div>
            <div className="each-sell">
              <h4>heat Index</h4>
              <h4>
                {hour.heatindex_c}
                <sup>&deg;</sup>
                <small>c</small>
              </h4>
            </div>
          </div>
          <div className="each-two-sells">
            <div className="each-sell">
              <h4>dew point</h4>
              <h4>
                {hour.dewpoint_c}
                <sup>&deg;</sup>
                <small>c</small>
              </h4>
            </div>
            <div className="each-sell">
              <h4>precipitation</h4>
              <h4>{hour.precip_mm}mm</h4>
            </div>
          </div>
          <div className="each-two-sells">
            <div className="each-sell">
              <h4>cloud cover</h4>
              <h4>{hour.cloud}%</h4>
            </div>
            <div className="each-sell">
              <h4>visibility</h4>
              <h4>{hour.vis_km}km</h4>
            </div>
          </div>
          <div className="each-two-sells">
            <div className="each-sell">
              <h4>pressure</h4>
              <h4>{hour.pressure_mb}mb</h4>
            </div>
            <div className="each-sell">
              <h4>wet-bulb</h4>
              <h4>
                {hour.wetbulb_c}
                <sup>&deg;</sup>
                <small>c</small>
              </h4>
            </div>
          </div>
        </section>
      )}
    </Wrapper>
  );
}

export default HourlyCard;
