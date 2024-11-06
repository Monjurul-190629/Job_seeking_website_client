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

        }
        console.log(data1)
        console.log("submit is done now")

        fetch("http://localhost:5000/jobs", {
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
                        text: 'new job added successfully',
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
            <div className=" px-4 my-1 rounded-2xl mx-auto text-white text-center">
                <div className=" bg-gradient-to-r from-blue-800 to-purple-800 px-5 pb-10 pt-10  rounded-2xl">
                    <div className="flex justify-center mb-10">
                        <img src={Banner_url} alt="" className=" h-48" /><br />
                    </div>
                    <div className="text-gray-300 flex gap-5 font-semibold justify-center mb-10">
                        <h3 className="text-xl md:text-3xl">#{Job_title}</h3>
                    </div>

                    <div className="font-bold text-center text-gray-300">
                        <span className="underline text-xl">Short Description</span> : {Job_description}
                    </div>
                    <h3 className="text-2xl text-gray-300 font-semibold my-8 mb-10">Salary_Range: {Salary_range}</h3>
                    <h2 className="text-xl font-semibold my-4 text-gray-200">Total Applicants Number: {Job_applicants_number}</h2>



                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-orange-500 text-white font-bold hover:text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-purple-600">
                            <h3 className="font-bold text-lg mb-5 underline">Apply for : {Job_title}</h3>
                            <p className="py-1 t font-bold">Logged in as: {user.displayName}</p>
                            <p className="py-1 t font-bold">Email: {user.email}</p>
                            <label htmlFor="resume-link" className='py-2 font-bold'>Resume Link:</label>
                            <input
                                type="text"
                                id="resume-link"
                                name="resume_link"
                                className='px-1 py-1 rounded-lg mx-2 text-black'
                                onChange={(e) => setResumeLink(e.target.value)}
                                required
                            />
                            <button className=" py-2 px-3 mt-4 hover:bg-white rounded-lg bg-gray-800 text-white font-bold hover:text-black mx-4" onClick={submitApplication}>Submit Application</button>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

            </div>
        </div>
    );
};

export default ViewDetails;