

import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/firebaseAuth.config";
import swal from 'sweetalert';


export const CareerContext = createContext();
export const auth = getAuth(app);

const CareerProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const provider = new GoogleAuthProvider();

    const logInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            swal("Congratulation!", "Log in Successfully!", "success");
            setLoader(false);
        } catch (err) {
            swal("Opps!", "Login Failed!", "error");;
        }
    };

    const userLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                swal("Log Out!", "Successfully", "success");
            })
            .catch((err) => {
                console.error("Something went wrong:", err);
            });
    };

    const userRegister = (email, password) => {
        return (
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user
                    setUser(user)
                })
        );
    };

    const registerUserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const resetPasswordUsingEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const updateUserProfile = (updatedName, updatedPhotoURL) => {
        if (!auth.currentUser) return;  
      
        // Update the Firebase profile with the new name and photo URL
        return updateProfile(auth.currentUser, {
          displayName: updatedName,
          photoURL: updatedPhotoURL,
        })
          .then(() => {
            // After updating, fetch the updated data and update the context state
            setUser({
              ...auth.currentUser, 
              displayName: updatedName,
              photoURL: updatedPhotoURL,
            });

          })
          .catch((error) => {
            console.error("Error updating profile:", error);
           
          });
      };
      

  



    // observer function for current user
    useEffect(() => {
        setLoader(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => unsubscribe();
    }, []);

    const contextInfo = {
        logInWithGoogle,
        user,
        setUser,
        userLogOut,
        userRegister,
        registerUserLogin,
        resetPasswordUsingEmail,
        updateUserProfile,
        setLoader,
        loader,
    };

    return (
        <CareerContext.Provider value={contextInfo}>
            {children}
        </CareerContext.Provider>
    );
};

export default CareerProvider;

