import type { CardTypes } from "../../../../types/CardTypes";

export default function Card({ className, children }: CardTypes) {
	return (
		<div
			className={`shadow-[0_1px_3px_0_#00000030] rounded-3xl shrink-0 ${className}`}
		>
			{children}
		</div>
	);
}
