import React, { useState, useEffect } from "react";
import WeatherDisplay from "./weatherDisplay";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  CardSubtitle,
  CardHeader,
  Button,
} from "reactstrap";

const Weather = (props) => {
  const key = "9d59ec2364e41dac4b1a6d7c948bff69";
  let lon = -86.0859;
  let lat = 39.8291;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
  console.log("Weather ran");
  const [temp, setTemp] = useState();
  const [label, setLabel] = useState("");
  const [degree, setDegree] = useState("");
  const [county, setCounty] = useState("");
  const [converted, setConverted] = useState();

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
      // .then(json => {
      //     console.log(json)
      //     if(json.length === 0){
      //         throw new Error('No Fetch Data');
      //     }
      //     else{
      //         setTemp(json.main.temp);
      //         setCounty(json.name);
      //     }
      // })
      .catch((err) => console.log(err));
  }, []);
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

  return (
    <div>
      <h1>This is the Weather component</h1>
      <h2>Latitude: {props.location.latitude}</h2>
      <h2>Longitude: {props.location.longitude}</h2>
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>
              <h4>Local Weather</h4>
            </CardTitle>
            <CardSubtitle>for: {!county ? null : county} County</CardSubtitle>
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
};

export default Weather;
