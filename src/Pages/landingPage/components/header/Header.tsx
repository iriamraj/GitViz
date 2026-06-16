import { useState } from "react";
import darkModeIcon from "../../../../assets/icons/darkMode-icon.svg";
import lightModeIcon from "../../../../assets/icons/lightMode-icon.svg";
import useThemeStore from "../../store/ThemeStore";
import { useShallow } from "zustand/shallow";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [navActive, setNavActive] = useState("HERO");

	const { isDark, switchTheme } = useThemeStore(
		useShallow((state) => ({ isDark: state.isDark, switchTheme: state.switchTheme })),
	);

	function handleActiveNav(name: string) {
		setNavActive(name);
		setIsMenuOpen(false);
	}

	return (
		<header
			className={`w-full  px-6 py-4 flex items-center justify-between fixed md:px-12 md:py-6 z-1 4 ${isDark ? "bg-black" : "bg-(--colorBase)"} transition-colors duration-300`}
		>
			<h2>
				<span className="font-geist text-(--colorPurple) text-3xl">Git</span>
				<span className="font-inter font-bold text-2xl text-(--colorAsh)">viz</span>
			</h2>
			<div
				className="text-2xl font-black md:hidden relative"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				☰
			</div>
			<nav
				className={`${isMenuOpen ? "flex flex-col absolute top-full left-0 px-6 py-3 rounded-2xl w-screen h-screen bg-black/80 items-center justify-center [&>a]:text-[16px] gap-10" : "hidden"} md:flex items-center gap-10 text-[12px] [&>a]:tracking-widest ${isDark ? "text-(--colorTextDark)" : "text-Black"}`}
			>
				<a
					href="#Hero"
					onClick={() => handleActiveNav("HERO")}
					className={`${navActive === "HERO" && "bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)"} transition-colors duration-300`}
				>
					HERO
				</a>
				<a
					href="#About"
					onClick={() => handleActiveNav("ABOUT")}
					className={`${navActive === "ABOUT" && "bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)"} transition-colors duration-300`}
				>
					ABOUT
				</a>
				<a
					href="#Usage"
					onClick={() => handleActiveNav("USAGE")}
					className={`${navActive === "USAGE" && "bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)"} transition-colors duration-300`}
				>
					USAGE
				</a>
				<a
					href="#Contact"
					onClick={() => handleActiveNav("CONTACT")}
					className={`${navActive === "CONTACT" && "bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)"} transition-colors duration-300`}
				>
					CONTACT
				</a>
				<button
					className="w-23 h-9 border-3 border-(--colorPurple) rounded-full flex items-center justify-between py-0.5 px-2 cursor-pointer"
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
			<p className="">DARK</p>
			<div className="w-6.5 h-6.5 bg-(--colorPurple) rounded-full flex items-center justify-center p-1">
				<img src={darkModeIcon} alt="" className="rounded-full" />
			</div>
		</>
	);
}

function LightMode() {
	return (
		<>
			<div className="w-6.5 h-6.5 bg-(--colorPurple) rounded-full flex items-center justify-center p-1">
				<img src={lightModeIcon} alt="" className="rounded-full" />
			</div>
			<p className="text-(--colorTextDark)">LIGHT</p>
		</>
	);
}
