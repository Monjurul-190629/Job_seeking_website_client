import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Table_1 from './Table_1';

const My_jobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const url = `https://jobseekingserver.vercel.app/jobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [url]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: 'You will not be able to recover this job!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://jobseekingserver.vercel.app/jobs/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = jobs.filter((job) => job._id !== id);
                            setJobs(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm sm:text-base">
                            <th className="px-4 py-2 border">Job Title</th>
                            <th className="px-4 py-2 border">Posting Date</th>
                            <th className="px-4 py-2 border">Application Deadline</th>
                            <th className="px-4 py-2 border">Salary Range</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <Table_1
                                key={job._id}
                                job={job}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_jobs;
