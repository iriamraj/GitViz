import gitIcon from "../../../../assets/icons/git-icon.svg";
import logoutIcon from "../../../../assets/icons/logout-icon.svg";
import Nav from "./Nav";

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col items-center justify-between rounded-[10px] bg-(--colorPurple) px-3 py-3 md:w-21 md:justify-start md:py-5">
      <div className="flex w-full items-center justify-between md:w-auto">
        <div className="flex h-10 items-center gap-4 md:h-auto md:flex-col md:gap-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <img src={gitIcon} alt="" className="w-7" />
          </div>
          <div className="hidden md:block h-full w-px bg-white/40 md:mt-3 md:h-px md:w-full"></div>
        </div>

        <p className="mr-1 block cursor-pointer text-2xl font-black text-(--colorBox) md:hidden">
          ☰
        </p>
      </div>

      <div className="hidden flex-1 flex-col items-center md:flex">
        <Nav />
        <div className="mb-2 hidden h-full w-px bg-white/40 md:block md:h-px md:w-full"></div>
        <div className="mt-2 mb-2 h-6 w-6 cursor-pointer">
          <img src={logoutIcon} alt="" className="fill-white" />
        </div>
      </div>
    </aside>
  );
}
