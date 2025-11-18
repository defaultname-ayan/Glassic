"use client";
import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./Navbar";

export default function GlassicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  
  // Track page scroll
  const { scrollY } = useScroll();

  // Update visible state when scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  // Initialize scroll position on mount
  useEffect(() => {
    if (window.scrollY > 100) {
      setVisible(true);
    }
  }, []);

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Setup Agent", link: "#setup-agent" },
  ];

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody visible={visible} className="border border-purple-200/20">
        {/* Logo */}
        <a
          href="#"
          className="relative z-20 flex items-center space-x-2 px-2 py-1"
        >
          <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-2xl font-bold text-transparent">
            glassic
          </span>
        </a>

        {/* Navigation Items */}
        <NavItems
          items={navItems}
          className="text-purple-700 dark:text-purple-300"
        />

        {/* Auth Buttons */}
        <div className="relative z-20 flex items-center space-x-2">
          <NavbarButton
            href="#login"
            variant="secondary"
            className="bg-transparent text-purple-700 hover:bg-purple-50 dark:text-purple-300 dark:hover:bg-purple-950/50"
          >
            Login
          </NavbarButton>
          <NavbarButton
            href="#signup"
            className="border border-purple-300 bg-purple-600 text-white shadow-sm hover:bg-purple-700 dark:border-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
          >
            Sign Up
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav visible={visible} className="border border-purple-200/20">
        <MobileNavHeader>
          {/* Logo */}
          <a
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1"
          >
            <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-xl font-bold text-transparent">
              glassic
            </span>
          </a>

          {/* Toggle Button */}
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="border border-purple-200/20"
        >
          <div className="flex w-full flex-col space-y-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="px-4 py-2 text-lg font-medium text-purple-700 transition hover:bg-purple-50 dark:text-purple-300 dark:hover:bg-purple-950/50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 border-t border-purple-200/20 pt-4">
              <NavbarButton
                href="#login"
                variant="secondary"
                className="w-full bg-transparent text-purple-700 hover:bg-purple-50 dark:text-purple-300 dark:hover:bg-purple-950/50"
              >
                Login
              </NavbarButton>
              <NavbarButton
                href="#signup"
                className="w-full border border-purple-300 bg-purple-600 text-white hover:bg-purple-700 dark:border-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
              >
                Sign Up
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
