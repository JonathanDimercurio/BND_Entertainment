import { useAuth } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    let { currentUser } = useAuth();
    let location = useLocation();
    
    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}



