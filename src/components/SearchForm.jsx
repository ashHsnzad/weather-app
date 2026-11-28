import Wrapper from "../styles/SearchForm.js";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { useAppContext } from "../AppContext.jsx";
import Autocomplete from "./Autocomplete.jsx";
import RecentSearches from "./RecentSearches.jsx";

function SearchForm({ setSearchQuery, queryData, searchQuery }) {
  const { ipData, setIpData, locations, setLocations } = useAppContext();
  const {
    country_name: ipCountry,
    city: ipCity,
    lat: ipLat,
    lon: ipLon,
  } = ipData;

  const index = locations.findIndex(
    (loc) => loc.lat === ipLat && loc.lon === ipLon,
  );

  const reOrder = (fromIndex, toIndex, arr) => {
    const newArr = [...arr];
    const [clicked] = newArr.splice(fromIndex, 1);
    newArr.splice(toIndex, 0, clicked);
    setLocations(newArr);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    reOrder(index, 0, locations);
  };

  const [inputFocused, setInputFocused] = useState(false);
  const handleFocus = () => setInputFocused(true);
  const handleBlur = () => setInputFocused(false);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const navigate = useNavigate();
  const search = (formData) => {
    const searchTerm = formData.get("search");
    if (searchTerm.length > 1) {
      setSearchQuery(searchTerm);
      navigate(`/locations-list?q=${searchTerm}`);
    } else return null;
  };

  return (
    <Wrapper onBlur={handleBlur}>
      <form
        className={inputFocused && "active"}
        action={search}
        onFocus={handleFocus}
      >
        <input
          type="search"
          placeholder="e.g. London"
          className="form-input"
          onChange={handleChange}
          value={searchQuery ?? ""}
          name="search"
        />
      </form>
      <section className="drop-down">
        {inputFocused && (
          <Link
            to={`/${ipCountry}/${ipCity}/${ipLat}/${ipLon}`}
            onMouseDown={handleMouseDown}
          >
            <div
              className={`ip-location ${queryData?.length > 0 || searchQuery.length < 2 ? "no-radius" : ""}`}
            >
              <h4>use your current location</h4>
            </div>
          </Link>
        )}
        {inputFocused && !queryData && (
          <div className="recent-searches">
            <RecentSearches />
          </div>
        )}
        {queryData?.length > 0 && inputFocused && (
          <Autocomplete fetchedPlaces={queryData} className="auto-complete" />
        )}
      </section>
    </Wrapper>
  );
}
export default SearchForm;
