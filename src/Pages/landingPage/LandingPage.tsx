// Components
import Header from "./components/header/Header";
import SectionAbout from "./components/sections/about/SectionAbout";
import SectionHero from "./components/sections/hero/SectionHero";

export default function LandingPage() {
	return (
		<main className="bg-(--colorBase) min-h-screen max-w-384 m-auto">
			<Header />
			<SectionHero />
			<SectionAbout />
		</main>
	);
}
