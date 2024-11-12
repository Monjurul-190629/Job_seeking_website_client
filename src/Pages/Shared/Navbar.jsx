import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { MdNightlight, MdOutlineDarkMode } from "react-icons/md";
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = ({ darkMode, toggleTheme }) => {

    const { user, logOut, loading } = useContext(AuthContext);


    console.log(user ? user.role : null)

    const navLink = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/All_jobs">All Jobs</NavLink></li>

            {/* Render "Add a Job" only if the user is a 'Job Manager' or if user.role is null */}
            {(user?.role === 'Job_Seeker' || user?.role === null) && (
                <li><NavLink to="/Applied_jobs">Applied Jobs</NavLink></li>
            )}
            {(user?.role === 'Job_Manager' || user?.role === null) && (
                <li><NavLink to="/Add_a_job">Add a Job</NavLink></li>
            )}
            {(user?.role === 'Job_Manager' || user?.role === null) && (
                <li><NavLink to="/My_jobs">My Jobs</NavLink></li>
            )}

           
        </>
    );

    
    if(loading){
        <span className="loading loading-infinity loading-lg text-blue-900"></span>
    }



    const handleLogout = () => {
        logOut()
            .then(() => console.log("Log out successful"))
            .catch((error) => console.log(error.message));
    };

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="mx-10 py-1">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 mt-3 shadow border-white border-2 rounded-box w-52">
                            <div className = {`${darkMode ? 'bg-[#1d1734]' : 'bg-[#d8cdfc]'} ${darkMode ? 'text-white' : 'text-black'}`}>
                                {navLink}
                            </div>
                        </ul>
                        <div className="hidden lg:flex justify-center items-center w-[200px]">
                            <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" className="w-16" alt="Logo" />
                            <p className="text-xl md:text-2xl font-bold">SkillTrackers</p>
                        </div>
                    </div>
                    <div className="flex lg:hidden justify-center items-center w-[200px] ml-4">
                        <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" className="w-2/3" alt="Logo" />
                        <p className="text-xl md:text-2xl font-bold text-purple-800">SkillTrackers</p>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 py-2 items-center space-x-1">
                        {navLink}
                        <button onClick={toggleTheme} className="bg-blue-500 rounded-full p-2 hover:bg-black-700 text-white font-bold px-4 rounded">
                            {darkMode ? <MdOutlineDarkMode /> : <MdNightlight />}
                        </button>
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <>
                            <div className="tooltip tooltip-right z-20  hover:tooltip-open" data-tip={user.displayName}>
                                <img src={user.photoURL} className="lg:ml-40 w-1/3 md:w-1/4 hidden lg:block rounded-full" alt="User Profile" />
                            </div>
                            <a onClick={handleLogout} className="btn btn-sm">Log out</a>
                        </>
                    ) : (
                        <div className="relative text-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <FaUserCircle className="text-4xl text-blue-600" />
                            {isHovered && (
                                <ul className="bg-gradient-to-r from-blue-900 to-orange-300 rounded-lg p-5 right-0 absolute font-bold text-white z-20">
                                    <li className="hover:bg-gray-400 hover:p-1 hover:rounded-lg hover:text-black my-2"><NavLink to="/Login">Login</NavLink></li>
                                    <hr />
                                    <li className="hover:bg-gray-400 hover:p-1 hover:rounded-lg hover:text-black my-2"><NavLink to="/Registration">Registration</NavLink></li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
