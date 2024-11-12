import React from 'react';

const ResumeHelp = () => {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row rounded-2xl items-center justify-center bg-gradient-to-r from-sky-700 to-blue-500 lg:mx-20 mt-28'>
                <div className='lg:px-20 lg:py-10'>
                    <p className=''>
                        <span className='text-slate-200 text-3xl font-semibold my-2'>Need help for resume ?<br/></span>
                        <span className='text-slate-200 text-2xl '>Get Experts to build your resume from scratch...</span><br/>
                        <button className='rounded-2xl hover:bg-indigo-800 bg-white text-black py-2 px-3 mt-5 hover:text-white text-[16px]'>
                            <a href = "https://aesthetic-mousse-9f2882.netlify.app/"> View Details </a>
                        </button>
                    </p>
                </div>
                <div className='lg:px-2 lg:py-16'>
                    <img src = "https://thumbs.dreamstime.com/b/resume-categories-17620272.jpg" className='h-36 w-44 rounded-2xl' alt = "Resume pic"/>
                </div>
            </div>
        </div>
    );
};

export default ResumeHelp;