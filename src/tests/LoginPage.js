import React, { useEffect, useState } from "react";
import { signInUser } from "../auth_context/AuthContext"
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  
    
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
      
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInUser(email, password)}
        ></button>
      </div>
    </div>
  );
}
export default LoginPage;
