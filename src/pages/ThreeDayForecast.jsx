import { useOutletContext } from "react-router";
import DailyCard from "../components/DailyCard";
import { VscWarning } from "react-icons/vsc";

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
    <main>
      {alerts.length && (
        <div className="alert">
          <VscWarning />
          <h4>{alerts[0].event}</h4>
        </div>
      )}
      <h3>
        {firstMonth} {firstDayNumber} - {secondMonth} {secondDayNumber}
      </h3>
      {currentData.forecast.forecastday.map((day) => (
        <DailyCard dayData={day} alerts={alerts} />
      ))}
    </main>
  );
}
export default ThreeDayForecast;
