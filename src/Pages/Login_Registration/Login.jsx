import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log("Error during login:", error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                });
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log("Google user:", result.user);
                navigate('/');
            })
            .catch(error => {
                console.log("Error during Google login:", error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                });
            });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-slate-500 to-slate-400 px-5 md:p-10">
                    <form className="card-body text-slate-900 font-bold" onSubmit={handleLogin}>
                        <h1 className="text-3xl underline font-bold text-center my-5">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-900">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-900">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-blue-700 bg-blue-950 hover:text-slate-200  text-white">Login</button>
                        </div>
                    </form>
                    <div className="flex gap-5 justify-center my-5 text-center">
                        <button className="text-xl py-2 px-3 border-2 border-black rounded-lg bg-transparent" onClick={handleGoogleLogin}>
                            <FaGoogle />
                        </button>
                    </div>
                    <p className="text-center text-slate-900 font-bold">
                        New here? Please <Link to="/Registration"><button className="bg-purple-900 text-white font-bold py-2 px-3 rounded-lg">Register</button></Link>
                    </p>
                </div>
            </div>
     
        </div>
    );
};

export default Login;
