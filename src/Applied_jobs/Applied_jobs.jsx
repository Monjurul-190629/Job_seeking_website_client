import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Applied_table from "./Applied_table";

const Applied_jobs = () => {
    
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const url = `http://localhost:5000/appliedJobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [url]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredJobs = selectedCategory === 'All'
        ? jobs
        : jobs.filter(job => job.jobCategory.toLowerCase().trim() === selectedCategory.toLowerCase().trim());

    return (
        <div className="bg-purple-600 text-white py-10 px-5 rounded-xl">
            <h2 className="text-2xl mb-5 text-center font-bold">Your Jobs: {filteredJobs.length}</h2>
            <div className="mb-5">
                <label htmlFor="category" className="font-bold">Filter by Category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="ml-3 px-3 py-2 rounded-md bg-white text-black font-bold"
                >
                    <option value="All">All</option>
                    <option value="On site">On site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto hidden lg:block">
                <table className="min-w-full bg-white text-black rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-purple-800 text-white">
                            <th className="py-4 px-6 text-left font-semibold">Job Category</th>
                            <th className="py-4 px-6 text-left font-semibold">Job Title</th>
                            <th className="py-4 px-6 text-left font-semibold">Job Description</th>
                            <th className="py-4 px-6 text-left font-semibold">Salary Range</th>
                            <th className="py-4 px-6 text-left font-semibold">Resume Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredJobs.map(job => (
                            <Applied_table key={job._id} job={job} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Responsive Cards for Small Devices */}
            <div className="lg:hidden space-y-4">
                {filteredJobs.map(job => (
                    <div key={job._id} className="bg-white text-black p-4 rounded-lg shadow-lg">
                        <p className="font-semibold"><span className="font-bold">Job Category:</span> {job.jobCategory}</p>
                        <p className="font-semibold"><span className="font-bold">Job Title:</span> {job.Job_title}</p>
                        <p className="font-semibold"><span className="font-bold">Job Description:</span> {job.Job_description}</p>
                        <p className="font-semibold"><span className="font-bold">Salary Range:</span> {job.Salary_range}</p>
                        <p className="font-semibold"><span className="font-bold">Resume Link:</span> 
                            <a href={job.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800"> View Resume</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applied_jobs;
