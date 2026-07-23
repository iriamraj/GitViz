import type { CardTypes } from "../../../../types/CardTypes";

export default function SmallCard({ className, children }: CardTypes) {
	return (
		<div
			className={`border-2 border-(--colorDashBorder) rounded-3xl bg-(--colorPurple)/10 px-2 py-1.5 flex items-center ${className}`}
		>
			{children}
		</div>
	);
}
