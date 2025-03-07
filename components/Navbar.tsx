"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/svgs/airbnb-1.svg" 
            width={60} 
            height={60} 
            alt="Airbnb Logo" 
            className="rounded-none"
          />
          <p className="font-bold hidden md:flex text-2xl ml-4 text-primary">Administradores Airbnb</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#preguntas" className="text-sm font-medium transition-colors hover:text-primary">
            Preguntas Frecuentes
          </Link>
          <Link href="#regularizaciones" className="text-sm font-medium transition-colors hover:text-primary">
            Regularizaciones
          </Link>
          <Button asChild variant="default" className="bg-red-500 hover:bg-red-600 text-white">
            <a href="https://api.whatsapp.com/send/?phone=%2B543415883040">
              Contactate con nosotros
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-primary">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link 
              href="#servicios" 
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="#preguntas" 
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Preguntas Frecuentes
            </Link>
            <Link 
              href="#regularizaciones" 
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Regularizaciones
            </Link>
            <Button asChild variant="default" className="bg-red-500 hover:bg-red-600 text-white w-full">
              <a href="https://api.whatsapp.com/send/?phone=%2B543415883040">
                Contactate con nosotros
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



