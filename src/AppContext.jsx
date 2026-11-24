import { useQuery } from "@tanstack/react-query";
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const url = `https://api.weatherapi.com/v1/ip.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [ipData, setIpData] = useState([])

  console.log(currentData);
  const [locations, setLocations] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("locations")) ?? [];
    } catch {
      return [];
    }
  });
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["ip-location"],
    queryFn: async () => {
      const result = await axios(`${url}&q=auto:ip`);
      const data = result.data;
      console.log(data);
      return data;
    },
  });

  // grabbing the ip when it changes and for the first time
  useEffect(() => {
    if (
      data &&
      !locations.some(({ lat, lon }) => lat === data.lat && lon === data.lon)
    ) {
      setLocations((prev) => [...prev, { lat: data.lat, lon: data.lon }]);
      setIpData(data)

    }
  }, [data?.region]);

  console.log("lat:", data?.lat);
  console.log("lon:", data?.lon);

  //setting the local storage

  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  console.log("locations:", locations);

  if (error) {
    axios.isAxiosError(error)
      ? console.log(error?.response?.data?.error?.message)
      : console.log(error);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        locations,
        setLocations,
        currentData,
        setCurrentData,
        ipData,
        setIpData
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
