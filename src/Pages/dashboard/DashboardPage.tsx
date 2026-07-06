import Sidebar from "./components/sidebar/Sidebar";

export default function DashboardPage() {
	return (
		<div className="bg-(--colorBackground) w-full h-screen font-poppins flex flex-col sm:flex-row">
			<Sidebar />
		</div>
	);
}
