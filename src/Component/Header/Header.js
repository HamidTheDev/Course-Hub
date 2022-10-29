import { signOut } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontext } from '../Authprovider/Authprovider';
import logo from '../Images/logo.png'
import './Header.css'


const Header = () => {
    const { user, auth } = useContext(Usercontext)

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                console.log("user Signout")
            }).catch(() => {
                console.log("user doke bose ache")
            })
    }

    return (
        <div>
            <div className="header shadow-lg bg-slate-50 navbar bg-base-100">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl"><img alt='' src={logo} className='w-9 mr-3' /><span className='site-title'>Course-Hub</span></a>
                </div>
                <div className="flex-none gap-2">

                    <ul className="menu menu-horizontal ">
                        <Link className='hidden p-2 lg:block' to='/'>Home</Link>
                        <Link className='p-2' to='/course'>Courses</Link>
                        <Link className='p-2' to='/blog'>Blog</Link>
                        <Link className='p-2' to='/faq'>FAQ</Link>
                        <input type="checkbox" className="toggle toggle-md mt-2 hidden lg:block" />
                        {
                            user?.uid ?
                                <button onClick={handleSignout} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg ml-2 text-sm p-2 text-center mr-2 mb-2">SingOut</button>
                                :
                                <Link to='/login'><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 p-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg ml-2 text-sm  text-center mr-2 mb-2">SignIn</button></Link>
                        }
                    </ul>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                            user?.uid ?
                                <div className="w-10 rounded-full outline">
                                    <img title={user?.displayName} alt='' src={user?.photoURL} />
                                </div>
                                :
                                <div className='hidden'></div>

                        }

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;