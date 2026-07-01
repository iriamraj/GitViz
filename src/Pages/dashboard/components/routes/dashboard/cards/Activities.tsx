import CardContainer from "../../../common/CardContainer";
import CardHeading from "../../../common/CardHeading";

export default function Activities() {
	const dummyData = Array.from({ length: 10 }).fill("1");
	return (
		<CardContainer className="gap-2.5 p-3.5 w-106.5 h-full">
			<CardHeading>Resent Activities</CardHeading>
			<div className="flex h-43 w-full text-[0.7rem]">
				<div className="mt-0.5 h-44.5 w-0.5 translate-x-2 bg-green-600"></div>
				<div className="flex h-45 w-full scrollbar-thin scrollbar-thumb-(--colorPurple) flex-col gap-2 overflow-y-scroll">
					{dummyData.map(() => (
						<div className="items- flex h-fit w-full gap-4">
							<div className="h-4 w-4 shrink-0 rounded-full bg-green-600"></div>
							<p className="text-nowrap">10:45 AM</p>
							<p>Pushed 3 commits to main in portfolio-website</p>
						</div>
					))}
				</div>
			</div>
		</CardContainer>
	);
}
