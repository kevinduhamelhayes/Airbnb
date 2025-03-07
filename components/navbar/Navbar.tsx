"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo - Use SVG for small screens, Image for larger screens */}
          <div className="md:hidden">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <div className="hidden md:block">
            <Image 
              src="/svgs/airbnb-1.svg" 
              width={30} 
              height={30} 
              alt="Airbnb Logo" 
              className="rounded-none"
            />
          </div>
          <span className="font-bold text-lg md:text-2xl text-primary">Airbnb Clone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/listings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Listings
          </Link>
          <Link
            href="/host"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Become a Host
          </Link>
          <Link
            href="#preguntas"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Button asChild variant="default" className="bg-red-500 hover:bg-red-600 text-white">
            <a href="https://api.whatsapp.com/send/?phone=%2B543415883040">
              Contact Us
            </a>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t animate-slide-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link 
              href="/listings" 
              className="text-sm font-medium transition-colors hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </Link>
            <Link 
              href="/host" 
              className="text-sm font-medium transition-colors hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Host
            </Link>
            <Link 
              href="#preguntas" 
              className="text-sm font-medium transition-colors hover:text-primary py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button asChild variant="default" className="bg-red-500 hover:bg-red-600 text-white w-full">
              <a href="https://api.whatsapp.com/send/?phone=%2B543415883040">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}



