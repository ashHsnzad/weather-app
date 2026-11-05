import Wrapper_CurrentWeather from "../styles/CurrentWeather";
import { Link } from "react-router";
function CurrentWeather({ data }) {
  const usEpaIndex = data.air_quality["us-epa-index"];
  let airQuality;

  if (!usEpaIndex) {
    airQuality = "Unavailable";
  }
  if (usEpaIndex === 1) {
    airQuality = "Good";
  }
  if (usEpaIndex === 2) {
    airQuality = "Moderate";
  }
  if (usEpaIndex === 3) {
    airQuality = "Unhealthy for sensitive groups";
  }
  if (usEpaIndex === 4) {
    airQuality = "Unhealthy";
  }
  if (usEpaIndex === 5) {
    airQuality = "Very Unhealthy";
  }
  if (usEpaIndex === 6) {
    airQuality = "Hazardous";
  }

  const airQualityColors = {
    Good: "green",
    Moderate: "yellow",
    "Unhealthy for sensitive groups": "orange",
    Unhealthy: "red",
    "Very Unhealthy": "purple",
    Hazardous: "maroon",
  };

  const airQualityColor = airQualityColors[airQuality] ?? "black";

  return (
    <Wrapper_CurrentWeather>
      <div className="current-title">
        <h5>CURRENT WEATHER</h5>
        <h5>{data.last_updated.split(" ")[1]}</h5>
      </div>
      <div className="current-summary">
        <div className="temps-icon-description">
          <div className="temps-icon">
            <img src={data.condition.icon} alt={data.condition.text} />
            <div>
              <h2>
                {data.temp_c}
                <sup>&deg;</sup>
                <small>c</small>
              </h2>
              <h3>
                ReelFeel {data.feelslike_c}
                <sup>&deg;</sup>
                <small>c</small>
              </h3>
            </div>
          </div>
          <div className="description">
            <h4>{data.condition.text}</h4>
          </div>
        </div>
        <div className="wind-aqi">
          <div>
            <h4>Wind:</h4>
            <p>{data.wind_mph}mph</p>
          </div>
          <div>
            <h4>Humidity:</h4>
            <span>{data.humidity}%</span>
          </div>
          <div>
            <h4>Air Quality:</h4>
            <span
              style={{
                color: airQualityColor,
              }}
            >
              {airQuality}
            </span>
          </div>
        </div>
      </div>
    </Wrapper_CurrentWeather>
  );
}
export default CurrentWeather;
