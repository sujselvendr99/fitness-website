import React from 'react'
import '../app.scss';
import { Link } from 'react-router-dom'
import fitness_image_girl from '../images/fitness_image_girl.jpg'; //master1305 from freepix
import woman_running from '../images/woman_running.jpg'; //Holiak from Freepix
import strength_training_man from '../images/strength_training_man.jpg'; //Holiak from Freepix
import HIIT_workout from '../images/HIIT_workout.jpg'; //Holiak from Freepix

function Fitness() {
    return (
        <div>
            <img src={fitness_image_girl} alt="fitness girl" style={{ width: '1500px', }} />
            <div className="cards">
                <div className="card-container-1">
                    <img className="woman_running" src={woman_running} alt="woman running" />
                    <h1 className="card-title">Cardio</h1>
                    <p className="card-description">
                        Whether you're enjoying the outdoors or running on the treadmill, we have
                        variations for everyone.
                    </p>
                    <li className="cardpage">
                        <Link to="/aboutus" className="nav-link active">Start Now</Link>
                    </li>
                </div>
                <div className="card-container-2">
                    <img className="strength_training_man" src={strength_training_man} alt="strength training man" />
                    <h1 className="card-title">Strength Training</h1>
                    <p className="card-description">
                        From beginner to pro, all you need is a barbell and a whole lot of strength.
                    </p>
                    <li className="cardpage">
                        <Link to="/aboutus" className="nav-link active">Start Now</Link>
                    </li>
                </div>
                <div className="card-container-3">
                    <img className="HIIT_workout" src={HIIT_workout} alt="HIIT workout" />
                    <h1 className="card-title">HIIT</h1>
                    <p className="card-description">
                        Fast paced workout guaranteed to help you work up a sweat.
                    </p>
                    <li className="cardpage">
                        <Link to="/aboutus" className="nav-link active">Start Now</Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Fitness;