import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom";
import Users from "./users";
import About from "./about";
import Profile from "./profile";
import Landing from "./landing";
import Home from "./home";

import "../App.css";

const header = () => {
    return(
    <>
<Router>

<div>
    <nav className="navigation">
        <ul>
<li>
    <Link to="/">Home</Link>
</li>

<li>
    <Link to="/Profile">Profile</Link>
</li>

<li>
    <Link to="/about">About</Link>
</li>

<li>
    <Link to="/users">Users</Link>
</li>


        </ul>
    </nav>
<Switch>
<Route path="/">
        <Landing/>
    </Route>

    

    <Route path="/profile">
        <Profile/>
    </Route>
    
    <Route path="/about">
        <About/>
    </Route>

    <Route path="/users">
    <Users/>


    </Route>

    <Route path="/edit" />

</Switch>
</div>
    

</Router>           
    
     </>
    )
    
}


    export default header