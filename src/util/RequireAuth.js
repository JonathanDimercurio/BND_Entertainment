import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    let { currentUser } = useAuth();
    if (!currentUser) {
        return <Navigate to="/login"/>;
    }
    return children;
}



