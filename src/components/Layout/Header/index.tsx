"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${sticky ? "shadow-lg bg-white dark:bg-gray-600 py-4" : "shadow-none py-8"
        }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <Link key={index} href={item.href} className="text-lg font-medium hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-lg font-medium hover:text-primary">
              <Icon icon="solar:phone-bold" className="text-primary text-3xl inline-block me-2" />
              +1(909) 235-9814
            </Link>
            <button
              className="hidden lg:block text-primary bg-primary/15 hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full"
              onClick={() => router.push("/signin")}
            >
              Sign In
            </button>
            <button
              className="hidden lg:block bg-primary text-white hover:bg-primary/15 hover:text-primary font-medium text-lg py-4 px-8 rounded-full"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <Link key={index} href={item.href} className="text-lg font-medium hover:text-primary">
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-4 w-full">
              <button
                className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  router.push("/signin");
                  setNavbarOpen(false);
                }}
              >
                Sign In
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  router.push("/signup");
                  setNavbarOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
