import { useOutletContext } from "react-router";
import DailyCard from "../components/DailyCard";
import Wrapper from "../styles/ThreeDayForecast";
import AlertsHeader from "../components/AlertsHeader";

function ThreeDayForecast() {
  const { currentData } = useOutletContext();
  const firstDayDate = new Date(currentData.location.localtime);
  const firstMonth = firstDayDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const firstDayNumber = firstDayDate.getDate();
  console.log(firstDayNumber);

  const secondDayDate = new Date(currentData.forecast.forecastday[2].date);
  const secondMonth = secondDayDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const secondDayNumber = secondDayDate.getDate();
  const alerts = currentData.alerts?.alert;

  return (
    <Wrapper>
      {alerts.length > 0 && <AlertsHeader alerts={alerts} />}
      <h3 className="duration">
        {firstMonth} {firstDayNumber} - {secondMonth} {secondDayNumber}
      </h3>
      {currentData.forecast.forecastday.map((day) => (
        <DailyCard dayData={day} alerts={alerts} key={day.date_epoch} />
      ))}
    </Wrapper>
  );
}
export default ThreeDayForecast;
