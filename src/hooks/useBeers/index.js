import { useQuery } from "react-query";
import queryString from "query-string";

import cMyBeersFetch from "../../cMyBeerFetch";

export default function useBeers({ categoryId } = {}) {
  const beersQueryString = queryString.stringify({
    categoryId,
  });

  const { isLoading, error, data } = useQuery(
    ["beers", categoryId],
    cMyBeersFetch(`/beers?${beersQueryString}`)
  );

  return { isLoading, error, beers: data };
}
