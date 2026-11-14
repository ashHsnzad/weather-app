import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Home,
  FavoritePlaces,
  GeneralError,
  SpecificError,
  LandingPage,
  WeatherPage,
  LocationsList,
  WeatherRadar,
  HourlyForecast,
  ThreeDayForecast,
  AirQuality,
  EachLocationLayout,
} from "./pages/index";

function App() {
  console.log("App rendered");

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      errorElement: <GeneralError />,
      children: [
        { index: true, Component: LandingPage },
        { path: "favorite-places", Component: FavoritePlaces },
        { path: "locations-list", Component: LocationsList },
      ],
    },
    {
      path: "/:country/:city/:lat/:lon",
      Component: EachLocationLayout,
      children: [
        { index: true, Component: WeatherPage },

        {
          path: "3-day-weather-forecast",
          Component: ThreeDayForecast,
        },
        {
          path: "hourly-weather-forecast",
          Component: HourlyForecast,
          
        },
        {
          path: "weather-radar",
          Component: WeatherRadar,
        },
        {
          path: "air-quality",
          Component: AirQuality,
        },
        { path: "*", element: <h1>Route not found</h1> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
