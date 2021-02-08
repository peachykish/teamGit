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

  useEffect(()=>{
    const fetchLocation = async()=>{
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setLocation(data);
    }
    fetchLocation();
  },[])  
    
  
  // All functional components need to return jsx with one parent element
  return (
    <div className="App">
      {" "}
      {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      <NasaImage location={location} />
      <Weather location={location} />
      <Restaurants location={location} />
    </div>
  );
}

// Makes our Component available for import
export default App;

