import Heading from "./components/Heading";
import IOSwindow from "./components/IOSwindow";
import Line from "./components/Line";
import PreviewBox from "./components/PreviewBox";

import treeImg from "../../../../../assets/images/treeImg.png";
import DivideLine from "../../DivideLine/DivideLine";

export default function SectionAbout() {
	return (
		<section className="mb-40 flex flex-col items-center px-5">
			<Heading heading="Everything in" headingColor="One Place">
				See all your GitHub stats laid out in a clean, interactive dashboard repositories,
				language breakdown, star count, and contribution activity, all at a glance. No
				digging through profile pages.
			</Heading>
			<div className="flex flex-col justify-center items-center mt-10 md:flex-row">
				<IOSwindow />
				<Line />
				<PreviewBox />
			</div>

			<Heading heading="Your Commits as a " headingColor="Living Tree">
				Every commit you've ever pushed, mapped out as branching paths — just like Git
				itself thinks. Trace your project's growth, spot your most active sprints, and see
				how your work has evolved over time.
			</Heading>
			<div className="flex flex-col md:flex-row justify-center items-center mt-5 md:mt-10 gap-5 md:gap-20">
				<IOSwindow />
				<div>
					<img src={treeImg} alt="" className="w-85 md:w-full max-w-100" />
				</div>
			</div>
			<DivideLine marginTop="80px" marginBottom="80px" />
		</section>
	);
}
