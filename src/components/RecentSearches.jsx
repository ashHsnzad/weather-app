import Wrapper from "../styles/RecentSearches";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useAppContext } from "../AppContext";
import { nanoid } from "nanoid";

const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;
function RecentSearches() {
  const { locations, setLocations } = useAppContext();
  const uniqueLocations = locations.filter(
    (location, index, arr) =>
      arr.findIndex(
        (loc) =>
          String(loc.lat).split(".")[0] ===
            String(location.lat).split(".")[0] &&
          String(loc.lon).split(".")[0] === String(location.lon).split(".")[0],
      ) === index,
  );

  let lastFiveSearches = uniqueLocations.slice(0, 5);
  console.log(lastFiveSearches);

  const { isError, error, data, isPending, isSuccess } = useQuery({
    queryKey: ["recent-searches", lastFiveSearches || []],
    queryFn: async () => {
      const results = await Promise.all(
        lastFiveSearches?.map(async (search) => {
          const lat = search.lat;
          const lon = search.lon;
          const result = await axios(`${url}&q=${lat},${lon}`);
          console.log(result.data);
          return result.data;
        }),
      );
      console.log(results);
      return results;
    },
    staleTime: 20 * 60 * 1000,
  });

  // const index = locations.findIndex(
  //   (loc) => loc.lat === data?.location?.lat && loc.lon === data?.location?.lon,
  // );

  // const reOrder = (fromIndex, toIndex, arr) => {
  //   const newArr = [...arr];
  //   const [clicked] = newArr.splice(fromIndex, 1);
  //   newArr.splice(toIndex, 0, clicked);
  //   setLocations(newArr);
  // };

  const handleClick = (locationData) =>
    setLocations((prev) => [locationData, ...prev]);
  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      {data?.map((searched) => {
        const { localtime_epoch, name, country, region, lat, lon } =
          searched.location;
        const { icon, text } = searched.current.condition;
        const { temp_c, temp_h } = searched.current;
        return (
          <Link
            to={`/${country}/${name}/${lat}/${lon}`}
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
            <div className="recent-search" key={localtime_epoch}>
              <div className="location">
                <h3>{name}</h3>
                <h4>
                  {region}, {country}
                </h4>
              </div>
              <img src={icon} alt={text} />
              <h3>
                {temp_c}
                <sup>&deg;</sup>
                <small>c</small>
              </h3>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
}
export default RecentSearches;
