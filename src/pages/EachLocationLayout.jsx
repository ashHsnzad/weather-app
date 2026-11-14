import { Outlet, useParams } from "react-router";
import { useAppContext } from "../AppContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import WeatherPageNavbar from "../components/WeatherPageNavbar";
import Navbar from "../components/Navbar";

const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;

function EachLocationLayout() {
  const { setCurrentData } = useAppContext();
  const { lat, lon, country, city } = useParams();
  const { isError, isPending, data, error } = useQuery({
    queryKey: ["weather", `${lat},${lon}`],
    queryFn: async () => {
      const result = await axios(
        `${url}&q=${lat},${lon}&days=3&aqi=yes&alerts=yes`,
      );
      console.log(result.data);
      return result.data;
    },
    staleTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setCurrentData(data);
    }
  }, [data]);

  console.log("EachLocationLayout rendered");

  if (axios.isAxiosError(error)) {
    console.log(error?.response?.data?.error?.message);
  } else console.log(error);

  const errorMessage =
    error?.response?.data?.error?.message || "something went wrong";

  if (isPending) {
    return (
      <>
        <Navbar />
        <section>
          <h5>Loading ...</h5>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Navbar />
        <section>
          <h5>there was an error:</h5>
          <p>{errorMessage}</p>
        </section>
      </>
    );
  }

  if (data) {
    return (
      <main style={{display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        {/* <Navbar /> */}
        <WeatherPageNavbar />
        <Outlet context={{ currentData: data }} />
      </main>
    );
  }
}
export default EachLocationLayout;
