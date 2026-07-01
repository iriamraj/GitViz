import BarChart from "../../../charts/BarChart";
import CardContainer from "../../../common/CardContainer";
import CardHeading from "../../../common/CardHeading";

export default function Gists() {
	return (
		<CardContainer className="w-118.5 gap-0.5 h-30.75 p-3.5">
			<CardHeading>
				Gists
				<div className="flex overflow-clip items-center gap-0.75 justify-center px-1.25 py-0.75 rounded-[5px] bg-[#CBDCDC]">
					<div className="content-center font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-[10px]/3">
						Last Year
					</div>
					<div className="w-1.25 h-1.25 rounded-full shrink-0 bg-black" />
				</div>
			</CardHeading>
			<div className="flex w-full flex-col items-center gap-0.5 md:flex-row md:gap-2">
				<div className="h-20 w-full md:w-[80%]">
					<BarChart
						bars={[
							{
								label: "Monthly",
								color: "#DDD55A",
								borderRadius: false,
								data: [1200, 1900, 3000, 500, 2400, 3500],
							},
							{
								label: "Year",
								color: "#6f60b5",
								borderRadius: true,
								data: [2500, 1300, 3600, 800, 1200, 2500],
							},
						]}
						XAxisLabel={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
					/>
				</div>
				<div className="h-full w-px bg-gray-400"></div>
				<div className="flex h-full gap-5 text-center md:w-20 md:flex-col md:gap-0">
					<div className="text-[10px]">
						<p className="text-[16px] font-medium">42</p>
						<p>PRs opened</p>
					</div>
					<div className="text-[10px]">
						<p className="text-[16px] font-medium">42</p>
						<p>PRs opened</p>
					</div>
				</div>
			</div>
		</CardContainer>
	);
}
