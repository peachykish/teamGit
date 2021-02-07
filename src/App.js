import React, { useState, useEffect } from "react";

// adding css to jsx is that easy
import "./App.css"; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Navbar from "./components/Navbar";
import NasaImage from "./components/NasaImage";
import Weather from "./components/Weather";
import Restaurants from "./components/Restaurants";

// Defining our <App /> component the function name matches the file name
function App() {
  const [location, setLocation] = useState({});
  //remove through "date" if you can get it working correctly in NasaImage
  const [johnsUrl, setJohnsUrl] = useState("");
  let d = new Date();
  const YYYY = d.getFullYear() - 1;
  const MM =
    d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`;
  const DD = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`;
  const date = YYYY + "-" + MM + "-" + DD;
  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setLocation(data);
      console.log("data from app.js",data);
      //remove the following line if you can get nasaimage working correctly
      setJohnsUrl(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${data.longitude}&lat=${data.latitude}&date=${date}&dim=0.15&api_key=3NtWYSssmWY8dkk4jUjVGfzEq40EnpFKAmXff1yb`
      );
    };
    fetchLocation();
  }, []);

  // All functional components need to return jsx with one parent element
  return (
    <div className="App">
      {" "}
      {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      {/* remove the url from NasaImage if you can get nasaimage working correctly */}
      <NasaImage location={location} url={johnsUrl} /> 
      <Weather location={location} />
      <Restaurants lat={location.latitude} lon={location.longitude}/>
    </div>
  );
}

// Makes our Component available for import
export default App;
