import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;
        const photourl = form.photourl.value;
        
        console.log(name, email, role, password, photourl)

        createUser(email, password)
          .then(result => {
            const user = result.user;
            console.log(user)
          })
          .then(e => {
            console.log(e)
          })

    }


    return (
        <div className="">

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-purple-600 px-5 md:px-20 py-10">
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
                                <input type="photourl" name="photourl" placeholder="photourl" className="input input-bordered text-black" required />
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
                                <button className="btn btn-primary font-bold">Registration</button>
                            </div>

                        </form>
                        <p className="text-center text-white font-bold">Already Have an account ? Please <Link to="/Login"><button className="bg-orange-500 text-white font-bold py-2 px-3 rounded-lg">Login</button></Link></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Registration;