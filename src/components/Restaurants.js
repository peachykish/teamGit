import { useEffect, useState } from "react";

const Restaurants=(props)=>{
    const [isLoaded,setIsLoaded]=useState(false);
    const [restaurants,setRestaurants]=useState([]);
    const [error,setError]=useState(null);
    
    useEffect(() => {
        fetch(`https://developers.zomato.com/api/v2.1/search?count=10&lat=${props.lat}&lon=${props.lon}`, {
                headers: {
                  "content-type": "application/json",
                  "User-Key": "a5648799faa95af317e7485487f4a22d",
                },
              })
        .then(res=>res.json())
        .then((result)=>{
            const newArray=[...restaurants,result]
            setRestaurants(newArray);
            console.log("arr of rest",restaurants);
            setIsLoaded(true);

        },
            (error)=>{
            setIsLoaded(true);
            setError(error);
            }
    )
        },[props]);
    if(error){
        return <div>Error:{error.message}</div>
    } else if (!isLoaded){
        return <div onChange={()=>useEffect}>Loading...</div>
    } else {
        return (
            <div><ul>
            {restaurants[0].restaurants.map((item)=>(
                <li key={item.restaurant.id}>{item.restaurant.name}</li>
            ))}

            </ul></div>
        )
    }
}

export default Restaurants;
