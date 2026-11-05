import { Link } from "react-router";
import { useAppContext } from "../AppContext";
function WeatherCart({
  icon,
  text,
  currTempC,
  currTempF,
  country,
  city,
  feelsLikeC,
  feelsLikeF,
  lat,
  lon,
  lastThreeLocations,
}) {
  const { locations, setLocations } = useAppContext();
  // console.log("lat:", lat);
  // console.log("lon:", lon);
  const index = locations.findIndex(
    (loc) => loc.lat === lat && loc.lon === lon,
  );

  const reOrder = (fromIndex, toIndex, arr) => {
    const newArr = [...arr];
    const [clicked] = newArr.splice(fromIndex, 1);
    newArr.splice(toIndex, 0, clicked);
    setLocations(newArr);

  };

  console.log(locations);
  return (
    <Link
      to={`/${country}/${city}/${lat}/${lon}`}
      onClick={() => reOrder(index, 0, locations)}
    >
      <div>
        <h4>{city}</h4>
        <p>{country}</p>
        <div>
          <img src={icon} alt="weather icon" />
          <span>
            {currTempC}
            <sup>&deg;</sup>
            <small>c</small>
          </span>
        </div>
        <p>
          RealFeel {feelsLikeC}
          <sup>&deg;</sup>
          <small>c</small>
        </p>
      </div>
    </Link>
  );
}
export default WeatherCart;
