// Components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SectionAbout from "./components/sections/about/SectionAbout";
import SectionCTA from "./components/sections/cta/SectionCTA";
import SectionHero from "./components/sections/hero/SectionHero";
import SectionUsage from "./components/sections/usage/SectionUsage";
import useThemeStore from "./store/ThemeStore";

export default function LandingPage() {
	const isDark = useThemeStore((state) => state.isDark);
	return (
		<main
			className={`min-h-screen max-w-384 m-auto ${isDark ? "bg-(--colorBaseDark)" : "bg-(--colorBase)"} transition-colors duration-300`}
		>
			<Header />
			<SectionHero />
			<SectionAbout />
			<SectionUsage />
			<SectionCTA />
			<Footer />
		</main>
	);
}
