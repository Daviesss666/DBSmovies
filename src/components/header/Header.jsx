import React from "react";
import "./Header.css";
import logo from '../../assets/Dbsmovies.png';
import {Link} from "react-router-dom";

const Header = () =>{
    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 300);
        console.log('page to reload')
    }

    return (
        <div className="header">
             <Link to="/" ><img src={logo}  alt="logo"/> </Link>     
            <div className="header-menu">             
                <Link to="/movies/popular" onClick={refreshPage} className="header-links"><span className="h-title">Popular</span> </Link>
                <Link to="/movies/top_rated" onClick={refreshPage} className="header-links"><span className="h-title">Top Rated</span> </Link>
                <Link to="/movies/upcoming" onClick={refreshPage} className="header-links"><span className="h-title">Upcoming </span></Link>
            </div>
        </div>
    )
}

export default Header   