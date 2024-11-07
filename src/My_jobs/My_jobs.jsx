import React from 'react';

const My_jobs = () => {

    const { user } = useContext(AuthContext);

    const [jobs, setJobs] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const url = `https://job-seeking-website-server.vercel.app/jobs?email=${user?.email}`;
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
                fetch(`https://job-seeking-website-server.vercel.app/jobs/${id}`, {
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
                        <table className="">
                            {/* head */}
                            <thead className="flex flex-col justify-center items-center ">
                                <tr className="mb-10">
                                    <th className="md:w-60 underline text-xl md:text-2xl">Job Title</th>
                                    <th className="md:w-60 underline text-xl md:text-2xl">Job Posting Date</th>
                                    <th className="md:w-60 underline text-xl md:text-2xl">Application Deadline</th>
                                    <th className="md:w-60 underline text-xl md:text-2xl">Salary Range</th>
                                    <th className="md:w-60 underline text-xl md:text-2xl">Details</th>
                                </tr>
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