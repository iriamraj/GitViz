import DivideLine from "../../DivideLine/DivideLine";
import FloatingIcons from "../../floatingIcons/FloatingIcons";
import HeroHeading from "./components/HeroHeading";
import SearchBar from "./components/SearchBar";
import Visual from "./components/Visual";

export default function SectionHero() {
	return (
		<section id="Hero" className="flex flex-col justify-center items-center pt-20">
			<FloatingIcons/>
			<HeroHeading />
			<SearchBar />
			<Visual />
			<DivideLine marginTop="0" marginBottom="0" />
		</section>
	);
}
