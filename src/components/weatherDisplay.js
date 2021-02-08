import React from 'react';

const WeatherDisplay = ({temp, label, degree}) => {
    return (
        <div>
            <h2>{label}: {temp} {degree}</h2>
        </div>
    )
}
export default WeatherDisplay;