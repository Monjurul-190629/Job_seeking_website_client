import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Privateroute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }
    return <Navigate to = "/Login"></Navigate>
};

export default Privateroute;