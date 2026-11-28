import SearchForm from "../components/SearchForm";
import WeatherCart from "../components/WeatherCart";
import WrapperLandingPage from "../styles/LandingPage";
import Map from "../components/Map";
import { useAppContext } from "../AppContext";
import SearchQueryHook from "../SearchQueryHook";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { nanoid } from "nanoid";

const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;

function LandingPage() {
  const { searchQuery, setSearchQuery, queryData, queryErrorMessage } =
    SearchQueryHook();
  const { locations, seLocations } = useAppContext();

  const uniqueLocations = locations.filter(
    (location, index, arr) =>
      arr.findIndex(
        (loc) =>
          String(loc.lat).split(".")[0] ===
            String(location.lat).split(".")[0] &&
          String(loc.lon).split(".")[0] === String(location.lon).split(".")[0],
      ) === index,
  );

  console.log("uniqueLocations:", uniqueLocations);

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

  if (weatherError) {
    axios.isAxiosError(weatherError)
      ? console.log(weatherError?.response?.data?.error?.message)
      : console.log(weatherError);
  }

  // ************Error Handling*************//
  const weatherErrorMessage =
    weatherError?.response?.data?.error?.message || "something went wrong";
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
        className="form"
      />
      {/* <Autocomplete fetchedPlaces={queryData} className="auto-complete" /> */}
      <div className="recent-locations">
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
              key={nanoid()}
            />
          ))}
        </section>
      </div>
      <section className="map">
        <div className="map-title">
          <h4>{currentCountry} WEATHER RADAR</h4>
        </div>
        <div className="map">
          <Map />
        </div>
      </section>
    </WrapperLandingPage>
  );
}
export default LandingPage;
