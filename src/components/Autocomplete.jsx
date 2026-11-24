import { Link } from "react-router";
import Wrapper from "../styles/Autocomplete";
import { useAppContext } from "../AppContext";
import { useEffect } from "react";
function Autocomplete({ fetchedPlaces }) {
  const { locations, setLocations, ipData, setIpData } = useAppContext();
  // const { country_name, lat, lon, city } = ipData;
  const handleClick = (coordinate) =>
    setLocations((prev) => [coordinate, ...prev]);

  return (
    <Wrapper>
      {/* <Link to={`/${country_name}/${city}/${lat}/${lon}`}>
        <div className="place-info">
          <h3>use your current location</h3>
        </div>
      </Link> */}
      {fetchedPlaces?.map((place) => {
        const { id, lat, lon, name, region, country } = place;
        console.log(place);
        return (
          <Link
            key={id}
            to={`/${country}/${name}/${lat}/${lon}`}
            className="fetched-place"
            onClick={() => handleClick({ lat: lat, lon: lon })}
          >
            <div className="place-info">
              <h3>{name}</h3>
              <h4>
                {region}, {country}
              </h4>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
}
export default Autocomplete;
