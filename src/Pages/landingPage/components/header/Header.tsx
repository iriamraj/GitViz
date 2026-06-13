import { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import Navbar from "./Navbar";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [screenWidth] = useState(window.innerWidth);

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
			{screenWidth < 700 ? <NavbarMobile isMenuOpen={isMenuOpen} /> : <Navbar />}
		</header>
	);
}
