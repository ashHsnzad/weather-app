import Wrapper from "../styles/AirQuality";
import { GiWindsock } from "react-icons/gi";

function AirQualityBrief({ airQuality }) {
  const usEpaIndex = airQuality["us-epa-index"];
  let quality;

  if (!usEpaIndex) {
    quality = "Unavailable";
  }
  if (usEpaIndex === 1) {
    quality = "Good";
  }
  if (usEpaIndex === 2) {
    quality = "Moderate";
  }
  if (usEpaIndex === 3) {
    quality = "Unhealthy for sensitive groups";
  }
  if (usEpaIndex === 4) {
    quality = "Unhealthy";
  }
  if (usEpaIndex === 5) {
    quality = "Very Unhealthy";
  }
  if (usEpaIndex === 6) {
    quality = "Hazardous";
  }

  const airQualityColors = {
    Good: "green",
    Moderate: "yellow",
    "Unhealthy for sensitive groups": "orange",
    Unhealthy: "red",
    "Very Unhealthy": "purple",
    Hazardous: "maroon",
  };

  const airQualityColor = airQualityColors[quality] ?? "black";
  return (
    <Wrapper>
      <div className="air-quality-title">
        <h4>air quality</h4>
      </div>
      <section className="air-quality-container">
        <div className="air-quality">
          <div className="icon-title">
            <GiWindsock className="icon" />
            <h4>air quality</h4>
          </div>
          <div style={{ borderRight: `4px solid ${airQualityColor}` }} className="quality">
            <h4>{quality}</h4>
          </div>
        </div>
        <div className="quality-description">
          <p>the air quality is {quality}</p>
        </div>
      </section>
    </Wrapper>
  );
}

export default AirQualityBrief;
