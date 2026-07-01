import type { ReactNode } from "react";

export default function CardHeading({ children }: { children?: ReactNode }) {
	return (
		<div className="flex w-full items-start">
			<div className="w-full font-['Poppins',system-ui,sans-serif] font-medium text-[#2C2D30] text-xl/6 flex justify-between">
				{children}
			</div>
		</div>
	);
}
