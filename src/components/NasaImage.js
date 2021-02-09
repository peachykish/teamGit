//import { useState,useEffect } from "react";

const NasaImage=(props)=>{
    return(
        <div className="nasa">
            <h1>{props.location.city}, {props.location.region} one year ago today:</h1>
            <p>(Image is from one year ago to ensure an image exists)</p>
            <img src={props.url}/>
        </div>
    )
}

export default NasaImage;