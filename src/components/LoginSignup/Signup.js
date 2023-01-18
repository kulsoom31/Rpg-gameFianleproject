import "./SignupStyles.css";
import Footer from "../Footer"
import { Link } from 'react-router-dom';
import React, { useState } from "react"


export const Signup = (props) => {
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');
    const [name, setName]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-from-container">
            <from className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name :-
                <input value={name} name="name" placeholder="full name"/></label>
                <label htmlFor="email">E-mail :-
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your e-mail"/></label>
                <label htmlFor="password">Password :-
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password"/></label>
                <label htmlFor="password">Confirm Password :-
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Retype password"/></label>
                <Link to="/adventure"> 
                <button type="submit" className="btn-start">Login</button>
                </Link>
            </from>
            <Footer />
        </div>
    )



}

export default Signup;