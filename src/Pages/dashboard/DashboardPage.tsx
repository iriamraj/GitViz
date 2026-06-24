import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <div id="dashboard" className="flex h-screen w-full gap-6.75 px-10 py-5">
      <Sidebar />
      <Main />
    </div>
  );
}
