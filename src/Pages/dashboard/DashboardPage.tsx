import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <div
      id="dashboard"
      className="flex h-screen w-full flex-col gap-3 px-5 py-5 md:flex-row md:gap-6.75 md:px-10"
    >
      <Sidebar />
      <Main />
    </div>
  );
}
