import Contribution from "./cards/Contribution";
import Stats from "./cards/Stats";
import TopLanguage from "./cards/TopLanguage";
import UserProfile from "./cards/UserProfile";

export default function Dashboard() {
	return (
		<div className="px-8 py-6 flex flex-col gap-5">
			<h2 className="text-2xl font-medium">Dashboard</h2>

			<div className="flex flex-col md:flex-row items-center w-full h-full md:items-start gap-3.5">
				<UserProfile />
				<div className="flex flex-col gap-4">
					<Stats />
					<div className="flex flex-col md:flex-row items w-full gap-4">
						<TopLanguage />
						<Contribution />
					</div>
				</div>
			</div>
		</div>
	);
}
