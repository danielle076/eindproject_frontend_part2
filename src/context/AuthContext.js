import React, {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../modules/firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password, userName) {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((ref) => {
                ref.user.updateProfile({
                    displayName: userName,
                })
                console.log(currentUser)
                setCurrentUser({...currentUser, displayName: userName})
            })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        setCurrentUser,
        resetPassword: resetPassword,
        updateEmail: updateEmail,
        updatePassword: updatePassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}