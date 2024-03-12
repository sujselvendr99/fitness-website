import React from 'react'
import fitness_image_girl from './images/fitness_image_girl.jpg'; //master1305 from freepix

function AboutUs() {
    return (
        <div className='aboutus'>
            <div>
                <img src={fitness_image_girl} alt="fitness girl" style={{ width: '1466px', }} />
                <h1>About Us</h1>
                <p>Our vision here at Fitness Revolution is to support you with your fitness journey.
                    Whether it be fitness or nutrition, we are here to guide you along the way and
                    provide you with the best chance of success for all your goals.
                </p>
            </div>
            <div className='section'>
                <div className='paragraph'>
                    We understand how difficult achieving your goals can be. So in 2024, we've developed a 
                    new way to promote the better parts of fitness and nutrition. With us, you can
                    follow workout routines, create diet plans, utilise our comprehensive notes app and
                    chat with the community. All from the comfort of your own home!
                </div>
                <div className='stats'>
                    <div>
                        100,000+ Customers Helped
                    </div>
                    <div>
                        200,000+ Notes created
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;