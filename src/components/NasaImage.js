const NasaImage=(props)=>{
    return(
        <div>
            <h1>This is the NASA component</h1>
            <h2>{props.location.postal}</h2>
        </div>
    )

}

export default NasaImage;