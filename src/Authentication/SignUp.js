import React from 'react'
import { useState, useEffect } from 'react'
import "./SignUp.css"

import { CreateAccount, EmailAndPasswordSignOut, getUser, SignInEmailAndPassword } from '../firebase/functions/authentication'

export default function SignUp() {

    const [Email, SetEmail] = useState("")
    const [Password, SetPassword] = useState("")
    const [isLoggedIn,SetisLoggedIn] = useState(false);
    
    useEffect(()=>{
        console.log("reloaded")
    },[isLoggedIn])

    return (
        <div className='Container'>
            <div className='TopBar'>
                <div> </div>
                <p onClick={()=>{handleSignOut()}}>Need help?</p>
            </div>
            <div id='title'>
                <h1>Sign Up</h1>
                <h5>Create an account and start exploring best seller nearby with great offers !!..</h5>
            </div>
            <div id='createform'>
                <input placeholder='Email Address' onChange={(e)=>{SetEmail(e.target.value)}}/>
                <input placeholder='Password' onChange={(e)=>{SetPassword(e.target.value)}}/>
                <input placeholder='Confirm Password' />
                <div id='indicators'>
                    <div></div> <div></div> <div></div> <div></div>
                </div>
                <button type='submit' onClick={(e) => {handleAuthentication() }}>
                        {isLoggedIn ? 'Get Started' : 'Sign Up'}
                </button>
            </div>
        </div>
    )

    async function handleAuthentication(){
        try {
            const User = await SignInEmailAndPassword(Email,Password)
            if(User != null && User != {}){
                SetisLoggedIn(true)
            }
        } catch (error) {
            SetisLoggedIn(false)
        }
    }

    async function handleSignOut(){
        await EmailAndPasswordSignOut()
        SetisLoggedIn(false)
    }

    function PasswordStrengthGenerator(Password){
        const alphabetpattern = /[abc]/
        const numericalpattern = /[0-9]/
    }
}

