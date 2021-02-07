import { useEffect, useState } from "react";

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [url, setUrl] = useState("");
  

  //const url = `https://developers.zomato.com/api/v2.1/search?count=10&lat=${props.lat}&lon=${props.lon}`;
  console.log(url);
  // fetch(url)
  // .then(res=>res.json())
  // .then(json=>console.log(json));

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(`https://developers.zomato.com/api/v2.1/search?count=10&lat=${props.lat}&lon=${props.lon}`, {
        headers: {
          "content-type": "application/json",
          "User-Key": "a5648799faa95af317e7485487f4a22d",
        },
      });
      const data = await response.json();
      setRestaurants(data);
      console.log("restaurants", restaurants);
    };
    fetchRestaurants();
  }, []);
  return (
    <div>
      <h1>This is the restaurants component</h1>
      {/* <h2>Restaurant: {restaurants[0].name}</h2> */}
    </div>
  );
};

export default Restaurants;
