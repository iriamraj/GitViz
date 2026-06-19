import { useState } from "react";
import darkModeIcon from "../../../../assets/icons/darkMode-icon.svg";
import lightModeIcon from "../../../../assets/icons/lightMode-icon.svg";
import useThemeStore from "../../store/ThemeStore";
import { useShallow } from "zustand/shallow";

import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [navActive, setNavActive] = useState("HERO");

  const { isDark, switchTheme } = useThemeStore(
    useShallow((state) => ({
      isDark: state.isDark,
      switchTheme: state.switchTheme,
    })),
  );

  function handleActiveNav(name: string) {
    setNavActive(name);
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`4 fixed z-1 flex w-full max-w-384 items-center justify-between px-6 py-4 md:px-12 md:py-6 ${isDark ? "bg-black" : "bg-(--colorBase)"} transition-colors duration-300`}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span
          className={`font-geist text-3xl ${isDark ? "text-(--colorPurpleDark)" : "text-(--colorPurple)"} transition-colors duration-300`}
        >
          Git
        </span>
        <span className="font-inter text-2xl font-bold text-(--colorAsh)">
          viz
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`relative text-2xl font-black md:hidden ${isDark && "text-(--colorCardDark)"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </motion.div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${isMenuOpen ? "absolute top-full left-0 flex h-screen w-screen flex-col items-center justify-center gap-10 rounded-2xl bg-black/80 px-6 py-3 [&>a]:text-[16px]" : "hidden"} font-inter items-center gap-10 text-[12px] md:flex [&>a]:tracking-widest [&>a]:transition-colors [&>a]:duration-300 ${isDark ? "text-(--colorTextDark)" : "text-(--colorTextDark) md:text-black"}`}
      >
        <a
          href="#Hero"
          onClick={() => handleActiveNav("HERO")}
          className={`${navActive === "HERO" && "rounded-full px-8 py-2 font-medium text-(--colorAsh)"} ${navActive === "HERO" && (isDark ? "bg-(--colorPurpleLight)" : "bg-(--colorPurple)/90")}`}
        >
          HERO
        </a>
        <a
          href="#About"
          onClick={() => handleActiveNav("ABOUT")}
          className={`${navActive === "ABOUT" && "rounded-full px-8 py-2 font-medium text-(--colorAsh)"} ${navActive === "ABOUT" && (isDark ? "bg-(--colorPurpleLight)" : "bg-(--colorPurple)/90")}`}
        >
          ABOUT
        </a>
        <a
          href="#Usage"
          onClick={() => handleActiveNav("USAGE")}
          className={`${navActive === "USAGE" ? "rounded-full px-8 py-2 font-medium text-(--colorAsh)" : ""} ${navActive === "USAGE" ? (isDark ? "bg-(--colorPurpleLight)" : "bg-(--colorPurple)/90") : ""}`}
        >
          USAGE
        </a>
        <a
          href="#Footer"
          onClick={() => handleActiveNav("CONTACT")}
          className={`${navActive === "CONTACT" && "rounded-full px-8 py-2 font-medium text-(--colorAsh)"} ${navActive === "CONTACT" && (isDark ? "bg-(--colorPurpleLight)" : "bg-(--colorPurple)/90")}`}
        >
          CONTACT
        </a>
        <button
          className={`flex h-9 w-23 cursor-pointer items-center justify-between rounded-full border-3 px-2 py-0.5 font-medium ${isDark ? "border-(--colorPurpleDark)" : "border-(--colorPurple)"} transition-colors duration-300`}
          onClick={() => switchTheme()}
        >
          {isDark ? <LightMode /> : <DarkMode />}
        </button>
      </motion.nav>
    </header>
  );
}

function DarkMode() {
  return (
    <>
      <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-(--colorPurple) p-1">
        <img
          src={darkModeIcon}
          alt="dark"
          className="rounded-full"
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <p className="">DARK</p>
    </>
  );
}

function LightMode() {
  return (
    <>
      <p className="text-(--colorTextDark)">LIGHT</p>
      <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-(--colorPurpleDark) p-1">
        <img
          src={lightModeIcon}
          alt="light"
          className="rounded-full"
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </>
  );
}
