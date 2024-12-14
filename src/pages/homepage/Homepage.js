import React from 'react'
import SignInForm from './SignInForm';
export default function Homepage({isAuthenticated, onAuth}) {
    return (
        <div>
            <div className="welcome-title container"><h1>Welcome to To-Do App</h1></div>
            <SignInForm onAuth={onAuth}></SignInForm>
        </div>
    )
}