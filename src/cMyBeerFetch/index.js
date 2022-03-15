const responseToJson = (response) => response.json();

const apiUri = "https://my-json-server.typicode.com/caedes/formation-c-my-beer";

export default function cMyBeersFetch(route) {
  return () => fetch(`${apiUri}${route}`).then(responseToJson);
}
