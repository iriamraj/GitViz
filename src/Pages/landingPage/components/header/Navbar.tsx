export default function Navbar() {
	return (
		<nav className="flex items-center gap-10 text-[12px] [&>a]:tracking-widest">
			<a href="#" className="bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)">
				HERO
			</a>
			<a href="#">ABOUT</a>
			<a href="#">SERVICES</a>
			<a href="#">CONTACT</a>
		</nav>
	);
}
