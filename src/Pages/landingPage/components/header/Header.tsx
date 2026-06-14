import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<header className="w-full bg-(--colorBase) px-6 py-4 flex items-center justify-between fixed md:px-12 md:py-6 z-1">
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
				className={`${isMenuOpen ? "flex flex-col absolute top-full left-0 px-6 py-3 rounded-2xl w-screen h-screen bg-black/80 items-center justify-center text-white [&>a]:text-[16px] gap-10" : "hidden"} md:flex items-center gap-10 text-[12px] [&>a]:tracking-widest`}
			>
				<a href="#" className="bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)">
					HERO
				</a>
				<a href="#">ABOUT</a>
				<a href="#">SERVICES</a>
				<a href="#">CONTACT</a>
			</nav>
		</header>
	);
}
