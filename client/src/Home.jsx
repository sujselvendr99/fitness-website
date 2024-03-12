import './app.scss';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-multi-carousel/lib/styles.css'
import people_training from './images/people_training.jpg'; //master1305 from freepix
//import fitness_image from './images/fitness_image.jpg'; //master1305 from freepix
import colourful_veggies from './images/colorful-veggies.jpg'; //master1305 from freepix
import group_exercising from './images/group_exercising.jpg'; //master1305 from freepix
import note_taking from './images/note_taking.jpg'; //master1305 from freepix
import treadmill from './images/treadmill.jpg';
import strength from './images/strength.jpg';
import hiit from './images/hiit.jpg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className="contain">
            <div className="image1">
                <img src={people_training} alt="people training" style={{ width: '1466px', }} />
                <p className='phrase1'>A new innovative way to up your fitness</p>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                      }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card_container_1">
                            <img className="treadmill" src={treadmill} alt="treadmill" />
                            <h1 className="card-title">Cardio</h1>
                            <p className="card-description">
                                Whether you're enjoying the outdoors or running on the treadmill, we have
                                variations for everyone.
                            </p>
                            <li className="cardpage">
                                <Link to="/fitness" className="nav-link active">Start Now</Link>
                            </li>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_container_2">
                            <img className="strength" src={strength} alt="strength" />
                            <h1 className="card-title">Strength Training</h1>
                            <p className="card-description">
                                From beginner to pro, all you need is a barbell and a whole lot of strength.
                            </p>
                            <li className="cardpage">
                                <Link to="/fitness" className="nav-link active">Start Now</Link>
                            </li>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_container_3">
                            <img className="hiit_workout" src={hiit} alt="hiit workout" />
                            <h1 className="card-title">HIIT Workout</h1>
                            <p className="card-description">
                                Fast paced workout guaranteed to help you work up a sweat.
                            </p>
                            <li className="cardpage">
                                <Link to="/fitness" className="nav-link active">Start Now</Link>
                            </li>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
            <div className="image2">
                <img src={colourful_veggies} alt="colourful veggies" style={{ width: '1466px', }} />
                <p className='phrase2'>Choose from thousands of recipes to fit the diet that best suits you!</p>
            </div>
            <div className="image3">
                <img src={group_exercising} alt="group exercising" style={{ width: '1466px', }} />
                <p className='phrase3'>Join a community of fitness lovers and learn from the best!</p>

            </div>
            <div className="image4">
                <img src={note_taking} alt="note taking" style={{ width: '1466px', }} />
                <p className='phrase4'>Take notes and track your workouts to ensure the best results</p>
            </div>
            </div>
        </div>
    );
}
