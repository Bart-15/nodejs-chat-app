import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';

import background from '../../assets/background.png'

const cookies = new Cookies();
const initalState = {
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    image:""
}

// api key for stream chat


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

    const handleSubmit = async (e) => {
        e.preventDefault();    
        const BASE_URL = 'http://localhost:5000'
        const { username, password, phoneNumber, image } = isForm;
        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${BASE_URL}/${isSignup ? 'signup' : 'login'}`, {
            username, password, fullName: isForm.fullName, phoneNumber, image,
        });

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('image', image);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
       
    }


    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? "Sign Up" : "Sign In"}</p>
                    <form onSubmit={handleSubmit}>
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
                                    <label htmlFor="username">User Name</label>
                                    <input 
                                        name="username"
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
                                    <label htmlFor="image">Avatar</label>
                                    <input
                                    name="image" 
                                    placeholder="image"
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
