'use client'
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    const res = await fetch("http://localhost:8085/api/auth/login/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: "demo_google_token"
      })
    });
  
    const data = await res.json();
    console.log(data);
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8085/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });
  
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <h1>Welcome back</h1>
      <p>Please enter your details to sign in.</p>

      <div className="form">
        <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email" />
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <div className="forgot-row">
          <Link className="signup-link" href="/signup">
            Don't have an account? Sign up
          </Link>

          <button className="forgot-link" >
            Forgot your password?
          </button>
        </div>

        <button className="btn" onClick={handleLogin}>Sign in</button>

        <div className="social-login">
          <button className="social-btn" onClick={handleGoogleLogin}>
            <img src="/google.svg" alt="google" />
          </button>

          <button className="social-btn">
            <img src="/facebook.svg" alt="facebook" />
          </button>

          <button className="social-btn">
            <img src="/github.svg" alt="github" />
          </button>
        </div>
      </div>
    </>
  );
}