import { useShallow } from "zustand/shallow";
import useThemeStore from "../store/ThemeStore";
import Routes from "./components/routes/Routes";
import Sidebar from "./components/sidebar/Sidebar";

export default function DashboardPage() {
	const { theme } = useThemeStore(useShallow(({ isDark }) => ({ theme: isDark })));
	return (
		<div
			className={`w-full h-screen font-poppins flex flex-col md:flex-row ${theme ? "bg-(--colorBaseDark)" : "bg-(--colorBackground)"} transition-colors duration-300`}
		>
			<Sidebar />
			<Routes />
		</div>
	);
}
