import { useQuery } from "react-query";

import cMyBeersFetch from "../../cMyBeerFetch";

export default function useCategories() {
  const { isLoading, error, data } = useQuery(
    "categories",
    cMyBeersFetch("/categories")
  );

  return { isLoading, error, categories: data };
}
