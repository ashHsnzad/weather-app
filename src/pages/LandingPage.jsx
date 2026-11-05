import SearchForm from "../components/SearchForm";
import WeatherCart from "../components/WeatherCart";
import WrapperLandingPage from "../styles/LandingPage";
import Autocomplete from "../components/Autocomplete";
import Map from "../components/Map";
import { useAppContext } from "../AppContext";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import axios from "axios";

const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;
const queryUrl = `http://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { locations, seLocations } = useAppContext();

  const uniqueLocations = locations.filter(
    (location, index, arr) =>
      arr.findIndex(
        (loc) => JSON.stringify(loc) === JSON.stringify(location),
      ) === index,
  );

  console.log("uniqueLocations:", uniqueLocations);
  // const uniqueLocations = Array.from(new Set(locations));
  // console.log(uniqueLocations);
  let lastThreeLocations = uniqueLocations.slice(0, 3);
  console.log(lastThreeLocations);
  // fetching from the context or localStorage
  const {
    isPending: weatherPending,
    isError: weatherIsError,
    data: weatherData,
    error: weatherError,
  } = useQuery({
    queryKey: ["weather", lastThreeLocations],
    queryFn: async () => {
      const results = await Promise.all(
        lastThreeLocations.map(async (location) => {
          const lat = location.lat;
          const lon = location.lon;
          const result = await axios(
            `${url}&q=${lat},${lon}&aqi=yes&alerts=yes`,
          );
          console.log(result.data);
          return result.data;
        }),
      );
      console.log(results);
      return results;
    },
    staleTime: 20 * 60 * 1000,
  });
  // console.log(weatherData?.location);
  // fetching for a search query
  const {
    isError: queryIsError,
    data: queryData,
    isPending: queryPending,
    isSuccess: querySuccess,
    error: queryError,
  } = useQuery({
    queryKey: ["searches", debouncedQuery],
    queryFn: async () => {
      const results = await axios(`${queryUrl}&q=${debouncedQuery}`);
      return results.data;
    },
    enabled: debouncedQuery.length > 1,
  });
  // console.log(queryData ?? []);
  // console.log(debouncedQuery);
  // console.log(searchQuery);
  // console.log(locations[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (weatherError) {
    axios.isAxiosError(weatherError)
      ? console.log(weatherError?.response?.data?.error?.message)
      : console.log(weatherError);
  }

  // ************Error Handling*************//
  const weatherErrorMessage =
    weatherError?.response?.data?.error?.message || "something went wrong";
  const queryErrorMessage =
    queryError?.data?.error?.message || "couldn't find the place";
  if (weatherPending) {
    return (
      <WrapperLandingPage>
        <SearchForm />
        {
          <section>
            <h5>Loading ...</h5>
          </section>
        }
      </WrapperLandingPage>
    );
  }
  if (weatherIsError) {
    return (
      <WrapperLandingPage>
        <SearchForm />
        <section>
          <h5>there was an error:</h5>
          <p>{weatherErrorMessage}</p>
        </section>
      </WrapperLandingPage>
    );
  }

  if (locations.length < 1) {
    return (
      <WrapperLandingPage>
        <SearchForm />
        <section>
          <h5>We Couldn't grab your location</h5>
          <p>Please search for a region</p>
        </section>
      </WrapperLandingPage>
    );
  }
  const currentCountry = weatherData[0].location.country.toUpperCase();
  return (
    <WrapperLandingPage>
      <SearchForm
        setSearchQuery={setSearchQuery}
        queryData={queryData}
        searchQuery={searchQuery}
      />
      <Autocomplete fetchedPlaces={queryData} />
      <div className={`recent-locations ${queryData?.length ? "opaque" : ""}`}>
        <h5>RECENT LOCATIONS:</h5>
        <section className="carts-container">
          {weatherData.map((data, i) => (
            <WeatherCart
              icon={data.current.condition.icon}
              text={data.current.condition.text}
              currTempC={data.current.temp_c}
              currTempF={data.current.temp_f}
              country={data.location.country}
              city={data.location.name}
              feelsLikeC={data.current.feelslike_c}
              feelsLikeF={data.current.feelslike_f}
              lat={lastThreeLocations[i].lat}
              lon={lastThreeLocations[i].lon}
              key={`${data.location.lat}-${data.location.lon}`}
            />
          ))}
        </section>
      </div>
      <section className="map">
        <div className="map-title">
          <h4>{currentCountry} WEATHER RADAR</h4>
        </div>
        <div className="map">
          <Map  />
        </div>
      </section>
    </WrapperLandingPage>
  );
}
export default LandingPage;
