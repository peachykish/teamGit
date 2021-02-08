import React, { useState, useEffect } from "react";
import WeatherDisplay from "./weatherDisplay";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  CardSubtitle,
  Button,
} from "reactstrap";

const Weather = (props) => {
  const key = "c2845afc3766e0d9e612589838737941";
  let lon = props.location.longitude;
  let lat = props.location.latitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
  const [temp, setTemp] = useState();
  const [label, setLabel] = useState("");
  const [degree, setDegree] = useState("");
  const [county, setCounty] = useState("");
  const [converted, setConverted] = useState();
  const [isLoaded,setIsLoaded]=useState(false);

  function convertTempCelsius(temp) {
    let cTemp = ((temp - 32) * 5) / 9;
    let degree = Math.round((cTemp + Number.EPSILON) * 100) / 100;
    return degree;
  }
  useEffect(() => {

    fetch(url)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Fetch Function Error");
        } else {
          return res.json();
        }
      })
      .then(json => {
          console.log(json)
          if(json.length === 0){
              throw new Error('No Fetch Data');
          }
          else{
              console.log(json);
              setTemp(json.main.temp);
              setCounty(json.name);
              setIsLoaded(true);
          }
      })
      .catch((err) => console.log("error",err));
  }, [props]);
  function showFahrenheit(event) {
    setLabel("Fahrenheit");
    setDegree("F");
    setConverted(temp);
  }
  function showCelsius(event) {
    setLabel("Celsius");
    setDegree("C");
    setConverted(convertTempCelsius(temp));
  }
  if (!isLoaded){
    return <div onChange={()=>useEffect}>Loading...</div>
} else {
  return (
    <div>
      <h1>Here's the current temperature for your location.</h1>
      <h2>Latitude: {lat}</h2>
      <h2>Longitude: {lon}</h2>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <h4>Local Weather</h4>
            </CardTitle>
            <CardSubtitle>for: {!county ? null : county}</CardSubtitle>
            <CardBody>
              <Button outline block onClick={showFahrenheit}>
                Fahrenheit
              </Button>
              <Button outline block onClick={showCelsius}>
                Celsius
              </Button>
            </CardBody>
            <CardFooter id="card_footer">
              {!converted ? null : (
                <WeatherDisplay
                  temp={converted}
                  label={label}
                  degree={degree}
                />
              )}
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
              }
};

export default Weather;