import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;
        const photourl = form.photourl.value;

        console.log(name, email, role, password, photourl);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Wow!',
                    text: 'Successfully Registered',
                    icon: 'success',
                });
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
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-gradient-to-r from-blue-500 to-blue-900 px-5 md:px-10 py-10">
                        <form className="card-body text-white font-bold" onSubmit={handleRegistration}>
                            <h1 className="text-3xl underline font-bold text-center my-5">Registration</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PhotoUrl</span>
                                </label>
                                <input type="text" name="photourl" placeholder="photourl" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text text-white">Role</span>
                                </label>
                                <select
                                    name="role"
                                    className="select select-bordered text-black"
                                    required
                                >
                                    <option value="">Select Role</option>
                                    <option value="Job_Seeker">Job Seeker</option>
                                    <option value="Job_Manager">Job Manager</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 hover:bg-white hover:text-blue-700 text-white font-bold">Registration</button>
                            </div>
                        </form>
                        <p className="text-center text-white font-bold">Already Have an account? Please <Link to="/Login"><button className="bg-blue-500 text-white py-2 px-3 rounded-lg">Login</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
