import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../components/firebase.config";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
  }

  const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);

  }

  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)

  }

  useEffect(()=>{
   const unSubscrbe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoading(false)
      console.log('observing current user form the useeffect that can be undastand the procss of useeffect',currentUser)
    })

    return ()=>{
      unSubscrbe()
    }
  },[])

  const authInfo = { user,createUser,signInUser,logOut,loading };
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node
}