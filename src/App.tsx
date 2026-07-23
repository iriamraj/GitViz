import "@fontsource/geist/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import LandingPage from "./Pages/landingPage/LandingPage";
import SearchGate from "./Pages/dashboardPage/components/searchGate/SearchGate";

const DashboardPage = lazy(() => import("./Pages/dashboardPage/DashboardPage"));
const Dashboard = lazy(
	() => import("./Pages/dashboardPage/components/routes/dashboard/InnerDashboard"),
);
const Repository = lazy(
	() => import("./Pages/dashboardPage/components/routes/repository/Repository"),
);
const Account = lazy(
	() => import("./Pages/dashboardPage/components/routes/account/Account"),
);

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/dashboard" element={<SearchGate />} />
				<Route
					path="/dashboard/:searchTerm"
					element={
						<Suspense fallback={<div className="w-full h-screen" />}>
							<DashboardPage />
						</Suspense>
					}
				>
					<Route
						index
						element={
							<Suspense fallback={<div className="p-6">Loading…</div>}>
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path="repository"
						element={
							<Suspense fallback={<div className="p-6">Loading…</div>}>
								<Repository />
							</Suspense>
						}
					/>
					<Route
						path="account"
						element={
							<Suspense fallback={<div className="p-6">Loading…</div>}>
								<Account />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}