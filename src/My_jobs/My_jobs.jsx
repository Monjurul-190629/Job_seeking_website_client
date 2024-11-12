import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Table_1 from './Table_1';

const My_jobs = () => {

    const { user } = useContext(AuthContext);

    const [jobs, setJobs] = useState([]);

    console.log(user.email)

    const [selectedCategory, setSelectedCategory] = useState('All');

    const url = `https://jobseekingserver.vercel.app/jobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url]);



    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure to want to delete?',
            text: 'You will not be able to recover this job!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform delete action
                fetch(`https://jobseekingserver.vercel.app/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = jobs.filter(job => job._id !== id);
                            setJobs(remaining);
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div>
                <div>
                    <div className="">
                        <table className="mx-auto">
                            {/* head */}
                            <thead className="flex flex-col justify-center items-center ">
                                <tr className="mb-1">
                                    <th className="md:w-60 text-xl md:text-xl">Job Title</th>
                                    <th className="md:w-60 text-xl md:text-xl">Job Posting Date</th>
                                    <th className="md:w-60 text-xl md:text-xl">Application Deadline</th>
                                    <th className="md:w-60 text-xl md:text-xl">Salary Range</th>
                                    <th className="md:w-60 text-xl md:text-xl">Details</th>
                                </tr>
                                <div className="divider divider-neutral"></div>
                            </thead>
                            <tbody className="flex flex-col justify-center items-center mb-10">
                                {
                                    jobs.map(job => <Table_1 key={job._id} job={job} handleDelete={handleDelete}></Table_1>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default My_jobs;