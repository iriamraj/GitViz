import CardContainer from "../../../common/CardContainer";
import CardHeading from "../../../common/CardHeading";

export default function CoreStats() {
	return (
		<CardContainer className="w-118.5 gap-2.5 h-28.25 p-3.5">
			<CardHeading>Core Stats</CardHeading>
			<div className="flex overflow-clip items-center self-stretch flex-1 justify-between">
				<div className="flex overflow-clip flex-col items-center gap-2.5 self-stretch">
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
						16k
					</div>
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-xs/4">
						Total Stars
					</div>
				</div>
				<div className="flex overflow-clip flex-col items-center gap-2.5 self-stretch">
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
						328
					</div>
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-xs/4">
						Total Repos
					</div>
				</div>
				<div className="flex overflow-clip flex-col items-center gap-2.5 self-stretch">
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
						50
					</div>
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-xs/4">
						Total Forks
					</div>
				</div>
				<div className="flex overflow-clip flex-col items-center gap-2.5 self-stretch">
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
						20k
					</div>
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-xs/4">
						Total Commits
					</div>
				</div>
				<div className="flex overflow-clip flex-col items-center gap-2.5 self-stretch">
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] font-medium text-[#47484B] text-xl/6">
						08
					</div>
					<div className="content-center w-fit font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-xs/4">
						Pinned Repos
					</div>
				</div>
			</div>
		</CardContainer>
	);
}
