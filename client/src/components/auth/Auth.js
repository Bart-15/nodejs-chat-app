import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';

import background from '../../assets/background.png'


const initalState = {
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    avatarURL:""
}
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [isForm, isSetForm] = useState(initalState)
    const handleChange = (e) => {
        isSetForm({...isForm, [e.target.name]: e.target.value})
    }

    const switchForm = () => {
        setIsSignup((previsSignup) => !previsSignup)
        isSetForm(initalState)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(isForm)
        
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const username = isForm.userName;
        const password = isForm.password;

        console.log(username + password)
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? "Sign Up" : "Sign In"}</p>
                    <form onSubmit={isSignup ? handleSignUp : handleSignIn}>
                        {isSignup && (
                            <>
                                 <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input 
                                        name="fullName" 
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        />
                                </div>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="userName">User Name</label>
                                    <input 
                                        name="userName"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="User Name"
                                        required
                                        />
                                </div>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input 
                                        name="phoneNumber"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                        />
                                </div>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="avatar">Avatar</label>
                                    <input
                                    name="avatarURL" 
                                    placeholder="Avatar"
                                    type="text"
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    name="password" 
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input 
                                    name="confirmPassword"
                                    placeholder="Confirm Password" 
                                    type="password"
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                            </>
                        )}

                        {
                            isSignup || (
                            <>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="userName">User Name</label>
                                    <input 
                                    name="userName" 
                                    type="text"
                                    placeholder="UserName"
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                    name="password"
                                    placeholder="Pasword" 
                                    type="password"
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                            </>
                            )
                        }
                        <div className="auth__form-container_fields-content_button">
                            <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup ? "Already have an account" : "Don't have an account? "}
                        </p>
                        <span onClick={switchForm}>
                            {isSignup ? "Sign In" : "Sign Up"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={background}  alt="background"/>
            </div>
        </div>
    )
}

export default Auth
