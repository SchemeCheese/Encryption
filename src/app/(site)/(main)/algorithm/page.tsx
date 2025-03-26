import Dashboard from "@/components/Home/Cook";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Featurs | Crypgo",
};

export default function Algorithm() {
  return (
    <>
      <Dashboard />
    </>
  );
}
