import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from "./users";
import About from "./about";
import Profile from "./profile";
import Landing from "./landing";
import Home from "./home";
import pin1  from '../images/pin1.jpg';
import pin2  from '../images/pin2.jpg';
import pin3 from '../images/pin3.jpg';

import "../App.css";

const welcome = () => {
    return(
    <>
<Router>

<div>
    
<div class="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white " 
style={{width: 250}}> 
    <img src={pin3} alt="this is car image" style={{ height:'25%'}} />

    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item"> 
        
        <Link to="/" class="nav-link active" aria-current="page"> 
        <i class="fa fa-home"></i><span class="ms-2">Home</span> </Link> </li>
        
        
         <li> <Link to="/Profile" class="nav-link text-white">
         <i class="fas fa-file-alt"></i><span class="ms-2">Bookings</span> </Link> </li>
       
       
        <li> <Link to="/guests" class="nav-link text-white"> 
        <i class="fas fa-users"></i>
        <span class="ms-2">Guests</span> </Link> </li>
        
        <li> <Link to='/rooms' class="nav-link text-white">
        <i class="fas fa-bed"></i><span class="ms-2">Manage Rooms</span> </Link> </li> 
        
        <li> <Link to="/notifications" class="nav-link text-white"> 
        
        <i class="fas fa-bell"></i><span class="ms-2">Notifications</span></Link> </li> 

        <li> <Link to="/admin" class="nav-link text-white"> 
        
        <i class="fas fa-user"></i><span class="ms-2">Add Amin</span></Link> </li>
    </ul>
    <hr/>
    <Link to="/" class="nav-link text-white"> LogOut</Link>
</div>

</div>
    {/* <div className="container">
        <h1>Welocome page</h1>
    </div> */}

</Router>           
    
     </>
    )
    
}


    export default welcome