import { queryOptions, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
const queryUrl = `http://api.weatherapi.com/v1/search.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}`;

function SearchQueryHook() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const {
    isError: queryIsError,
    isLoading,
    error: queryError,
    data: queryData,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ["searches", debouncedQuery],
    queryFn: async () => {
      const results = await axios(`${queryUrl}&q=${debouncedQuery}`);
      return results.data;
    },
    enabled: debouncedQuery.length > 1,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (queryIsError) {
    axios.isAxiosError(error)
      ? console.log(error?.response?.data?.error?.message)
      : console.log(error);
  }

  const queryErrorMessage =
    queryError?.response?.data?.error?.message ||
    "we couldn't find any the place";

  return { searchQuery, setSearchQuery, queryData, queryErrorMessage };
}

export default SearchQueryHook;
