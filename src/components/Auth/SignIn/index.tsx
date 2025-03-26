"use client"; // ⚠️ Quan trọng: Component này chạy ở Client

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { signIn } from "next-auth/react";
import Link from "next/link";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";
import "./SignIn.scss";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      redirect: false, // ⚠️ Quan trọng: không tự động chuyển hướng
      email,
      password,
    });

    console.log("Login result:", result); // Debug xem có lỗi gì không

    if (result?.error) {
      alert("Đăng nhập thất bại: " + result.error);
      setLoading(false);
    } else {
      router.push("/#home"); // 🏠 Chuyển hướng đến trang chính
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="logo">
          <Logo />
        </div>

        <form onSubmit={loginUser}>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Loader /> : "Sign In"}
          </button>
        </form>

        <Link href="/forgot-password" className="forgot-password">
          Forgot Password?
        </Link>
        <p className="signup-link">
          Not a member yet? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
