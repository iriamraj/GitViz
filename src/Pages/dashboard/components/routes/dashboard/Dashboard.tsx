import UserProfile from "./cards/UserProfile";

export default function Dashboard() {
	return (
		<div className="px-8 py-6 flex flex-col gap-5">
			<h2 className="text-2xl font-medium">Dashboard</h2>

			<div>
				<UserProfile />
			</div>
		</div>
	);
}
