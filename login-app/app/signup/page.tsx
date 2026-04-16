import AuthLayout from "../components/AuthLayout";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout
      left={<SignupForm />}
      right={<div className="ad-card">Signup Ad</div>}
    />
  );
}