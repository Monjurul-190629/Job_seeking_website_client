import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';




const Update = () => {

    const job = useLoaderData();

    const { Banner_url,
        Job_title,
        name,
        email,
        Salary_range,
        Job_description,
        Job_posting_date,
        Job_applicants_number, _id } = job;


    const handleUpdate = e => {
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
            Salary_range,
            Job_description,
            Job_posting_date,
            Job_applicants_number

        }

        console.log(about_job)

        ////// fetch
        ////// fetch
        fetch(`https://jobseekingserver.vercel.app/jobs/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(about_job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }


    return (
        <div className="">

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full  shadow-2xl border-2 border-slate-400 px-5 md:px-5 py-5">
                        <form className="card-body text-black px-10" onSubmit={handleUpdate} >
                            <h1 className="text-2xl font-bold text-center mb-5">Update Job</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className="form-control">
                                    <input type="text" name="banner_url" placeholder="Banner url" defaultValue={Banner_url} className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    
                                    <input type="text" name="job_title" placeholder="Job title" defaultValue={Job_title} className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                   
                                    <input type="text" name="name" placeholder="Name" defaultValue={name} className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>
                                <div className="form-control">
                                    
                                    <input type="email" name="email" placeholder="email" defaultValue={email} className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />
                                </div>

                                <div className="form-control">
                                 
                                    <input type="text" name="Salary_range" placeholder="salary-range" defaultValue={Salary_range} className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />

                                </div>
                                <div className="form-control">
                                  
                                    <input type="text" name="Job_description" placeholder="job-description" defaultValue={Job_description} className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />

                                </div>
                                <div className="form-control">
                                    
                                    <input type="date" name="Job_posting_date" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" defaultValue={Job_posting_date} required />

                                </div>

                                <div className="form-control">
                                    
                                    <input type="text" name="Job_application_number" placeholder="Applicants Number" defaultValue={Job_applicants_number}  className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[200px] placeholder-slate-600 bg-[#ede9ff]" required />

                                </div>
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn bg-gray-400 font-bold text-slate-900 hover:text-white hover:bg-slate-800">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;