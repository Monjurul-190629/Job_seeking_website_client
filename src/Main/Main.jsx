import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useState } from "react";
import Footer from "../Pages/Shared/Footer";


const Main = () => {

   // For dark light theme toggle
   const [darkMode, setDarkMode] = useState(false);

   const toggleTheme = () => {
       setDarkMode(!darkMode);
   };


    return (
        <div className={`${darkMode ? 'bg-[#1d1734]' : 'bg-[#ede9ff]'} ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-500 max-w-screen-2xl`}>
            <Navbar darkMode = {darkMode} toggleTheme = {toggleTheme}></Navbar>
            <Outlet></Outlet>
            <Footer  darkMode = {darkMode}></Footer>
        </div>
    );
};

export default Main;