import React from "react"
import Signup from "./auth/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./auth/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./auth/Dashboard"
import Login from "./auth/Login"
import PrivateRoute from "./auth/PrivateRoute"
import ForgotPassword from "./auth/ForgotPassword"
import UpdateProfile from "./auth/UpdateProfile"
import AddMap from "./maps/AddMap"
import MapsPage from "./maps/MapsPage"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
<div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
        <AuthProvider>
          <Switch>
              <Route exact={true} path="/" component={Signup} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/map-list" component={MapsPage} />
              <Route path="/add-map" component={AddMap} />
            
            
          </Switch>
        </AuthProvider>
    </Router>
</div>
</Container>
)
}

export default App


    
    
