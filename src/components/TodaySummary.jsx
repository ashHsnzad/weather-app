import Wrapper_TodaySummary from "../styles/TodaySummary";
function TodaySummary({ data }) {
  return (
    <Wrapper_TodaySummary className="today">
      <div className="today-title">
        <h5>TODAY'S WEATHER</h5>
        <h5>{data.location.localtime.split(" ")[0]}</h5>
      </div>
      <div className="today-high-low">
        <div className="today-high">
          <img src={data.forecast.forecastday[0].hour[13].condition.icon} />
          <h4>
            Today: {data.forecast.forecastday[0].hour[13].condition.text}
            <span>
              High: {data.forecast.forecastday[0].day.maxtemp_c}
              <sup>&deg;</sup>
              <small>c</small>
            </span>
          </h4>
        </div>
        <div className="today-low">
          <img src={data.forecast.forecastday[0].hour[23].condition.icon} />
          <h4>
            Tonight: {data.forecast.forecastday[0].hour[23].condition.text}
            <span>
              Low: {data.forecast.forecastday[0].day.mintemp_c}
              <sup>&deg;</sup>
              <small>c</small>
            </span>
          </h4>
        </div>
      </div>
      <div />
    </Wrapper_TodaySummary>
  );
}
export default TodaySummary;
