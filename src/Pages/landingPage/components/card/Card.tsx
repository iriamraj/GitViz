import type { CardType } from "../../types/CardType";

export default function Card({ borderRadius, width, height, children }: CardType) {
	return (
		<div
			className={`bg-(--colorBox) border border-(--colorBorder) shadow-[0_4px_3px_1px_#00000030] overflow-hidden`}
			style={{
				borderRadius: borderRadius,
				width: width,
				height: height,
			}}
		>
			{children}
		</div>
	);
}
