import React from "react";
import "./Header.css";
import logo from '../../assets/Dbsmovies.png';
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <div className="header">
             <Link to="/" ><img src={logo}  alt="logo"/> </Link>     
            <div className="header-menu">             
                <Link to="/movies/popular" className="header-links"><span className="h-title">Popular</span> </Link>
                <Link to="/movies/top_rated" className="header-links"><span className="h-title">Top Rated</span> </Link>
                <Link to="/movies/upcoming" className="header-links"><span className="h-title">Upcoming </span></Link>
            </div>
        </div>
    )
}

export default Header   