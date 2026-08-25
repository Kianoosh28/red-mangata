"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 sm:h-28 lg:px-12 xl:px-20">
        <Logo priority className="h-14 sm:h-16" />

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-label inline-flex min-h-11 items-center border border-accent px-5 py-2.5 text-text transition-colors hover:bg-accent"
          >
            START A PROJECT
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="text-label flex min-h-11 min-w-11 items-center justify-center text-text md:hidden"
          aria-label="Open menu"
        >
          MENU
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
