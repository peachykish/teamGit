//import { useState,useEffect } from "react";

const NasaImage=(props)=>{
    // const base_url="https://api.nasa.gov/planetary/earth/imagery";
    // const api_key="3NtWYSssmWY8dkk4jUjVGfzEq40EnpFKAmXff1yb"
    // let d = new Date();
    // const YYYY=d.getFullYear()-1;
    // const MM=d.getMonth()+1<10?`0${d.getMonth()+1}`:`${d.getMonth()+1}`;
    // const DD=d.getDate()<10?`0${d.getDate()}`:`${d.getDate()}`;
    // const date=YYYY+"-"+MM+"-"+DD;
    // console.log(props);
    // const [image,setImage]=useState("");

    // useEffect(()=>{
    //       const fetchImage = async()=>{
    //       let lon=await props.location.longitude;
    //       let lat=await props.location.latitude;
    //       setImage(`${base_url}?lon=${lon}&lat=${props.location.latitude}&date=${date}&dim=0.15&api_key=${api_key}`);
    //     }
    //     fetchImage();
    //   },[])  

    return(
        <div className="nasa">
            <h2>{props.location.city}, {props.location.region} one year ago today:</h2>
            <p>(Image is from one year ago to ensure an image exists)</p>
            <img src={props.url}/>

        </div>
    )

}

export default NasaImage;