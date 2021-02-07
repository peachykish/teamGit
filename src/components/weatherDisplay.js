import React from 'react';

const WeatherDisplay = ({temp, label, degree}) => {
    return (
        <div>
            <div>{label}: {temp} {degree}</div>
        </div>
    )
}
export default WeatherDisplay;