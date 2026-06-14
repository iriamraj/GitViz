import Curve from "../../curve/Curve";
import Heading from "../../heading/Heading";

export default function SectionCTA() {
	return (
		<section className="flex flex-col items-center">
			<Heading heading="Ready to " headingColor="Visualize Your GitHub?">
				Visualize your GitHub. Free, open-source, and no initial pricing models or
				subscription needed.
			</Heading>
			<button className="bg-(--colorPurple) text-(--colorAsh) w-40 h-10 rounded-full mt-7">
				Try It Now
			</button>
			<div className="w-full rotate-180">
				<Curve />
				{/* <div className="w-full h-14 md:h-14 bg-linear-to-b from-(--colorAsh) to-(--colorBase)"></div> */}
			</div>
		</section>
	);
}
