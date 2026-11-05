import WrapperSearchForm from "../styles/SearchForm.js";
import { useNavigate } from "react-router";

function SearchForm({ setSearchQuery, queryData, searchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const navigate = useNavigate();
  const search = (formData) => {
    const searchTerm = formData.get("search");
    if (searchTerm.length > 1 && queryData.length > 0) {
      setSearchQuery(searchTerm);
      navigate(`/locations-list?q=${searchTerm}`);
    } else return null;
  };
  return (
    <WrapperSearchForm>
      <form className="form" action={search}>
        <input
          type="search"
          placeholder="e.g. London"
          className="form-input"
          onChange={handleChange}
          value={searchQuery ?? ""}
          name="search"
        />
      </form>
    </WrapperSearchForm>
  );
}
export default SearchForm;
