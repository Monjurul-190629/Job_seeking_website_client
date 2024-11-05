import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
export const Auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);        
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)

        });
        return () => {
            unSubscribe()
        }
    }, [])

    /// logout
    const logOut = () => {
        return signOut(Auth);
    }

    const authInfo = {
        user, loading, createUser, signIn, logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;