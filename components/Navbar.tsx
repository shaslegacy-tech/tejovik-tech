"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import BrandIcon from "@/icons/BrandIcon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BrandIcon className="h-10 w-10" />
          <img src="/logo1.svg" alt="TejoVik" className="h-12 w-auto logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="ml-auto hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`nav-link text-sm font-semibold ${
                pathname === n.href
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f]"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <ThemeToggle className="theme-toggle" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <nav className="container py-2 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`nav-link py-2 ${
                  pathname === n.href
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f]"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <ThemeToggle className="theme-toggle" />
          </nav>
        </div>
      )}
    </header>
  );
}
