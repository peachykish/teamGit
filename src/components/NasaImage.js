import { useState,useEffect } from "react";

const NasaImage=(props)=>{
    const base_url="https://api.nasa.gov/planetary/earth/imagery";
    const api_key="3NtWYSssmWY8dkk4jUjVGfzEq40EnpFKAmXff1yb"
    let d = new Date();
    const YYYY=d.getFullYear()-1;
    const MM=d.getMonth()+1<10?`0${d.getMonth()+1}`:`${d.getMonth()+1}`;
    const DD=d.getDate()<10?`0${d.getDate()}`:`${d.getDate()}`;
    const date=YYYY+"-"+MM+"-"+DD;
    console.log(date);
    const [image,setImage]=useState();
    let url;

    useEffect(()=>{
        const fetchImage = async()=>{
          let lon=await props.location.longitude;
          let lat=await props.location.latitude;
          url=`${base_url}?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=${api_key}`
          setImage(url);
        }
        fetchImage();
      },[])  

    return(
        <div>
            <h1>This is the NASA component</h1>
            <h2>{url}</h2>
            <img src={image}/>

        </div>
    )

}

export default NasaImage;