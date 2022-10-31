import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const Category = () => {
     const category = useLoaderData()
     console.log(category)

     const [product, setproduct] = useState([])
     console.log(product)
     useEffect(() => {
          fetch("https://server-liard-chi.vercel.app/products/")
               .then(res => res.json())
               .then(product => setproduct(product))
     },[])

     return (
          <div className='max-w-screen-xl courses-page   grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mx-auto'>
               {
                    product.map(single => {
                         if (single.category == category.gory) {
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
                              
                              </div>

                         }
                    })
               }
          </div>
     )
};

export default Category;