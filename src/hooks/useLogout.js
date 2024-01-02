import React from 'react';
import { auth } from '../firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast'; // Ensure this is correctly imported
import useAuthStore from '../store/authStore'; // Ensure this is correctly imported

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore(state => state.logout); // Ensure this is correctly imported
    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info");
            logoutUser();
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }
    return { handleLogout, loading: isLoggingOut, error }; // Corrected to return isLoggingOut as loading
}

export default useLogout;
