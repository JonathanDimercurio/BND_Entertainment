import React from "react"
//import Signup from "./auth/Signup"
import { Container } from "react-bootstrap"
//import { AuthProvider } from "./auth/contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

//import Dashboard from "./auth/Dashboard"
//import Login from "./auth/Login"
//import PrivateRoute from "./auth/PrivateRoute"
//import ForgotPassword from "./auth/ForgotPassword"
//import UpdateProfile from "./auth/UpdateProfile"
import AddMap from "./maps/AddMap"
import MapsPage from "./maps/MapsPage"
import Gameboard from "./game/Gameboard"

function App() {
  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Switch>
                <Route path="/" component={MapsPage} exact/>
                <Route path="/add-map" component={AddMap} />
                <Route path="/Game" component={Gameboard}/>
                  
            </Switch>
          </Router>
        </div>
    </Container>
  )
}

export default App

//        <Route path="/" component={MapList} />
          
//        <PrivateRoute exact path="/" component={Dashboard} />
//        <PrivateRoute path="/update-profile" component={UpdateProfile} />
//            <Route path="/signup" component={Signup} />
//            <Route path="/login" component={Login} />
//            <Route path="/forgot-password" component={ForgotPassword} />

//    </AuthProvider>
//    <AuthProvider>