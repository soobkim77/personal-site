import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import "../App.css"

const NavBar = () => {

    const history = useHistory()

    const navigate = (e) => {
        switch (e.target.id) {
            case ("home"):
                return history.push("/home")
            case ("about"):
                return history.push("/about")
            case ("portfolio"):
                return history.push("/portfolio")
            case ("blog"):
                return history.push("/blog")
            case ("contact"):
                return history.push("/contact")
            default:
                return null
        }
    }

    return (
        <div className="parent">
            <button
                className="home-btn1"
                id="home"
                onClick={(e) => navigate(e)} > Home </button>
            <button 
                className="about-btn" 
                id="about" 
                onClick={(e) => navigate(e)} > About </button>
            <button 
                className="port-btn" 
                id="portfolio" 
                onClick={(e) => navigate(e)} > Portfolio </button>
            <button 
                className="blog-btn" 
                id="blog" 
                onClick={(e) => navigate(e)} > Blog </button>
            <button 
                className="contact-btn" 
                id="contact" 
                onClick={(e) => navigate(e)} > Contact </button>
        </div>

    )
}

export default NavBar