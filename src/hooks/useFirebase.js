import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    // Create New User
    const registerUser = (email, password) =>{
        isLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        })
        .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        })
        .finally(()=>setIsLoading(false));
    }

    // user Login

    const loginUser = (email,password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(()=>setIsLoading(false));
    }

    //obserbe user State 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])

    //logout section
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading
    }
}
 export default useFirebase;