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
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-[#efefff]'} ${darkMode ? 'text-white' : 'bg-black'} transition-colors duration-500 w-screen`}>
            <Navbar darkMode = {darkMode} toggleTheme = {toggleTheme}></Navbar>
            <Outlet></Outlet>
            <Footer  darkMode = {darkMode}></Footer>
        </div>
    );
};

export default Main;