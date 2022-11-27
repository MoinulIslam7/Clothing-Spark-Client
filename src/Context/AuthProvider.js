import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../FIrebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true); 
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        createUser, signIn, user, logOut, updateUser, loading, signInWithGoogle
    }
    useEffect(() =>{
       const unSubcribe =  onAuthStateChanged(auth, currentUser =>{
            console.log("user Observing");
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubcribe();
    }, [])
    return (
        <AuthContext.Provider
        value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;