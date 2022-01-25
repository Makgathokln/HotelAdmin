// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import SignIn from './components/signIn';
// import SignUp from './components/signUp';
// import Welcome from './components/welcome';
// import Bookings from './components/bookings';
// import Guests from './components/guests';
// import Rooms from './components/rooms';
// import Notifications from './components/notifications';
// import Home from './components/home';
// import Admin from './components/admin';

// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// function App() {
//     return (

//         <BrowserRouter>
//         <div className = "App" >
//         <Welcome/>
//         <Switch>
//         <Route path = "/"
//         element = { < Home />}>

//         </Route>

//         <Route path = "/bookings"
//         element = { < Bookings />}>

//         </Route>

//         <Route path = "/guests"
//         element = { < Guests />}>

//         </Route>

//         <Route path = "/rooms"
//         element = { < Rooms /> }>

//         </Route>

//         <Route path = "/notifications"
//         element = { < Notifications /> }>
//         </Route>

//         <Route path = "/admin"
//         element = { < Admin /> }>

//         </Route>

//         </Switch> 
//         </div> 
//         </BrowserRouter> 

//     )
// }

// export default App


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Notifications from './components/notifications';
import reportWebVitals from './reportWebVitals';

export function App() {

ReactDOM.render( 
    <React.StrictMode>
    <Menu/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 

}
