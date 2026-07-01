import Routes from "./components/routes/Routes";
import Sidebar from "./components/sidebar/Sidebar";

export default function () {
	return (
		<main className="flex items-center w-384 h-194.5 bg-(--coloDashBg) antialiased">
			<Sidebar />
			<Routes />
		</main>
	);
}
