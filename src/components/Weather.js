const Weather=(props)=>{
    console.log("Weather ran")
    return(
        <div>
                        <h1>This is the Weather component</h1>
            <h2>Latitude: {props.location.latitude}</h2>
            <h2>Longitude: {props.location.longitude}</h2>

        </div>
    )

}

export default Weather;