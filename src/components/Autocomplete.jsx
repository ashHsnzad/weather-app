import { Link } from "react-router";
import Wrapper from "../styles/Autocomplete";
import { useAppContext } from "../AppContext";
import { nanoid } from "nanoid";
function Autocomplete({ fetchedPlaces }) {
  const { locations, setLocations, ipData, setIpData } = useAppContext();

  const handleClick = (locationData) =>
    setLocations((prev) => [locationData, ...prev]);
  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      {fetchedPlaces?.map((place) => {
        const { id, lat, lon, name, region, country } = place;
        console.log(place);
        return (
          <Link
            key={id}
            to={`/${country}/${name}/${lat}/${lon}`}
            className="fetched-place"
            onClick={() =>
              handleClick({
                lat: lat,
                lon: lon,
                city: name,
                region: region,
                country: country,
                id: nanoid(),
              })
            }
            onMouseDown={handleMouseDown}
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
