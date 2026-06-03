export default function Header() {
	return (
		<header className="w-full bg-(--colorBase) px-12 py-6 flex items-center justify-between fixed">
			<h2>
				<span className="font-geist text-(--colorPurple) text-3xl">Git</span>
				<span className="font-inter font-bold text-2xl text-(--colorAsh)">viz</span>
			</h2>
			<nav className="flex items-center gap-10 text-[12px] [&>a]:tracking-widest">
				<a href="#" className="bg-(--colorPurple) px-8 py-2 rounded-full text-(--colorAsh)">HERO</a>
				<a href="#">ABOUT</a>
				<a href="#">SERVICES</a>
				<a href="#">CONTACT</a>
			</nav>
		</header>
	);
}
