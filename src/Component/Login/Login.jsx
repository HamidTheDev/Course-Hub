import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Usercontext } from '../Authprovider/Authprovider';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const [error, seterror] = useState();
    const [success, setsuccess] = useState();

    const { google, github, signin } = useContext(Usercontext);

    const handleGoogle = () => {
        google();
        navigate(from, { replace: true })
    }


    const handleGithub = () => {
        github();
        navigate(from, { replace: true })
    }

    const manualSignin = (e) => {
        e.preventDefault();
        console.log(e)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password).then(() => {
            console.log('Logged in Succesfully')
            setsuccess("Logged in Successfully")
            navigate(from, {replace:true})
        }).catch(() => {
            console.log("not logged in")
            seterror("No account found with this email")
        })

        form.reset();

    }



    return (
        <div className="font-sans ">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
                <div className="relative sm:max-w-sm w-full mt-10  signup-form">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Login
                        </label>
                        <form onSubmit={manualSignin}  className="mt-10">

                            <div className="mt-7">
                                <input type="email" name='email' placeholder="Email Address"
                                    required className="p-5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            <div className="mt-7">
                                <input type="password" name='password' placeholder="Password"
                                    required className="p-5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>



                            <div className="mt-7">
                                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>

                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Signin With
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>

                            <div className="flex mt-7 justify-center w-full">
                                <button onClick={handleGithub} className="mr-5 bg-gray-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Github
                                </button>

                                <button onClick={handleGoogle} className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Google
                                </button>
                            </div>

                            <label className="mt-7 flex justify-center items-center mr-2 text-green-600" >{success}</label>
                            <label className="mt-7 flex justify-center items-center mr-2 text-red-600" >{error}</label>

                            <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2" >Don't have an account?</label>
                                   
                                    <Link className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" to='/signup'>Register</Link>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;