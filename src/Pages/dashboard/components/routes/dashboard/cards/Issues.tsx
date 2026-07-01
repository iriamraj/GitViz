import LineChart from "../../../charts/LineChart";
import CardContainer from "../../../common/CardContainer";
import CardHeading from "../../../common/CardHeading";

export default function Issues() {
	return (
		<CardContainer className="w-131 gap-2.5 p-3.5">
			<CardHeading>
				Issues
				<div className="flex overflow-clip items-center gap-0.75 justify-center px-1.25 py-0.75 rounded-[5px] bg-[#CBDCDC]">
					<div className="content-center font-['Poppins',system-ui,sans-serif] text-[#585A5E] text-[10px]/3">
						Last Year
					</div>
					<div className="w-1.25 h-1.25 rounded-full shrink-0 bg-black" />
				</div>
			</CardHeading>
			<div className="flex flex-col justify-between gap-2 md:h-21 md:flex-row md:gap-0 w-full">
				<div className="md:w-[80%]">
					<LineChart
						lines={[
							{
								label: "Monthly",
								color: "#6f60b5",
								data: [1200, 2400, 5000, 500, 2800, 10000],
							},
						]}
						XAxisLabel={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
					/>
				</div>
				<div className="h-0.5 w-full bg-gray-400 md:h-full md:w-px"></div>
				<div className="flex h-full justify-center gap-5 text-center md:w-20 md:flex-col md:gap-0">
					<div>
						<p className="text-[20px] font-medium">42</p>
						<p className="text-[12px]">PRs opened</p>
					</div>
					<div>
						<p className="text-[20px] font-medium">42</p>
						<p className="text-[12px]">PRs opened</p>
					</div>
				</div>
			</div>
		</CardContainer>
	);
}
