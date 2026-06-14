import preview from "../../../../../../assets/images/preview.png";

export default function IOSwindow() {
	return (
		<div className="w-[95%] h-fit max-w-164.5 max-h-89.5 bg-(--colorBox) rounded-2xl">
			<div className="w-full h-7.5 bg-(--colorPurple) rounded-t-2xl flex items-center gap-2 px-4">
				<div className="bg-red-500 w-3 h-3 rounded-full"></div>
				<div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
				<div className="bg-green-500 w-3 h-3 rounded-full"></div>
			</div>
			<div className="flex items-center justify-center px-1 pb-1 md:px-2 md:pb-2">
				<img
					src={preview}
					alt=""
					className="rounded-b-2xl"
					fetchPriority="low"
					loading="lazy"
				/>
			</div>
		</div>
	);
}
