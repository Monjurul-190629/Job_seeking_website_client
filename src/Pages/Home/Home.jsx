import Banner from "./Banner";
// framer -motion
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             {/* Framer motion */}
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.1 }}
                    className="p-8  rounded-lg shadow-lg"
                >
                    <div className='font-bold text-center text-4xl underline py-10'>
                        About SkillTrackers
                    </div>
                    <div className="md:px-20 px-4 py-10 bg-gradient-to-r from-cyan-950 to-blue-500 rounded-xl text-white text-justify">

                        <div className="flex flex-col lg:flex-row-reverse gap-5 md:gap-10 md:justify-center">
                            <div className='md:flex-1'>
                                <img src="https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg" className="max-w-full rounded-lg shadow-2xl" />
                            </div>
                            <div className='md:flex-1'>

                                <p className="py-6">
                                    <span className='text-3xl font-bold text-slate-300'>SkillTrackers</span> is an innovative job-seeking website designed to connect
                                    job seekers with potential employers efficiently and effectively.
                                    The platform offers a comprehensive range of tools to enhance the job search experience,
                                    including personalized job recommendations, resume building assistance, and skill assessments
                                    to highlight candidates' strengths. With an intuitive interface and advanced search filters,
                                    users can easily navigate through various job listings tailored to their career goals and expertise.
                                    SkillTrackers also provides valuable resources such as interview preparation tips and career advice articles,
                                    making it a one-stop solution for individuals striving to advance their professional journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;