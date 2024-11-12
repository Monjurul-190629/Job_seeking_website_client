import Banner from "./Banner";
// framer -motion
import { motion } from 'framer-motion'
import ResumeHelp from "./ResumeHelp";
import Category from "./Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Framer motion */}
            <div>
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.1 }}
                    className="p-8  rounded-lg shadow-lg"
                >
                    
                    <div className="md:px-20 px-4 py-10 bg-gradient-to-r from-blue-600 to-slate-300 text-slate-900 rounded-xl my-10 text-white text-justify">

                        <div className="flex flex-col lg:flex-row-reverse gap-5 md:gap-10 md:justify-center">
                            <div className='md:flex-1'>
                                <img src="https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg" className="max-w-full rounded-lg shadow-2xl" />
                            </div>
                            <div className='md:flex-1'>

                                <p className="py-6">
                                    <span className='text-3xl font-bold '>SkillTrackers</span> is an innovative job-seeking website designed to connect
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

            <div className="">
                <Category></Category>
            </div>

            <div>
                <ResumeHelp></ResumeHelp>
            </div>



            {/* Advisors */}
            <div>
                <div className='font-semibold text-center text-2xl  lg:pt-16'>
                    Our Advisors
                </div>
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.1 }}
                    className="p-4 lg:p-8 rounded-lg shadow-lg"
                >
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 mx-2 sm:mx-5 lg:mx-10">
                        {/* Card 1 */}
                        <div className="border-2  px-4  rounded-lg bg-blue-100 border-slate-400 shadow-lime-200">
                            <div className="w-full rounded-lg sm:w-80 lg:w-96 shadow-xl bg-gradient-to-r from-blue-300 to-blue-500 my-5  text-slate-950">
                                <figure className="px-5 lg:px-10 pt-10 lg:pt-12 flex justify-center">
                                    <img src="https://assets.mycast.io/actor_images/actor-johnny-depp-163036_large.jpg?1610216546" alt="" className="rounded-full w-32 h-32 object-cover" />
                                </figure>
                                <div className="card-body items-center text-center p-5 lg:pb-10">
                                    <h2 className="card-title text-lg lg:text-2xl">
                                        <span className="text-xl lg:text-2xl">Board Member,</span> <small>SkillTrackers</small>
                                    </h2>
                                    <p className="text-justify text-sm lg:text-base">
                                        Depp's leadership is marked by his proactive approach and his ability to motivate and inspire his team. He fosters an environment of open communication, encouraging creativity and innovation among team members. His knack for identifying talent has proven invaluable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border-2  px-4  rounded-lg bg-blue-100 border-slate-400 shadow-lime-200">
                            <div className="w-full rounded-lg sm:w-80 lg:w-96 shadow-xl bg-gradient-to-r from-blue-300 to-blue-500 my-5  text-slate-950">
                                <figure className="px-5 lg:px-10 pt-10 lg:pt-12 flex justify-center">
                                    <img src="https://i.pinimg.com/736x/44/9e/3e/449e3e0d23bd1a33e448cc95ea44a598.jpg" alt="" className="rounded-full w-32 h-32 object-cover" />
                                </figure>
                                <div className="card-body items-center text-center p-5 lg:pb-10">
                                    <h2 className="card-title text-lg lg:text-2xl">
                                        <span className="text-xl lg:text-2xl">Board Member,</span> <small>SkillTrackers</small>
                                    </h2>
                                    <p className="text-justify text-sm lg:text-base">
                                        Brad Pitt is a visionary leader with a passion for innovation and a deep commitment to transforming the job-seeking landscape. His strategic thinking and ability to build strong partnerships have been instrumental in expanding the platform's reach and impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>

        </div>
    );
};

export default Home;