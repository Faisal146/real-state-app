import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup , GithubAuthProvider } from 'firebase/auth'
import auth from "../firebase/firebase.config";
 export const AuthContext = createContext(null);

 const Authprovider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const Googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSign = ()=>{
        setLoader(true)
       return signInWithPopup(auth, Googleprovider)
    }
    const githubSign = ()=>{
        setLoader(true)
       return signInWithPopup(auth, githubprovider)
    }

    // observing auth state change

    useEffect(()=>{
       const unSubscribe=  onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const logOut = () => {
        setLoader(true)
        signOut(auth)
    }


const authInfo = {user,loader, createUser, loginUser,GoogleSign, logOut, githubSign}

return(

<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
)
}

export default Authprovider;