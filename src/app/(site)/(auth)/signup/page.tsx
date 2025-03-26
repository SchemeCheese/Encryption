import SignUp from "@/components/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Property",
};

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-16">
      <span className="text-4xl font-bold mb-6">Sign Up</span>
      <SignUp />
    </div>
  );
};

export default SignupPage;
