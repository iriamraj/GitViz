import type { IconType } from "react-icons";
import SmallCard from "./SmallCard";

export default function HeadingCard({ Icon, children }: { Icon: IconType; children: string }) {
	return (
		<SmallCard className="w-fit flex items-center gap-3">
			<div className="iconHolder w-9 h-9 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0 transition-colors duration-300">
				<Icon className="w-5 h-5 transition-colors duration-300 text-(--colorPurple) stroke-[2.5]" />
			</div>
			<p>{children}</p>
		</SmallCard>
	);
}
