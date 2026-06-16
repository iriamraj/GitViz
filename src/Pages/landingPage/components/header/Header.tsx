import { useState } from "react";
import darkModeIcon from "../../../../assets/icons/darkMode-icon.svg";
import lightModeIcon from "../../../../assets/icons/lightMode-icon.svg";
import useThemeStore from "../../store/ThemeStore";
import { useShallow } from "zustand/shallow";

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
      <h2>
        <span className="font-geist text-3xl text-(--colorPurple)">Git</span>
        <span className="font-inter text-2xl font-bold text-(--colorAsh)">
          viz
        </span>
      </h2>
      <div
        className={`relative text-2xl font-black md:hidden ${isDark && "text-(--colorCardDark)"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>
      <nav
        className={`${isMenuOpen ? "absolute top-full left-0 flex h-screen w-screen flex-col items-center justify-center gap-10 rounded-2xl bg-black/80 px-6 py-3 [&>a]:text-[16px]" : "hidden"} items-center gap-10 text-[12px] md:flex [&>a]:tracking-widest ${isDark ? "text-(--colorTextDark)" : "md:text-Black"}`}
      >
        <a
          href="#Hero"
          onClick={() => handleActiveNav("HERO")}
          className={`${navActive === "HERO" && "rounded-full bg-(--colorPurple) px-8 py-2 text-(--colorAsh)"} transition-colors duration-300`}
        >
          HERO
        </a>
        <a
          href="#About"
          onClick={() => handleActiveNav("ABOUT")}
          className={`${navActive === "ABOUT" && "rounded-full bg-(--colorPurple) px-8 py-2 text-(--colorAsh)"} transition-colors duration-300`}
        >
          ABOUT
        </a>
        <a
          href="#Usage"
          onClick={() => handleActiveNav("USAGE")}
          className={`${navActive === "USAGE" && "rounded-full bg-(--colorPurple) px-8 py-2 text-(--colorAsh)"} transition-colors duration-300`}
        >
          USAGE
        </a>
        <a
          href="#Contact"
          onClick={() => handleActiveNav("CONTACT")}
          className={`${navActive === "CONTACT" && "rounded-full bg-(--colorPurple) px-8 py-2 text-(--colorAsh)"} transition-colors duration-300`}
        >
          CONTACT
        </a>
        <button
          className="flex h-9 w-23 cursor-pointer items-center justify-between rounded-full border-3 border-(--colorPurple) px-2 py-0.5"
          onClick={() => switchTheme()}
        >
          {isDark ? <LightMode /> : <DarkMode />}
        </button>
      </nav>
    </header>
  );
}

function DarkMode() {
  return (
    <>
      <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-(--colorPurple) p-1">
        <img src={darkModeIcon} alt="" className="rounded-full" />
      </div>
      <p className="">DARK</p>
    </>
  );
}

function LightMode() {
  return (
    <>
      <p className="text-(--colorTextDark)">LIGHT</p>
      <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-(--colorPurple) p-1">
        <img src={lightModeIcon} alt="" className="rounded-full" />
      </div>
    </>
  );
}
