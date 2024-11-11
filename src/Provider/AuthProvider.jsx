import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import app from "../firebase/firebase.config";
import { db } from "../firebase/firebase.config"; // Import Firestore instance

export const AuthContext = createContext();
export const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);        
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, async (currentUser) => {
            if (currentUser) {
                // Fetch additional user data from Firestore
                const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
                
                if (userDoc.exists()) {
                    // Combine Firebase Auth user data with Firestore custom data
                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                        ...userDoc.data() // Merge Firestore data (name, role, photourl, etc.)
                    });
                } else {
                    console.log("No such document in Firestore!");
                }
            } else {
                setUser(null); // Set user to null if no user is signed in
            }
            setLoading(false);
        });
        
        return () => unSubscribe();
    }, []);

    const logOut = () => {
        return signOut(Auth);
    };

    const authInfo = {
        user,  // Will now include custom Firestore properties if available
        loading,
        createUser,
        signIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
