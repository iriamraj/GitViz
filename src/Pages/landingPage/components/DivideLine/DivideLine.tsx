import type { DivideLineMarginType } from "../../types/DivideLineMarginType";

export default function SectionDivideLine({ marginTop, marginBottom }: DivideLineMarginType) {
	return (
		<div
			className="w-[80%] h-0.5 bg-linear-to-r from-#00000000 via-(--colorAsh) to-#00000000 mt-20"
			style={{
				marginTop,
				marginBottom,
			}}
		></div>
	);
}
