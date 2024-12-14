import React, { useState } from 'react';

export default function SignInForm({ onAuth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send the credentials to a server for validation
     if(email === "user@gmail.com" && password === "password")
       {
        onAuth(true)
       } else {
           alert("invalid credentials")
            onAuth(false)
       }
  };
    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
            value={email}
            onChange={handleEmailChange}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}