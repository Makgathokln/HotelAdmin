import React from "react";
import Notifications from "./notifications";
const guests = () => {
    return(
        <>
        <h1>Guests</h1>
<p>I am profile page</p>

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Welcome from './components/welcome';
import Notifications from './components/notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
    <React.StrictMode>
    <Notifications/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
        </>
    ) 
}

export default guests