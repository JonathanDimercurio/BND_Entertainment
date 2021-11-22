import React, { useContext } from 'react'
import { useAuth } from "../util/AuthContext"
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    let { currentUser } = useAuth();
    if (!currentUser) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them.
        return <Navigate to="/login"/>;
    }
    return children;
}



