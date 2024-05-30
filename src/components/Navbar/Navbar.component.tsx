import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import logo from "/engg4_logo.png";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  const [isNavScroll, setIsNavScroll] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navBarRef?.current) return;

    const changeNav = () => {
      const navElement = navBarRef.current
      if (navElement && window.scrollY >= navElement.clientHeight / 2) {
        setIsNavScroll(true);
      } else {
        setIsNavScroll(false);
      }
    };

    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, [navBarRef]);

  return (
    <header
      className="sticky top-0 z-50 flex flex-col items-center justify-between px-6 pb-3 pt-6 md:flex-row md:pl-8 md:pr-3"
      ref={navBarRef}
    >
      <div className="flex w-full items-center justify-between md:w-max">
        <div className="flex items-center gap-2">
          <Link to="/" aria-disabled={isNavScroll}>
            <img src={logo} alt="Engineering 4.0 Club logo" className="w-12 rounded-full lg:w-14" />
          </Link>
          <Link
            to="/"
            className={`text-nowrap font-bold tracking-wide text-onBackground md:text-lg lg:text-xl ${isNavScroll && "pointer-events-none opacity-0"
              } transition-opacity duration-300 ease-in-out`}
          >
            Engineering 4.0
            <span className="hidden lg:inline">
              <span className="mx-2 border-l-2 border-primary font-normal"></span>
              <span className="font-thin text-onBackground">UWindsor</span>
            </span>
          </Link>
        </div>
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="header-bg rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-primary hover:text-onPrimary md:hidden"
        >
          {isNavOpen ? <HiX size="1.75rem" /> : <HiOutlineMenu size="1.75rem" />}
        </button>
      </div>
      <nav
        className={`${isNavScroll && "rounded-lg bg-background-50 shadow-2xl shadow-onBackground-50 backdrop-blur-2xl"} ${isNavOpen ? "right-4 top-20" : "-right-60 top-20"
          } header-bg fixed w-full max-w-[10.5rem] self-end px-5 py-5 text-center transition-all duration-300 ease-in-out md:static md:max-w-max md:self-center`}
      >
        <ul className="flex flex-col justify-around gap-3 md:flex-row md:gap-6 ">
          <li className="transition-colors duration-300 ease-in-out hover:text-primary  my-auto">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-primary" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-primary  my-auto">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-primary" : "")} to="/events">
              Events
            </NavLink>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-primary  my-auto">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-primary" : "")} to="/buddy">
              Buddy Program
            </NavLink>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-primary  my-auto">
            <NavLink className={({ isActive }) => (isActive ? "font-bold text-primary" : "")} to="/about">
              About
            </NavLink>
          </li>
          <li className="p-2.5 md:p-0 my-auto">
            <Link to="/register">
              <Button className="text-lg px-5 py-4" variant="flat" color="primary">
                Become A Member
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
