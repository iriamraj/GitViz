import SectionDivideLine from "../../DivideLine/DivideLine";
import FloatingIcons from "../../floatingIcons/FloatingIcons";
import HeroHeading from "./components/HeroHeading";
import SearchBar from "./components/SearchBar";
import Visual from "./components/Visual";

export default function SectionHero() {
  return (
    <section
      id="Hero"
      className="flex flex-col items-center justify-center pt-[min(20vw,108px)]"
    >
      <FloatingIcons />
      <HeroHeading />
      <SearchBar />
      <Visual />
      <SectionDivideLine marginTop="mt-0" marginBottom="mt-0" />
    </section>
  );
}
