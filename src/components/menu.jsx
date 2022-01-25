import React from "react";
import { BrowserRouter as Router, 
    Link, Route, Switch, NavLink } from "react-router-dom";
import Users from "./users";
import About from "./about";
import Profile from "./profile";
import Landing from "./landing";
import Home from "./home";

import "../App.css";
import Notifications from "./notifications";

const Menu = () => {
    return(
    <Router>
    <Switch>
        <Route path="/" element={<Notifications/>}/>
        <Route path="/profile" element={<Profile/>}/>

    </Switch>
     </Router>
    )
    
}


    export default Menu