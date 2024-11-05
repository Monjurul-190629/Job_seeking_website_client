import { ToastContainer, toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-purple-500 px-5 md:p-10">
                        <form className="card-body text-white font-bold">
                            <h1 className="text-3xl underline font-bold text-center my-5">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>


                        </form>
                        <div className="flex gap-5 justify-center my-5 text-center">
                            <button className="text-xl py-2 px-3 border-2 border-black rounded-lg" ><FaGoogle /></button>
                        </div>

                        <p className="text-center text-white font-bold">New here ? Please <Link to="/Registration"><button className="bg-orange-500 text-white font-bold py-2 px-3 rounded-lg">Registration</button></Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default Login;