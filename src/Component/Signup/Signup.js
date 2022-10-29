import './singup.css';
import { Link} from 'react-router-dom';
import './singup.css';
import { useContext } from 'react';
import { Usercontext } from '../Authprovider/Authprovider';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';


const SignUp = () => {


    const { auth } = useContext(Usercontext)
    
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();
    const { google, github, manual } = useContext(Usercontext);

    const handleGoogle = () => {
        google()
            .then(result => {
                console.log(result.user)
                setsuccess("Account Created Successfully")
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handlegithub = () => {
        github()
            .then(result => {
                console.log(result.user)
                setsuccess("Account Created Successfully")
            }).catch(error => {
                console.log(error)
            })

    }

    const register = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photourl.value
        
        manual(email, password)
            .then(result => {
                console.log(result)
                setsuccess("Account Created Successfully")
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    console.log("Updated Successfully")
                }).catch(() => {
                    console.log("Update hoini")
                })
            }).catch(error => {
                console.log(error)
                seterror("Email Already Registered with social media");
            })
        
            form.reset();

    }


    return (
        <div className="font-sans">
            <div className="relative flex flex-col sm:justify-center items-center bg-gray-100 min-h-screen">
                <div className="relative sm:max-w-sm w-full mt-20  signup-form">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label  className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Register
                        </label>
                        <form onSubmit={register} className="mt-10">

                            <div>
                                <input type="text" name='name' placeholder="Full Name"
                                required    
                                className="p-5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input  type="email" name='email' placeholder="Email Address"
                                required    className="p-5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            <div className="mt-7">
                                <input type="password" name='password' placeholder="Password"
                                required    className="p-5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            <div className="mt-7 shadow-lg p-2 rounded-xl">
                                <span>Profile Picture URL</span><input type="text" name='photourl' placeholder="Profile Url"
                                    required className="p-5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>



                            <div className="mt-7">
                                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Register
                                </button>
                            </div>

                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Singup With
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>

                            <div className="flex mt-7 justify-center w-full">
                                <button onClick={handlegithub} className="mr-5 bg-gray-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
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
                                    <label className="mr-2" >Already have an account?</label>
                                    
                                    <Link to='/login' className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Login</Link>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SignUp;