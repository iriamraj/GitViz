import cardImg from "../../../../../../assets/images/cardImg.png";

export default function PreviewBox() {
	return (
		<div className="flex flex-col gap-5 justify-center items-center ml-2 mt-2">
			<div className="w-[95%] h-fit max-w-101 max-h-49.5 bg-(--colorBox) rounded-2xl flex justify-center items-center">
				<img src={cardImg} alt="" className="w-[90%]" fetchPriority="low" loading="lazy" />
			</div>
			<div className="w-[95%] h-20 max-w-101.25 max-h-27.5 bg-(--colorBox) rounded-2xl"></div>
		</div>
	);
}
