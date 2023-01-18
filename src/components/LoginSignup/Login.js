import './LoginStyles.css'
import React, { useState } from "react"
import Footer from "../Footer";
import { Link } from 'react-router-dom';

export const Login = (props) => {
    const [ email, setEmail] = useState('');
    const [ pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <p>Log-in Here</p>
        <form onSubmit={handleSubmit} className="form">
            <label for ="email">E-mail:-
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" /></label>
            <label for="password">Password:-
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****" name="password" /></label>
            <Link to="/adventure"> 
            <button className='btn-start'>Login</button>
            </Link>
        </form>
        <Link to="/Signup">
       <button onClick={() => props.onFromSwitch('Signup')} className="btn-cancel">Don't have an account? Register here.</button>
       </Link>
       <div><Footer /></div>
        </>
    )    
        
}
export default Login;