"use client";
import { NavLink } from "./NavLink";
import { Button } from "../Buttons/Button";
import { FC, useEffect, useRef, useState } from "react";
import { NavItem } from "./NavItem";
import { Toggler } from "./Toggler";
import clsx from "clsx";
import { motion } from "framer-motion";
import { scrollIntoView } from "@/helpers/ScrollIntoView";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

interface Props {}

const Navbar: FC<Props> = () => {
  const t = useTranslations("nav");
  const navRef = useRef<HTMLElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (!navRef.current) {
        return;
      }
      // const navHeight = navRef.current.offsetHeight;
      // if (window.pageYOffset > navHeight) {
      // 	navRef.current.classList.add('bg-white', 'shadow-sm');
      // } else {
      // 	navRef.current.classList.remove('bg-white', 'shadow-sm');
      // }
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full transition py-3 bg-white shadow-sm"
    >
      <motion.div
        className="section-container flex items-center justify-between gap-3"
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* <Logo /> */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0"
        />
        <ul
          className={clsx(
            "absolute left-0 right-0 flex flex-col items-center w-full text-black top-[var(--nav-height)] h-nav bg-white shadow-md",
            "lg:static lg:flex-row lg:w-auto lg:h-auto lg:shadow-none lg:bg-transparent",
            {
              "opacity-0 invisible pointer-events-none lg:opacity-100 lg:visible lg:pointer-events-auto":
                !showMenu,
            },
            {
              "opacity-100 visible pointer-events-auto": showMenu,
            }
          )}
        >
          <NavItem showMenu={showMenu}>
            <NavLink
              to="about"
              activeClassName="text-primary font-bold"
              onNavigate={() => setShowMenu(false)}
            >
              {t("about")}
            </NavLink>
          </NavItem>
          <NavItem showMenu={showMenu} className="delay-100">
            <NavLink
              to="experience"
              activeClassName="text-primary font-bold"
              onNavigate={() => setShowMenu(false)}
            >
              {t("experience")}
            </NavLink>
          </NavItem>
          <NavItem showMenu={showMenu} className="delay-150">
            <NavLink
              to="skills"
              activeClassName="text-primary font-bold"
              onNavigate={() => setShowMenu(false)}
            >
              {t("skills")}
            </NavLink>
          </NavItem>
          <NavItem showMenu={showMenu} className="delay-75">
            <NavLink
              to="projects"
              activeClassName="text-primary font-bold"
              onNavigate={() => setShowMenu(false)}
            >
              {t("projects")}
            </NavLink>
          </NavItem>
          <NavItem showMenu={showMenu} className="delay-200">
            <Button
              onClick={() => {
                scrollIntoView("contact");
                setShowMenu(false);
              }}
              className="hover:bg-primary hover:text-white transition"
            >
              {t("contact")}
            </Button>
          </NavItem>
        </ul>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />
          <Toggler
            showMenu={showMenu}
            setShowMenu={() => setShowMenu(!showMenu)}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
