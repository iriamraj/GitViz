import type { CardContainerType } from "../../types/CardContainerType";

export default function CardContainer({ className, children }: CardContainerType) {
	return (
		<div
			className={`flex overflow-clip rounded-[22px] items-start flex-col [box-shadow:#0000002B_0px_5px_15px] bg-[#DBE9EA] border-2 border-solid border-[#FFFFFF] ${className || ""}`}
		>
			{children}
		</div>
	);
}
