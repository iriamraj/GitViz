import Achievements from "./cards/Achievements";
import Contribution from "./cards/Contribution";
import ContributionStrike from "./cards/ContributionStrike";
import Issues from "../../common/Issues";
import Organization from "./cards/Organization";
import PullRequest from "./cards/PullRequest";
import RecentActivity from "./cards/RecentActivity";
import Stats from "./cards/Stats";
import TopLanguage from "./cards/TopLanguage";
import UserProfile from "./cards/UserProfile";
import RoutesHeading from "../../common/RoutesHeading";

export default function Dashboard() {
	return (
		<div className="px-4 sm:px-8 py-6 flex flex-col gap-5 min-w-0">
			<RoutesHeading>Dashboard</RoutesHeading>
			
			<div className="flex flex-col lg:flex-row items-center w-full h-full lg:items-start gap-3.5">
				<UserProfile />
				<div className="flex flex-col gap-4 w-full min-w-0">
					<Stats />
					<div className="flex flex-col xl:flex-row items w-full gap-4">
						<TopLanguage />
						<div className="h-full flex flex-col gap-4 w-full xl:w-auto">
							<Contribution />
							<ContributionStrike />
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-4 flex-1 w-full min-w-0">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-1 min-w-0">
					<PullRequest />
					<Issues />
					<Achievements />
					<Organization />
				</div>
				<RecentActivity />
			</div>
		</div>
	);
}
