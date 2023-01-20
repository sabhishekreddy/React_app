import React from 'react'
import "./Auth.css"

import Recovery from './Recovery/Recover';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import { useSelector } from 'react-redux';


export default function Auth() {

    var currentUser = useSelector(state => state.user);

    if (currentUser === null) {
        return (
            <div id='AuthMain'>
            <div id='AuthLeft'>
                <SignIn />
                <Recovery />
            </div>
            <SignUp />
        </div>);
    }else{
    return (
        <h1>User Present</h1>
    )
    }
}