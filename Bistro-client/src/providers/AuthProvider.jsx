import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const googleProvider = new GoogleAuthProvider();
      const githubProvider = new GithubAuthProvider();

      console.log(user)
      // Create New User
      const signUp = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // Login User
      const signIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };

      // User login with Google
      const googleLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      };

      // User login with Github
      const githubLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, githubProvider);
      };

      // Update User Profile
      const updateUserProfile = (name, photo) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            });
      };

      // User Log Out
      const logOut = () => {
            setLoading(true);
            signOut(auth)
                  .then(() => {
                        setUser(null)
                  })
                  .then((err) => {
                        console.log(err)
                  })
      };

      // Observer function
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log("logged in user: ", currentUser?.email)
                  setUser(currentUser);
                  setLoading(false);
            });

            return () => unSubscribe();
      }, []);



      const authInfo = {
            user,
            setUser,
            loading,
            signUp,
            signIn,
            googleLogin,
            githubLogin,
            updateUserProfile,
            logOut
      };

      return (
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      )
}

export default AuthProvider