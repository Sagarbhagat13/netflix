import React, { useEffect, useState } from "react";
import "./Row.css"

function Row({title,url,isLargeRow}){
    const [movies,setMovies]=useState([]);

 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${url}`).then
        (res=>res.json()).then
        (data=> setMovies(data.results))
    
      
    }, [url ]) 
    
    const beginurl="https://image.tmdb.org/t/p/original/"

    const posterimg= movies.map(movie=>{
        return <img key ={movie.id} className={`poster_img ${isLargeRow && "poster_imgLarge"}`} src={`${beginurl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
    })

   
    
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {posterimg}

            </div>

        </div>
    )
}

export default Row;