import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const gProvider = new GoogleAuthProvider();

    const createUser= (email,password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const loginUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoader(true);
          return signInWithPopup(auth,gProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unsubscribe()
        }
    },[]);


   

    const value = {
        user,
        loader,
        loginUser,
        logOutUser,
        createUser,
        googleLogin
        
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;