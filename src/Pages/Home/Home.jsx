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
                    initial={{ opacity: 0.5, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.1 }}
                    className="p-8  rounded-lg shadow-lg"
                >
                    <div className='font-bold text-center text-4xl underline py-10'>
                        About SkillTrackers
                    </div>
                    <div className="md:px-20 px-4 py-10 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-900 rounded-xl text-white text-justify">

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
            {/* Advisors */}
            <div>
                <div className='font-bold text-center text-4xl underline lg:pt-16'>
                    Our Advisors
                </div>
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.1 }}
                    className="p-8  rounded-lg shadow-lg"
                >
                    <div className='flex justify-center flex-col md:flex-row gap-5 md:gap-10 mx-5'>
                        <div className="card w-96 shadow-xl bg-gradient-to-r from-slate-500 to-slate-300 my-10 text-slate-900">
                            <figure className="px-5 md:px-10 pt-10">
                                <img src="https://assets.mycast.io/actor_images/actor-johnny-depp-163036_large.jpg?1610216546" alt="" className="rounded-full max-w-32" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><span className='text-2xl'>Broad Member,</span> <small>SkillTrackers</small></h2>
                                <p className='text-justify'>
                                    Dep's leadership is marked by his proactive approach and his ability to motivate
                                    and inspire his team. He fosters an environment of open communication, encouraging
                                    creativity and innovation among team members. His knack for identifying.

                                </p>
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl bg-gradient-to-r from-slate-300 to-slate-500 my-10 text-slate-900">
                            <figure className="px-5 md:px-10 pt-10">
                                <img src="https://i.pinimg.com/736x/44/9e/3e/449e3e0d23bd1a33e448cc95ea44a598.jpg" alt="" className="rounded-full max-w-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"><span className='text-2xl'>Broad Member,</span> <small>SkillTrackers</small></h2>
                                <p className='text-justify'>Brad Pitt is a visionary leader with a passion for innovation and
                                    a deep commitment to transforming the job-seeking landscape.
                                    His strategic thinking and ability to build
                                    strong partnerships have been instrumental in expanding the platform's reach and impact.

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