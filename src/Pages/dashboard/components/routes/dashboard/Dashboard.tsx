import Body from "./Body";
import Heading from "./Heading";

export default function Dashboard() {
	return (
		<section className="flex flex-col items-start gap-5 pt-7.5 relative px-5 overflow-y-scroll scrollbar-none w-fit h-screen">
			<Heading />
			<Body />
		</section>
	);
}
