import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div className="">

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-purple-600 px-5 md:px-20 py-10">
                        <form className="card-body text-white font-bold">
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