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
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-[#ede9ff] border-2 border-slate-400 px-5 md:px-10 py-10">
                        <form className="card-body text-black font-semibold" onSubmit={handleRegistration}>
                            <h1 className="text-3xl font-semibold text-center mb-5">Registration</h1>
                            <div className="form-control">
                                
                                <input type="text" name="name" placeholder="name" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                
                                <input type="text" name="photourl" placeholder="photourl" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control">
                                
                                <input type="email" name="email" placeholder="email" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-600 bg-[#ede9ff]" required />
                            </div>
                            <div className="form-control mt-4">
                              
                                <select name="role" clclassName="text-black border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-600 bg-[#ede9ff]" required>
                                    <option value="">Select Role</option>
                                    <option value="Job_Seeker">Job Seeker</option>
                                    <option value="Job_Manager">Job Manager</option>
                                </select>
                            </div>
                            <div className="form-control">
                                
                                <input type="password" name="password" placeholder="password" className="text-black border-b-2 border-slate-500 outline-0 py-2 w-[250px] placeholder-slate-600 bg-[#ede9ff]" required />
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
