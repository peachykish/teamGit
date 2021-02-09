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
    let url=`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12270.76212403068!2d${props.location.longitude}!3d${props.location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1612883072404!5m2!1sen!2sus`
  return (
    <div>
        <h1>Welcome to Team 5's Group Project</h1>
        <h2>It appears you are located in {props.location.city}, {props.location.region}.</h2>
        <h2>Clink on any of the links above for information about where you are.</h2>
        <iframe src={url} width="600" height="450" frameBorder="0"></iframe>
    </div>);
};
