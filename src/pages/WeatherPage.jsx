import { useParams, useOutletContext } from "react-router";
import TodaySummary from "../components/TodaySummary";
import CurrentWeather from "../components/CurrentWeather";
import WrapperWeatherPage from "../styles/WeatherPage";
import Map from "../components/Map";
import Carousel from "../components/Carousel";
import DailyForecast from "../components/DailyForecast";
import Astro from "../components/Astro";
import AirQualityBrief from "../components/AirQualityBrief";
import { useAppContext } from "../AppContext";

function WeatherPage() {
  const { currentData } = useOutletContext();
  const { city } = useParams();

  console.log("Context data:", currentData);
  console.log("WeatherPage rendered");

  const dayOne = currentData?.forecast?.forecastday[0]?.hour;
  const dayTwo = currentData?.forecast?.forecastday[1]?.hour;
  let firstTwoDays;
  if (dayOne && dayTwo) {
    firstTwoDays = [...dayOne, ...dayTwo];
  }

  // if (!currentData) {
  //   return <WrapperWeatherPage>
  //     <div>Weather Data Is Loading</div>
  //   </WrapperWeatherPage>
  // }
  return (
    <WrapperWeatherPage>
      {/* <WeatherPageNavbar/> */}
      <TodaySummary data={currentData} />
      <CurrentWeather data={currentData.current} />
      <section className="map-container">
        <div className="map-title">
          <h4>{city.toUpperCase()} WEATHER RADAR</h4>
        </div>
        <Map />
      </section>
      <Carousel
        firstTwoDays={firstTwoDays}
        currentTime={currentData.location.localtime}
      />
      <DailyForecast forecast={currentData.forecast.forecastday} />
      <Astro
        astro={currentData.forecast.forecastday[0].astro}
        date={currentData.forecast.forecastday[0].date}
      />
      <AirQualityBrief airQuality={currentData.current.air_quality} />
    </WrapperWeatherPage>
  );
}
export default WeatherPage;
