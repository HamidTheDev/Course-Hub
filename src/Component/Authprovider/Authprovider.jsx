import React from 'react';
import { createContext } from 'react';
import app from '../../Configs/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

export const Usercontext = createContext(app)

//auth is universal
const auth = getAuth(app)

//different provider
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider()


const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loader, setloader] = useState(true);

    //google signup
    const google = () => {
        setloader(true)
        return signInWithPopup(auth, provider);
    }

    //github signup
    const github = () => {
        setloader(true)
        return signInWithPopup(auth, gitprovider);
    }

    const manual = (email, password, displayName) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password, displayName)

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloader(false)
        })

        return ()=> unSubscribe();
    }, [])
    
    const signin = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authinfo = {user, auth, google, github, manual, signin, loader}

    return (
        <Usercontext.Provider value={authinfo}>
            {children}
        </Usercontext.Provider>
    );
};

export default Authprovider;