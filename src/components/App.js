import React from "react"
import Signup from "./auth/Signup"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import { AuthProvider } from "./auth/contexts/AuthContext"
//import Dashboard from "./auth/Dashboard"
//import Login from "./auth/Login"
//import PrivateRoute from "./auth/PrivateRoute"
//import ForgotPassword from "./auth/ForgotPassword"
//import UpdateProfile from "./auth/UpdateProfile"
//import AddMap from "./maps/AddMap"
//import MapsPage from "./maps/MapsPage"
//import Gameboard from "./game/Gameboard"
//import AddToken from "./tokens/AddToken"


export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }} >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
            <Switch>
              <Route path="/" component={Signup} />
            </Switch>
        </Router>
      </div>
    </Container>
  )
}
