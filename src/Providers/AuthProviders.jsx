import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {unSubscribe()}
    },[])
    const authInfo = {
        user,
        signIn,
        createUser,
        logout,
        updateUserProfile,
        googleLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;