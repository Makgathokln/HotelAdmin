import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import UserInfo from "./UserInfo";

import './style.css';
import FormData from './form';


const Landing = () => {

  const [users, setUsers] = useState([])

  const AddUsers = (name, surname, age, location) => {
    setUsers([...users, {
      uid : users.length,
      _name : name,
      _surname : surname,
      _age : age,
      _location : location
    }

    ])
  }

  return(
    <div className="container">
    <div className="con1">
      <FormData AddUsers= {AddUsers}/>
      </div>
      <div className="con2">
        <h1>Registered Students</h1>
    
    <ul class="list-group">
    {users.map(action => <Link class="list-group-item"  to="/users"> {action._name}, {action._surname}, {action._location}</Link>)}
    </ul>
      </div>

    </div>

  )
};

export default Landing
    