import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import NasaImage from "./NasaImage";
import Weather from "./Weather";
import Restaurants from "./Restaurants";

// Function name matches file name
const Navbar = (props) => {
  
  return (
    <div >
      <div className="nav-bar">
        <ul className="nav-link">
          <li><Link className="link-text" to="/home">Home</Link></li>
          <li><Link className="link-text" to="/nasa">NASA</Link></li>
          <li><Link className="link-text" to="/weather">Weather</Link></li>
          <li><Link className="link-text" to="/restaurant">Restaurant</Link></li>
        </ul>
      </div>
      <div className="navbar-route">
        <Switch>
            <Route exact path="/home"><Home location={props.location}/></Route>
            <Route exact path="/"><Home location={props.location}/></Route>
            <Route exact path="/nasa"><NasaImage location={props.location} url={props.johnsUrl} /></Route>
            <Route exact path="/weather"><Weather location={props.location} /></Route>
            <Route exact path="/restaurant"><Restaurants lat={props.location.latitude} lon={props.location.longitude} /></Route>
        </Switch>
      </div>
    </div>
  );
};

// Makes it available for import
export default Navbar;

const Home = (props) => {
    console.log("props",props)
  return (
    <div>
        <h1>Welcome to Team 5's Group Project</h1>
        <h2>It appears you are located in {props.location.city}, {props.location.region}.</h2>
        <h2>Clink on any of the links above for information about where you are.</h2>
    </div>);
};
