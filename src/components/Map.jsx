import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import L from "leaflet";
import { useAppContext } from "../AppContext";
import Wrapper from "../styles/Map";
const openStreetMapCr = "https://www.openstreetmap.org/copyright";
const rainViewerCr = "https://www.rainviewer.com/";
const rainViewerUrl = `https://api.rainviewer.com/public/weather-maps.json`;

function Map() {
  const { locations } = useAppContext();
  const position = locations[0];
  const positionArray = [position.lat, position.lon];
  // fetching the map
  const {
    isPending: mapPending,
    isError: mapIsError,
    error: mapError,
    data: mapData,
  } = useQuery({
    queryKey: ["map"],
    queryFn: async () => {
      const results = await axios(rainViewerUrl);
      console.log(results.data);
      return results.data;
    },
  });

  const frames = mapData?.radar?.past;
  const radarUrls = frames?.map((frame) => mapData?.host + frame?.path);
  const tileUrls = radarUrls?.map(
    (radarUrl) => `${radarUrl}/256/{z}/{x}/{y}/2/1_1.png`,
  );
  const latestTileUrl = tileUrls?.at(-1);
  console.log(latestTileUrl);

  console.log(position);

  return (
    <Wrapper>
      <div className="map">
        <MapContainer
          center={positionArray}
          zoom={7}
          maxZoom={7}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
          className="leaflet-container"
        >
          <TileLayer
            attribution={`&copy; <a href=${openStreetMapCr}>OpenStreetMap</a> contributors`}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={7}
          ></TileLayer>
          {latestTileUrl && (
            <TileLayer
              attribution={`&copy; <a href=${rainViewerCr}>RainViewer</a>`}
              url={latestTileUrl}
              maxZoom={7}
            ></TileLayer>
          )}

          <Marker position={positionArray}></Marker>
        </MapContainer>
      </div>
    </Wrapper>
  );
}
export default Map;
{
  /* for animating the radar frames later */
}
{
  /* {mapData?.radar?.past?.length > 0 &&
        tileUrls?.map((tileUrl) => (
          <TileLayer
            attribution={`&copy; <a href=${rainViewerCr}>RainViewer</a>`}
            url={tileUrl}
            key={tileUrl}
          ></TileLayer>
        ))} */
}
