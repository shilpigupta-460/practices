import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Login from "../src/Login"
const SignUp = () => {
    const [user, setUser] = useState({
        uname: "",
        email: "",
        password: ""
    })
    // const navigate = useNavigate()
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/register", { ...user })
            .then(res => console.log(res))

            .catch(error => {
                console.log(error);
            });
        // console.log({ ...user });
        setUser({
            uname: "",
            email: "",
            password: ""
        })
        // navigate("/")

    }

    return (
        <div style={{ display: "flex", width: "200px", height: " 200px", justifyContent: "center", alignContent: " center", border: "1px solid red", margin: "auto", padding: "200px" }}>

            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input type='text' name="uname" placeholder='name' value={user.uname} onChange={handleChange} /><br />
                <input type='text' name="email" placeholder='username' value={user.email} onChange={handleChange} /><br />
                <input type='text' name="password" placeholder='password' value={user.password} onChange={handleChange} /><br />
                <button>SignUp</button>

            </form >

        </div >
    );
}

export default SignUp