import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import swal from 'sweetalert2'



const AddJobs = () => {

    const [applicationDeadline, setApplicationDeadline] = useState(new Date());


    const [jobCategory, setJobCategory] = useState('');

    const handleCategoryChange = (event) => {
        setJobCategory(event.target.value);
    };


    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const Banner_url = form.banner_url.value;
        const Job_title = form.job_title.value;
        const name = form.name.value;
        const email = form.email.value;
        const Salary_range = form.Salary_range.value;
        const Job_description = form.Job_description.value;
        const Job_posting_date = form.Job_posting_date.value;
        const Job_applicants_number = form.Job_application_number.value;


        const about_job = {
            Banner_url,
            Job_title,
            name,
            email,
            jobCategory,
            Salary_range,
            Job_description,
            Job_posting_date,
            applicationDeadline,
            Job_applicants_number

        }

        console.log(about_job)

        ////// fetch
        fetch("http://localhost:5000/Jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(about_job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal.fire({
                        title: 'Success!',
                        text: 'new job added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })

    }


    return (
        <div className="">

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full  shadow-2xl bg-gradient-to-r from-blue-600 to-purple-700 px-5 md:px-20 py-10">
                        <form className="card-body text-white font-bold" onSubmit={handleAddJob} >
                            <h1 className="text-3xl underline font-bold text-center my-5">Add a Job</h1>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Banner Url</span>
                                    </label>
                                    <input type="text" name="banner_url" placeholder="Banner url" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Title</span>
                                    </label>
                                    <input type="text" name="job_title" placeholder="Job title" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Category</span>
                                    </label>
                                    <select value={jobCategory} onChange={handleCategoryChange} className='bg-white text-black rounded-lg font-bold px-3 py-2'>
                                        <option value="">Select Job Category</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Salary range</span>
                                    </label>
                                    <input type="text" name="Salary_range" placeholder="salary-range" className="input input-bordered text-black" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job description</span>
                                    </label>
                                    <input type="text" name="Job_description" placeholder="job-description" className="input input-bordered text-black" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Posting Date</span>
                                    </label>
                                    <input type="date" name="Job_posting_date" className="input input-bordered text-black" required />

                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text text-white'>Application Deadline</span>
                                    </label>
                                    <DatePicker className='text-black px-3 py-2 rounded-lg'
                                        selected={applicationDeadline}
                                        onChange={(date) => setApplicationDeadline(date)}
                                        minDate={new Date()} // Disable past dates
                                        dateFormat="dd-MM-yyyy" // Customize date format
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Applicants Number</span>
                                    </label>
                                    <input type="text" name="Job_application_number" placeholder="Applicants Number" defaultValue={0} className="input input-bordered text-black" required />

                                </div>
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn bg-white hover:bg-blue-700 font-bold hover:text-white text-black">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddJobs;