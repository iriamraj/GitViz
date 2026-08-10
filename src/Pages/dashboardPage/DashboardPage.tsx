import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topBar/TopBar";

export default function DashboardPage() {
	return (
		<div className="w-full h-screen font-poppins flex flex-col md:flex-row bg-(--colorBackground) transition-colors duration-300">
			<Sidebar />
			<div className="w-full min-w-0 overflow-y-scroll scrollbar-none">
				<TopBar />
				<Outlet />
			</div>
		</div>
	);
}
