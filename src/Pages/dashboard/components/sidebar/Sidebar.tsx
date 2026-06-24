import gitIcon from "../../../../assets/icons/git-icon.svg";
import logoutIcon from "../../../../assets/icons/logout-icon.svg";
import Nav from "./Nav";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-21 flex-col items-center rounded-[10px] bg-(--colorPurple) px-3 py-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <img src={gitIcon} alt="" className="w-7" />
      </div>
      <div className="mt-3 h-px w-full bg-white/40"></div>
      <Nav />
      <div className="mb-2 h-px w-full bg-white/40"></div>
      <div className="mt-2 mb-2 h-6 w-6 cursor-pointer">
        <img src={logoutIcon} alt="" className="fill-white" />
      </div>
    </aside>
  );
}
