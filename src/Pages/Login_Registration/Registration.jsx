import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase.config";
import { setDoc, doc } from "firebase/firestore";

const Registration = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;
        const photourl = form.photourl.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;

                // Save user data to Firestore
                if (user) {
                    setDoc(doc(db, "Users", user.uid), {
                        email: email,
                        role: role,
                        displayName: name,
                        photoURL: photourl
                    })
                    .then(() => {
                        Swal.fire({
                            title: 'Wow!',
                            text: 'Successfully Registered',
                            icon: 'success',
                        });
                        logOut();
                        navigate("/Login");
                    })
                    .catch(error => {
                        console.error("Firestore error:", error.message);
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to save user data.',
                            icon: 'error',
                        });
                    });
                }
            })
            .catch(error => {
                console.error("Registration error:", error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                });
            });
    }

    return (
        <div className="">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-gradient-to-r from-slate-500 to-slate-400 px-5 md:px-10 py-10">
                        <form className="card-body text-black font-bold" onSubmit={handleRegistration}>
                            <h1 className="text-3xl underline font-bold text-center my-5">Registration</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">PhotoUrl</span>
                                </label>
                                <input type="text" name="photourl" placeholder="photourl" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text text-black">Role</span>
                                </label>
                                <select name="role" className="select select-bordered text-black" required>
                                    <option value="">Select Role</option>
                                    <option value="Job_Seeker">Job Seeker</option>
                                    <option value="Job_Manager">Job Manager</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 hover:bg-blue-900 hover:text-white text-white font-bold">Registration</button>
                            </div>
                        </form>
                        <p className="text-center text-black font-bold">Already Have an account? Please <Link to="/Login"><button className="bg-blue-700 hover:bg-blue-950 text-white py-2 px-3 rounded-lg">Login</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
