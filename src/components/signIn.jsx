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

const signIn = () => {
    return(
    <>
<Router>

<div>
    <nav className="navigation">
      
    <div className="ImageHeader" >
    <img src={pin3} alt="this is car image" style={{marginLeft:80, height:'75%', marginTop:27}} />
    <h1 style={{color:'#fff',alignContent:'center', marginLeft:240, marginTop:90}}>  Hotel Admin System </h1>
    </div>
    </nav>

    <div className="fluid-container">
            <h3 style={{color:'#FF8038',textAlign:'center'}}>Sign In</h3>
    <div class="mb-3 col-xs-4">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Email Address"/>
</div>
<div class="mb-3 col-xs-4">
  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Password"/>
</div>

<div class="mb-3 col-xs-4">
<a href="#" class="link-secondary">Forgot Your Password?</a>
  </div>

  <div class="row">
  <button type="button" to="/users" class="btn btn-light  w-25">Sign In</button>
  <button type="button" class="btn btn-light  w-25">Sign Up</button>

  </div>



    </div>

</div>
    

</Router>           
    
     </>
    )
    
}


    export default signIn