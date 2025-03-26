import React from "react";
import Hero from "@/components/Home/Hero";
import Cook from "@/components/Home/Cook";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kitchen",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Cook />
      <Footer />
    </main>
  );
}
