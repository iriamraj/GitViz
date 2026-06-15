// Components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SectionAbout from "./components/sections/about/SectionAbout";
import SectionCTA from "./components/sections/cta/SectionCTA";
import SectionHero from "./components/sections/hero/SectionHero";
import SectionUsage from "./components/sections/usage/SectionUsage";

export default function LandingPage() {
	return (
		<main className="bg-(--colorBase) min-h-screen max-w-384 m-auto">
			<Header />
			<SectionHero />
			<SectionAbout />
			<SectionUsage />
			<SectionCTA />
			<Footer />
		</main>
	);
}
