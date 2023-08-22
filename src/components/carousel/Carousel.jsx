import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css"
import noImage from '../../assets/no-image.png';
import axios from "axios";



const handleDragStart = (e) => e.preventDefault();

const Gallery = ({id}) =>{
    const [credits, setCredits] = useState([]);
    
    const fetchCredits = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setCredits(data?.cast);
      };
    
      useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
      }, []);
    

    const items = credits.map((actor) => (
        <div className="carouselItem" key={actor.id}>
          <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/original${actor.profile_path}` : noImage }
            alt={actor?.name}
            onDragStart={handleDragStart}
            className="carouselItem__img"
          />
            <div className="movie_actorName">
                <p className="carouselItem__txt">{actor?.name}</p>
            </div>
            <div className="movie_character">
                <b className="carouselItem__txt">{actor?.character}</b>
            </div>
        </div>
      ));

      const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };

      return (
        <AliceCarousel
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      );

}

export default Gallery;