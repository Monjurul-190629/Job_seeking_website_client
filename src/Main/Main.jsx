import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useState } from "react";


const Main = () => {

   // For dark light theme toggle
   const [darkMode, setDarkMode] = useState(false);

   const toggleTheme = () => {
       setDarkMode(!darkMode);
   };


    return (
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} ${darkMode ? 'text-white' : 'bg-black'} transition-colors duration-500 w-screen`}>
            <Navbar darkMode = {darkMode} toggleTheme = {toggleTheme}></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;