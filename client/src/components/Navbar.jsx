import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand ms-auto mb-2 mg-lg-0" href="/">
                    <Link to="/home">Fitness Revolution</Link>
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link active">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/fitness" className="nav-link active">Fitness</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nutrition" className="nav-link active">Nutrition</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/discussion" className="nav-link active">Discussion Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/note" className="nav-link active">Notes Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;