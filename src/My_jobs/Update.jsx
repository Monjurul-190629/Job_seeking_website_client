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
        fetch(`http://localhost:5000/jobs/${_id}`, {
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

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full  shadow-2xl bg-purple-700 px-5 md:px-20 py-10">
                        <form className="card-body text-white font-bold" onSubmit={handleUpdate} >
                            <h1 className="text-3xl underline font-bold text-center my-5">Update Job</h1>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Banner Url</span>
                                    </label>
                                    <input type="text" name="banner_url" placeholder="Banner url" defaultValue={Banner_url} className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Title</span>
                                    </label>
                                    <input type="text" name="job_title" placeholder="Job title" defaultValue={Job_title} className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" defaultValue={name} className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" defaultValue={email} className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Salary range</span>
                                    </label>
                                    <input type="text" name="Salary_range" placeholder="salary-range" defaultValue={Salary_range} className="input input-bordered text-black" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job description</span>
                                    </label>
                                    <input type="text" name="Job_description" placeholder="job-description" defaultValue={Job_description} className="input input-bordered text-black" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Posting Date</span>
                                    </label>
                                    <input type="date" name="Job_posting_date" className="input input-bordered text-black" defaultValue={Job_posting_date} required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Job Applicants Number</span>
                                    </label>
                                    <input type="text" name="Job_application_number" placeholder="Applicants Number" defaultValue={Job_applicants_number}  className="input input-bordered text-black" required />

                                </div>
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn bg-blue-700 font-bold text-white hover:text-black">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;