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
        fetch("https://jobseekingserver.vercel.app/Jobs", {
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
                    <div className="card shrink-0 w-full  shadow-2xl border-2 border-slate-400 px-5 md:px-5 py-5">
                        <form className="card-body text-black" onSubmit={handleAddJob} >
                            <h1 className="text-3xl font-semibold text-center mb-5">Add a Job</h1>
                           
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className="form-control">
                                    <input type="text" name="banner_url" placeholder="Banner url" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="job_title" placeholder="Job title" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="name" placeholder="Name" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="email" placeholder="Email" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                
                                <div className="form-control">
                                    <input type="text" name="Salary_range" placeholder="Salary range" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="Job_description" placeholder="Job description" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="Job_posting_date" placeholder="Job posting date" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                         <span className='label-text text-slate-600 bg-[#ede9ff]'>Application Deadline</span>
                                    </label>
                      <DatePicker className='text-slate-600 bg-[#ede9ff] px-3 py-2 rounded-lg border-b-2'
                                        selected={applicationDeadline}
                                        onChange={(date) => setApplicationDeadline(date)}
                                        minDate={new Date()} // Disable past dates
                                        dateFormat="dd-MM-yyyy" // Customize date format
                                    />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="Job_applicants_number" placeholder="Job applicants number" className= "text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    <select value={jobCategory} onChange={handleCategoryChange} className='bg-white text-black rounded-lg border-b-2 font-bold px-3 py-2'>
                         <option value="" className='text-slate-600 bg-[#ede9ff]'>Select Job Category</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>

                                </div>
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn hover:bg-white bg-blue-700 font-bold text-white hover:text-black">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddJobs;