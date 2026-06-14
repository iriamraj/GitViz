import type { CardUsageType } from "../../../types/CardUsageType";
import Card from "../../card/Card";
import SectionDivideLine from "../../DivideLine/DivideLine";
import Heading from "../../heading/Heading";

export default function SectionUsage() {
	return (
		<section  id="Usage" className="flex flex-col justify-center items-center px-5">
			<Heading heading="How It " headingColor="Works">
				Every commit you've ever pushed, mapped out as branching paths — just like Git
				itself thinks. Trace your project's growth, spot your most active sprints, and see
				how your work has evolved over time.
			</Heading>
			<div className="flex flex-col flex-wrap justify-center gap-[min(6vw,200px)] md:flex-row mt-5">
				<CardUsage
					id="01"
					title="Enter a Username"
					description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
				/>
				<CardUsage
					id="02"
					title="Enter a Username"
					description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
				/>
				<CardUsage
					id="03"
					title="Enter a Username"
					description="Paste any public GitHub profile URL or just a username — we'll handle the rest automatically."
				/>
			</div>
			<SectionDivideLine marginTop="80px" marginBottom="10px" />
		</section>
	);
}

function CardUsage({ id, title, description }: CardUsageType) {
	return (
		<div className="flex flex-col gap-5 w-90%">
			<div className="w-10 h-10 bg-(--colorPurple) rounded-xl rotate-45 ml-3 text-(--colorAsh) font-bold text-2xl flex items-center justify-center">
				<div className="-rotate-45">{id}</div>
			</div>
			<Card borderRadius="24px" width="355px" height="130px">
				<div className="w-full h-full p-3 flex flex-col gap-1">
					<h3 className="font-medium">{title}</h3>
					<p className="text-(--colorText)">{description}</p>
				</div>
			</Card>
		</div>
	);
}
