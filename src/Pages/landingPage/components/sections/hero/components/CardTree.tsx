import Card from "../../../card/Card";

// Types
import type { TreeLineType } from "../../../../types/TreeLineType";
import type { VisualBoxType } from "../../../../types/VisualBoxType";

const CardTreeLine = ({ isFaded, width, height }: TreeLineType) => {
	return (
		<div
			className={`${isFaded ? "bg-linear-to-b from-#00000080 to-(--colorPurple)" : "bg-(--colorPurple)"} rounded-full`}
			style={{
				width: width,
				height: height,
			}}
		></div>
	);
};

const CardTreeLine2 = () => {
	return (
		<div className="relative -top-0.5">
			<CardTreeLine isFaded={false} width="900px" height="3px" />
			<div className="relative -top-0.5 flex items-center justify-between">
				<CardTreeLine isFaded={false} width="3px" height="20px" />
				<CardTreeLine isFaded={false} width="3px" height="20px" />
				<CardTreeLine isFaded={false} width="3px" height="20px" />
				<CardTreeLine isFaded={false} width="3px" height="20px" />
			</div>
		</div>
	);
};

const VisualBox = ({ name, info, infoName, info2, infoName2 }: VisualBoxType) => {
	return (
		<Card borderRadius="16px" width="239px" height="84px">
			<div className="w-full h-full px-3 py-2.5 flex flex-col justify-between">
				<div className="flex justify-between items-center">
					<h3 className="font-geist text-(--colorCard)">{name}</h3>
					<div className="border rounded-full w-10 h-5 text-[11px] text-(--colorCard)/70 font-inter font-normal flex justify-center items-center">
						View
					</div>
				</div>
				<div className="flex items-center justify-between gap-1">
					<div className="flex items-center gap-1">
						<p className="font-inter font-normal text-[24px]">{info}</p>
						<p className="font-inter font-normal text-[10px] leading-3 text-(--colorCard)/70">
							{infoName}
						</p>
					</div>
					<div className="flex items-center gap-1">
						<p className="font-inter font-normal text-[24px]">{info2}</p>
						<p className="font-inter font-normal text-[10px] leading-3 text-(--colorCard)/70">
							{infoName2}
						</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

const CardTree = () => {
	return (
		<div className="flex flex-col justify-center items-center absolute top-13 md:top-20">
			<CardTreeLine isFaded={true} width="3px" height="40px" />
			{/* First Card */}
			<VisualBox
				name="Contribution Activity"
				info="1,247"
				infoName="Total Contribution"
				info2="20%"
				infoName2="This Month"
			/>
			<CardTreeLine isFaded={false} width="3px" height="40px" />
			<div className="flex flex-col items-start w-screen overflow-scroll px-5 scrollbar-none lg:items-center">
				<div className="flex flex-col items-center py-1">
					<CardTreeLine2 />
					<div className="flex gap-[min(5vw,56px)] items-center relative -top-1">
						<VisualBox
							name="Contribution Activity"
							info="1,247"
							infoName="Total Contribution"
							info2="20%"
							infoName2="This Month"
						/>
						<VisualBox
							name="Contribution Activity"
							info="1,247"
							infoName="Total Contribution"
							info2="20%"
							infoName2="This Month"
						/>
						<VisualBox
							name="Contribution Activity"
							info="1,247"
							infoName="Total Contribution"
							info2="20%"
							infoName2="This Month"
						/>
						<VisualBox
							name="Contribution Activity"
							info="1,247"
							infoName="Total Contribution"
							info2="20%"
							infoName2="This Month"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardTree;
