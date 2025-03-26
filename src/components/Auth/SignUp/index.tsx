"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import "./SignUp.scss";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const finalData = Object.fromEntries(formData.entries());

    if (finalData.password !== finalData.confirm_password) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Successfully registered");
      router.push("/signin");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
          <Logo />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="id" placeholder="Citizen ID" required />
          </div>
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <input type="password" name="confirm_password" placeholder="Confirm Password" required />
          </div>
          <div className="input-group">
            <input type="text" name="dob" placeholder="Date of Birth" required />
          </div>
          <div className="input-group">
            <input type="text" name="phone" placeholder="Phone Number" required />
          </div>
          <div className="input-group">
            <input type="text" name="address" placeholder="Address" required />
          </div>
          <div className="input-group">
            <input type="text" name="atm" placeholder="ATM" required />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Loader /> : "Sign Up"}
          </button>
        </form>

        <p className="terms">
          By creating an account you agree to our{" "}
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.
        </p>

        <p className="signin-link">
          Already have an account? <Link href="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
