import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import axios from "axios"
import Custompagination from "../pagination/custompagination"


const MovieList = () => {
    const [page,setPage] = useState(1);
    const [movieList, setMovieList] = useState([]);
   
    const {type} = useParams();
    
    useEffect(() => {
        getData();
         // eslint-disable-next-line
    },[page])


    const getData = async () => {
        const {data}= await axios.get(
        `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}` 
        );
        setMovieList(data?.results.slice(0,18))
        
        console.log(data.results)
        console.log(data.total_pages)
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
            
                <Custompagination setPage={setPage} />
            
        </div>
        
    )
}

export default MovieList