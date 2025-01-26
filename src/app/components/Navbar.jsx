"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./common/LanguageSwicher";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "../Data/companyInfo";
const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // check if the user scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 w-full sticky top-0 transition-all duration-300 ${
        pathname === "/" || pathname === ""
          ? isScrolled
            ? "bg-colors-sections-background  " // When scrolled on homepage*9
            : "bg-transparent"
          : "bg-colors-sections-background"
      }`}
    >
      <nav
        className={`md:w-[80%] w-[95%] m-auto  flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          pathname === "/" || pathname === ""
            ? isScrolled
              ? "bg-colors-sections-background" // Navbar when scrolled
              : "bg-transparent"
            : "bg-colors-sections-background"
        }`}
      >
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center me-2 space-x-2 rtl:space-x-reverse w-24 h-24 rounded-full">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={500}
              height={300}
              className="filter brightness-75 w-full" // Image color adjustment
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 rtl:space-x-reverse text-text-color">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                text-lg hover:mai-color hover:font-bold
                  ${
                    pathname !== "/" && pathname !== "" //if the page not the home
                      ? pathname === link.href
                        ? "text-colors-background-color font-bold border-b-2 border-colors-background-color"
                        : "text-main-color hover:border-b-2 border-colors-background-color"
                      : isScrolled
                      ? pathname === link.href
                        ? "text-colors-background-color font-bold border-b-2 border-main-color"
                        : "text-mai-color "
                      : pathname === link.href
                      ? "text-white font-bold border-b-2 border-colors-background-color"
                      : "text-white "
                  },
               `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        {/* <div className="hidden md:block">
          <LanguageSwitcher />
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="block md:hidden  border-colors-background-color  text-colors-background-color hover:text-main-color focus:outline-none
          hover:scale-150
          "
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="animate__animated animate__backInDown absolute top-24 z-10 left-0 w-full bg-colors-background-color shadow-lg md:hidden">
            <ul className="flex flex-col  space-y-4 py-4 px-6">
              {links.map((link) => (
                <li
                  key={link.href}
                  className="transition-colors duration-300 hover:bg-white hover:text-main-color p-2 rounded-md "
                >
                  <Link
                    href={link.href}
                    className={`block ${
                      pathname === link.href
                        ? "text-main-color font-bold border-b-2 border-main-color"
                        : "hover:text-main-color"
                    }`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* <li>
                <LanguageSwitcher />
              </li> */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
