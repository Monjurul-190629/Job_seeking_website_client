import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";


const ViewDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(st => st._id == id)


    const [resumeLink, setResumeLink] = useState('');

    const { user } = useContext(AuthContext);
    console.log(user.email)

    const { Banner_url,
        Job_title,
        Salary_range,
        Job_description,
        Job_applicants_number,
        applicationDeadline,
        jobCategory } = job;



    // Check if the deadline is over
    const currentDate = new Date();
    const deadlineDate = new Date(applicationDeadline);
    if (currentDate > deadlineDate) {
        swal.fire({
            title: 'Deadline Over',
            text: 'The deadline for applying to this job has passed.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return; // Stop further execution
    }

    const submitApplication = (e) => {

        e.preventDefault();

        const data1 = {
            Job_title,
            Salary_range,
            Job_description,
            resumeLink,
            jobCategory,
            email: user.email

        }
        console.log(data1)
        console.log("submit is done now")

        fetch("https://jobseekingserver.vercel.app/appliedJobs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data1)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal.fire({
                        title: 'Success!',
                        text: 'Applied successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                    // Close the modal dialog after successful submission
                    document.getElementById('my_modal_5').close();
                }
            })


    }



    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2 text-justify shadow-sm my-10">
                <div className="border-2 border-slate-300 rounded-2xl px-5 py-10">
                    <div className="flex justify-center mb-2">
                        <img src={Banner_url} alt="" className=" h-48 lg:w-72 rounded-2xl" /><br />

                    </div>
                    <div className="text-blue-700 flex gap-5 font-semibold justify-center mb-4 lg:mb-5">
                        <h3 className="text-xl md:text-2xl">#{Job_title}</h3>
                    </div>

                    <div className="font-bold mb-4 lg:mb-6 lg:text-center ">
                        <span className="text-[16px]">Short Description</span> : {Job_description}
                    </div>
                    <h3 className="text-[16px]  mb-3 lg:mb-3">Salary Range: {Salary_range}</h3>
                    <h2 className="text-[16px] my-1 mb-3 ">Total Applicants Number: {Job_applicants_number}</h2>
                    <div className="text-[16px] ">
                        Other Facility : <br />
                        <div className="pl-4">
                            1. Flexible Working Arrangements<br />
                            2. Professional Development Opportunities<br />
                            3. Health and Wellness Benefits<br />
                            4. Creative and Comfortable Workspaces<br />
                            5. Work-Life Balance Support<br />
                            6. Relocation Assistance and Visa Sponsorship<br />
                            7. Retirement and Financial Benefits
                        </div>
                    </div>
                    <div className="text-center rounded-2xl py-7 lg:px-10 lg:py-10">

                        <p className="text-xl font-semibold text-center">To Apply, Click on the Button..</p>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-blue-700 text-white font-bold hover:text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-slate-950 ">
                            <div className="modal-box bg-slate-300 m-0">
                                <h3 className="font-semibold text-lg mb-5">Apply for : {Job_title}</h3>
                                <p className="py-1 t font-normal">Logged in as: {user.displayName}</p>
                                <p className="py-1 t font-normal">Email: {user.email}</p>
                                <input
                                    type="text"
                                    id="resume-link"
                                    name="resume_link"
                                    placeholder = "Resume Link"
                                    className='px-1 py-1 mx-2 mt-5 placeholder-slate-700 text-center text-black bg-slate-300 border-b-2 border-slate-800'
                                    onChange={(e) => setResumeLink(e.target.value)}
                                    required
                                /><br/>
                                <button className=" py-2 px-3 mt-4 hover:bg-white rounded-lg bg-gray-500 text-white font-bold hover:text-black mx-4" onClick={submitApplication}>Apply</button>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn bg-blue-500 hover:text-black text-white">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

            </div>

           
                
        </div>
    );
};

export default ViewDetails;