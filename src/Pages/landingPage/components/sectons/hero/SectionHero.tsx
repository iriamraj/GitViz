import DivideLine from "../../DivideLine/DivideLine";
import HeroHeading from "./components/HeroHeading";
import SearchBar from "./components/SearchBar";
import Visual from "./components/Visual";

export default function SectionHero() {
	return (
		<section className="flex flex-col justify-center items-center pt-20">
			<HeroHeading />
			<SearchBar />
			<Visual />
			<DivideLine />
		</section>
	);
}
