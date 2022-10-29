import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('https://server-liard-chi.vercel.app/products')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    let a = 0;
    return (
        <div className='max-w-screen-xl courses-page   grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mx-auto'>
            {
                course.map(single => {
                    a += 1;
                    return <div className='mt-24'>
                        <div className="card w-96 course-card bg-base-100 shadow-xl">
                            <img className='thumbnail' src={single.image} alt="Shoes" />
                            <div className="card-body">
                                <h2 className="card-title">{single.title}</h2>
                                <p className='h-20 overflow-y-hidden'>{single.description}</p>
                                <strong><del>${single.price + 50}</del> ${single.price}</strong>
                                <div className="card-actions justify-center">
                                    <Link to={`/course/${single.id}`}><button className="enroll btn btn-primary">Enroll Now</button></Link>
                                </div>
                            </div>
                        </div>
                        {
                            (a === 3 && <div className="main-hr flex items-center  text-center">
                                <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
                                <label className="hr-tag block font-medium text-lg text-gray-600 w-full">
                                    Exlusive Courses
                                </label>
                                <hr className="hr-tag border-gray-300 border-1 w-full" />
                            </div>)
                        }
                    </div>

                })
            }
        </div>
    );
};

export default Course;