import { useEffect, useState } from "react";

// import Card from './card';

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [url, setUrl] = useState("");
  

  //const url = `https://developers.zomato.com/api/v2.1/search?count=10&lat=${props.lat}&lon=${props.lon}`;
  console.log(url);
  // fetch(url)
  // .then(res=>res.json())
  // .then(json=>console.log(json));

  useEffect(() => {
    // console.log(props);
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
      <h2>Restaurant: {restaurants.data}</h2>
      {/* <Card name={restaurants.name}/> */}
    </div>
  );
};

export default Restaurants;



// import React, {useEffect, useState} from 'react';
// const Restaurant = () => {
//     const [data, setData] = useState ();
//     const [url] = useState('https://developers.zomato.com/api/v2.1/locations?query=INDIANAPOLIS&count=10');
//     const initData = async () => {
//         const response = await fetch (url, {
//             headers: {
//                 Accept: "application/json",
//                 "User-Key": "a34d947b7d1b3e3355e1f41b0bd18e9a"
//             }
//         });
//         const restaurant = await response.json();
//         setData(restaurant);
//     };
//     useEffect (() => {
//         initData();
//     }, [url]);
//     console.log(data);
//     return (
//         <div className = "main">
//             <div className = "mainDiv">
//                 <h1>Restaurants Near You:</h1>
//             </div>
//         </div>
//     );
// };
// export default Restaurant;