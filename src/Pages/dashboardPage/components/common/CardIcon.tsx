import type { Wrapper } from "../../types/Wrapper";

export default function CardIcon({ children }: Wrapper) {
	return (
		<div
			id="iconHolder"
			className="w-10 h-10 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0 transition-colors duration-300"
		>
			{children}
		</div>
	);
}
