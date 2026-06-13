import { createPortal } from "react-dom";

export default function NavbarMobile({ isMenuOpen }: { isMenuOpen: boolean }) {
	const navbar = document.getElementById("navbar");
	if (!navbar) return null;
	return createPortal(
		<nav
			className={`${isMenuOpen ? "flex flex-col absolute top-0 px-6 py-3 rounded-2xl w-screen h-screen bg-black/80 items-center justify-center text-white [&>a]:text-[16px] gap-10" : "hidden"}`}
		>
			<a href="#" className="bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)">
				HERO
			</a>
			<a href="#">ABOUT</a>
			<a href="#">SERVICES</a>
			<a href="#">CONTACT</a>
		</nav>,
		navbar,
	);
}
