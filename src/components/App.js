import React from "react"
import {Route, Switch} from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
import Messages from "./Messages"
import NavBar from "./NavBar"
import SignUp from "./SignUp"

function App() {
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/messages">
                    <Messages />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}
export default App