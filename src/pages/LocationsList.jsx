import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import axios from "axios";
import WrapperLocationsList from "../styles/LocationsList";
import { useAppContext } from "../AppContext";
import { nanoid } from "nanoid";
const queryUrl = `http://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;
function LocationsList() {
  const { locations, setLocations } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { isPending, data, isError, isSuccess } = useQuery({
    queryKey: ["searches", "query"],
    queryFn: async () => {
      const results = await axios(`${queryUrl}&q=${query}`);
      // console.log(results.data);
      return results.data;
    },
  });
  console.log(data);

  const handleClick = (locationData) =>
    setLocations((prev) => [locationData, ...prev]);

  return (
    <WrapperLocationsList>
      <div className="content">
        <div className="result-length">
          <p>
            Showing {data?.length} results for "{query}"
          </p>
        </div>

        <article>
          {data?.map((location) => {
            const { name, region, country, id, lat, lon } = location;
            console.log(id);
            return (
              <Link
                key={id}
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
              >
                <div>
                  <h5>{name}</h5>
                  <p>
                    {region}, {country}
                  </p>
                </div>
              </Link>
            );
          })}
        </article>
      </div>
      ;
    </WrapperLocationsList>
  );
}
export default LocationsList;
