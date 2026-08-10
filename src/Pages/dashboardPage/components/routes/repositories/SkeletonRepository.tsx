import Card from "../../Card";

const skeletonData = Array.from({ length: 10 }).fill("_");

export default function SkeletonRepository() {
	return (
		<div className="w-full h-full flex flex-wrap gap-4 content-start p-4">
			{skeletonData.map((_, i) => (
				<Card key={i} className="w-71 h-36 p-4 flex flex-col justify-between">
					<div className="w-full h-5 bg-gray-200 rounded-full animate-pulse"></div>
					<div className="animate-pulse">
						<div className="w-30 h-4 bg-gray-300 rounded-full"></div>
						<div className="w-30 h-4 bg-gray-300 rounded-full mt-2"></div>
					</div>
				</Card>
			))}
		</div>
	);
}
