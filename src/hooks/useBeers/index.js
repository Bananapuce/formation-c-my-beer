import { useQuery } from "react-query";

import cMyBeersFetch from "../../cMyBeerFetch";

export default function useBeers() {
  const { isLoading, error, data } = useQuery("beers", cMyBeersFetch("/beers"));

  return { isLoading, error, beers: data };
}
