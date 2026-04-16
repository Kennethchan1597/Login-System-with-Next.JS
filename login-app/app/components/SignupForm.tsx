import Link from "next/link";

export default function SignupForm() {
  return (
    <>
      <h1>Create account</h1>
      <p>Please enter your details to sign up.</p>

      <div className="form">
        {/* 👇 新增 email */}
        <input
          className="input"
          type="email"
          placeholder="Email"
        />

        {/* 👇 username（你 backend 要） */}
        <input
          className="input"
          placeholder="Username"
        />

        {/* 👇 password */}
        <input
          className="input"
          type="password"
          placeholder="Password"
        />

        <div className="forgot-row">
          <Link className="signup-link" href="/login">
            Already have an account? Sign in
          </Link>
        </div>

        <button className="btn">Sign up</button>

        <div className="social-login">
          <button className="social-btn">
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