import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Privateroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // Include loading state

    if (loading) {
        return <div>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>; 
    }

    return user ? children : <Navigate to="/Login" />;
};

export default Privateroute;
