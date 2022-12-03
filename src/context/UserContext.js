import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/Firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign withgoogle

    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }

    // signout

    const logOut = () => {
        localStorage.removeItem('vision-token')
        return signOut(auth)
    }

    //update user

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser,
            {
                displayName: name,
                photoURL: photo
            }
        )
    }

    //email verification
    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
                ;
        });

        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = { loading, user, createUser, updateUser, signIn, logOut, googleSignIn, verifyEmail }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;