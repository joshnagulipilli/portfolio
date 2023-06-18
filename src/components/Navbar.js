import React, { useRef } from 'react'
import img from '../jg-logo.png'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-light navbar-light " id="home">
            <div className="container-fluid  ">
               <img src={img} alt="" width="50" height="50" ></img>
                <a className="navbar-brand " href="/" style={{ color: "#183153", fontWeight: "600", fontSize: "25px" }} >

                    Joshna Gulipilli</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link " href="#about">About</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#profiles">Profiles</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                            
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar