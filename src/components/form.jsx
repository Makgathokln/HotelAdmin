import React, { useState} from 'react';
import './style.css';

const FormData = ({ AddUsers}) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
     const [location, setLocation] = useState('');

    //function to access user input

    const submitData = (e) => {
        e.preventDefault()
        AddUsers(name, surname, age, location)
    }

    return (
        <>
            <h1>Student Registration </h1>
        <form onSubmit={submitData}> 
            <input type="text" value = {name} onChange={(e) => setName(e.target.value) } placeholder="Enter your name" required autoFocus></input>
            
            <input type="text" value = {surname} onChange={(e) => setSurname(e.target.value)} placeholder="Enter your surname" required></input>
            <input type="text" value = {age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" required></input>
            <input type="text" value = {location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" required></input>

<button type="submit" className="btn btn-default"> Add users</button>
        </form>
        </>
    )
}

export default FormData