import { AccountOutlineIcon } from "../../../../assets/icons/AccountIcon";
import DashboardIcon from "../../../../assets/icons/DashboardIcon";
import { RepositoryOutlineIcon } from "../../../../assets/icons/RepositoryIcon";

export function Nav() {
	return (
		<nav className="flex overflow-clip flex-col items-center gap-8.25 justify-center self-stretch">
			<div className="flex overflow-clip rounded-[15px] items-center h-12.5 px-5 py-3.5 gap-3.5 self-stretch shrink-0 bg-[#6F60B5]">
				<div className="flex overflow-clip items-center relative w-6.5 h-7.5">
					<DashboardIcon fillColor="white" />
				</div>
				<div className="content-center font-['Poppins',system-ui,sans-serif] text-white text-base/5">
					Dashboard
				</div>
			</div>

			<div className="flex overflow-clip rounded-[15px] items-center gap-3.5 px-5 self-stretch">
				<div className="flex overflow-clip items-center relative w-6.5 h-fit">
					<RepositoryOutlineIcon fillColor="#6f60b5" className="w-6" />
				</div>
				<div className="content-center font-['Poppins',system-ui,sans-serif] text-[#6F60B5] text-base/5">
					Repository
				</div>
			</div>
			<div className="flex overflow-clip rounded-[15px] items-center gap-3.5 px-5 self-stretch">
				<div className="flex overflow-clip items-center relative w-6.5 fit">
					<AccountOutlineIcon fillColor="#6f60b5" />
				</div>
				<div className="content-center font-['Poppins',system-ui,sans-serif] text-[#6F60B5] text-base/5">
					Account
				</div>
			</div>
		</nav>
	);
}
