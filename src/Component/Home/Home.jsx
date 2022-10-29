import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Usercontext } from '../Authprovider/Authprovider';
import slider from '../Images/homeimg.jpg'
import './Home.css'

const Home = () => {

    return (
 
        <section className='parent' data-theme="dark">
            <div>
            <img className='img' src={slider} alt="" />
            </div>

            <div className='text'>
                <div className="description">
                    <h2>We help you learn what you love</h2>
                    <p>It’s the last day to save
                        Expand your horizons with learning that’s worldwide. Log in now to shop the sale.

                        A broad selection of courses
                        Choose from 204,000 online video courses with new additions published every month</p>
            <div className="button">
                        <button className='sbutton'><Link to='/signup'>SignUp Now</Link></button>
                        <button className='bbutton'><Link to='/course'>Browse Courses</Link></button>
            </div>
                </div>
            </div>
        </section>
      
    );
};

export default Home;