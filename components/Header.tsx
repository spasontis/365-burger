"use client";
import { Utensils } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="flex justify-between px-4 min-h-[68px] border-b border-gray-500 bg-black fixed top-0 left-0 w-full z-50">
        <button
          className="flex items-center"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/365-logo.webp"
            alt="365 Burger Logo"
            width={220}
            height={220}
            sizes="46px"
            className="h-10 w-auto"
          />
        </button>

        <button className="flex items-center gap-2" onClick={toggleMenu}>
          <h1 className="font-semibold ">MENU</h1>
          <Utensils width={32} height={32} />
        </button>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sliding Menu Drawer */}
      <div
        className={`fixed top-[68px] bottom-0 right-0 w-full md:w-[600px] bg-black z-40 transition-transform duration-300 ease-in-out transform md:shadow-2xl md:border-l md:border-gray-100 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full gap-8 text-white mt-16">
          <button
            onClick={() => scrollToSection("breakfast")}
            className="text-2xl font-bold hover:text-gray-500 transition-colors"
          >
            BREAKFAST
          </button>
          <button
            onClick={() => scrollToSection("starters")}
            className="text-2xl font-bold hover:text-gray-500 transition-colors"
          >
            STARTERS
          </button>
          <button
            onClick={() => scrollToSection("special-burgers")}
            className="text-2xl font-bold hover:text-gray-500 transition-colors"
          >
            SPECIAL BURGERS
          </button>
          <button
            onClick={() => scrollToSection("smash-burgers")}
            className="text-2xl font-bold hover:text-gray-500 transition-colors"
          >
            SMASH BURGERS
          </button>
          <button
            onClick={() => scrollToSection("sides")}
            className="text-2xl font-bold hover:text-gray-500 transition-colors"
          >
            SIDES
          </button>
          <button
            onClick={() => scrollToSection("desserts")}
            className="text-2xl font-bold hover:text-gray-500 transition-colors"
          >
            DESERTS BY NAMIEE
          </button>
        </div>
      </div>
    </>
  );
};
