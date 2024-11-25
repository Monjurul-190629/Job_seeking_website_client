import React from 'react';

const ResumeHelp = () => {
    return (
        <div className='mt-20'>
            <div className="flex flex-col-reverse md:flex-row rounded-2xl items-center justify-center bg-gradient-to-r from-sky-700 to-blue-500 mx-4 lg:mx-20 mt-10 md:mt-28 py-10 px-10 md:px-0 md:py-0 md:p-4 ">
                <div className="py-5 md:px-10 lg:px-20 md:py-5 lg:py-10 text-justify md:text-left">
                    <p>
                        <span className="text-slate-200 text-2xl md:text-3xl font-semibold pt-5">Need help to build your resume?<br /></span>
                        <span className="text-slate-200 text-lg md:text-2xl">Get experts to build your resume from scratch...</span><br />
                        <button className="rounded-2xl hover:bg-indigo-800 bg-white text-black py-2 px-3 mt-2 hover:text-white text-sm md:text-[16px]">
                            <a href="https://aesthetic-mousse-9f2882.netlify.app/">View Details</a>
                        </button>
                    </p>
                </div>
                <div className="md:px-5 lg:px-2 md:py-8 lg:py-16 flex justify-center">
                    <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104012629/original/e97d2d17799ae3abb74d5b449f966b81862a4d82/write-and-edit-your-resume-and-cover-letter.jpg"
                        className="h-32 w-40 sm:h-36 sm:w-44 md:h-44 md:w-52 rounded-2xl"
                        alt="Resume help"
                    />
                </div>
            </div>
        </div>

    );
};

export default ResumeHelp;