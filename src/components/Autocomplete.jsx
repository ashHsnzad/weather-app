import { Link } from "react-router";
import WrapperAutocomplete from "../styles/Autocomplete";
import { useAppContext } from "../AppContext";
import { useEffect } from "react";
function Autocomplete({ fetchedPlaces }) {
  const { locations, setLocations } = useAppContext();

  // useEffect((coordinate)=> {
  //   if (fetchedPlaces) {
  //     setLocations (prev => [...prev, coordinate])
  //   }
  // })
  const handleClick = (coordinate) => setLocations((prev) => [coordinate, ...prev ]);
  //   {
  //   console.log(coordinate);

  //   if (
  //     !locations.some(
  //       (element) =>
  //         element.lat === coordinate.lat && element.lon === coordinate.lon,
  //     )
  //   ) {
  //     setLocations((prev) => [...prev, coordinate]);
      
  //   }
  // };
  return (
    <WrapperAutocomplete>
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
            <div>
              <h4>{name}</h4>
              <p>
                {region}, {country}
              </p>
            </div>
          </Link>
        );
      })}
    </WrapperAutocomplete>
  );
}
export default Autocomplete;
