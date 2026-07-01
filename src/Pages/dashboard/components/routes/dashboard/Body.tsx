import Achievements from "./cards/Achievements";
import Activities from "./cards/Activities";
import Contribution from "./cards/Contribution";
import CoreStats from "./cards/CoreStats";
import Gists from "./cards/Gists";
import Issues from "./cards/Issues";
import Language from "./cards/Language";
import Organization from "./cards/Organization";
import Profile from "./cards/Profile";
import PullRequest from "./cards/PullRequest";

export default function Body() {
	return (
		<div className="flex items-start gap-5 flex-col relative w-fit h-fit">
			{/* <div className="w-92.5 h-107.25 absolute left-[120.2px] -top-67.75 rounded-full filter-[blur(100px)] bg-[#FFAE421F]" /> */}
			{/* <div className="w-92.5 h-107.25 absolute left-[554.2px] top-92.5 rounded-full filter-[blur(100px)] bg-[#89B1B7]" /> */}
			<div className="flex items-center gap-5">
				<Profile />
				<div className="flex flex-col items-start gap-5 flex-1 self-stretch">
					<div className="flex items-center gap-5 self-stretch">
						<CoreStats />
						<Contribution />
					</div>
					<div className="flex items-start gap-5 self-stretch">
						<Organization />
						<Gists />
						<Organization />
					</div>
					<div className="flex items-start gap-5 self-stretch flex-1">
						<Language />
						<Activities />
					</div>
				</div>
			</div>
			<div className="flex items-center self-stretch flex-1 gap-5 pb-8">
				<Achievements />
				<PullRequest />
				<Issues />
			</div>
		</div>
	);
}
