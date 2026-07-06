import Card from "./Card";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import SmallCard from "./SmallCard";

export default function UserProfile() {
	return (
		<Card className="max-w-[288px] flex flex-col gap-6">
			<div className="text-center flex flex-col items-center gap-4">
				<div className="w-24 h-24 border rounded-full"></div>
				<div>
					<h3 className="text-2xl font-medium line-clamp-2">Jamat Ali Mallick</h3>
					<p className="text-[14px] text-(--colorPurple) font-medium line-clamp-1">
						@iriamraj
					</p>
				</div>
				<p className="text-[14px] text-(--colorTextLight) leading-5 line-clamp-4">
					Full-stack engineer & open-source enthusiast. Building delightful developer
					tools and shipping fast on the edge.
				</p>
			</div>

			<div className="text-[14px] flex flex-col gap-3">
				<SmallCard className="gap-3">
					<div className="w-8 h-8 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0">
						<MdOutlineMail className="w-4 h-4" />
					</div>
					<p className="truncate">ir.iamraj@gmail.com</p>
				</SmallCard>

				<SmallCard className="gap-3">
					<div className="w-8 h-8 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0">
						<FaXTwitter className="w-4 h-4" />
					</div>
					<p className="truncate">@raj_mallick</p>
				</SmallCard>
			</div>

			<div className="w-full flex flex-col gap-3 items-center">
				<SmallCard className="w-fit justify-evenly gap-3">
					<div className="flex flex-col items-center justify-center">
						<p className="text-[20px] font-medium">2.4k</p>
						<p className="text-[12px]">Followers</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<p className="text-[20px] font-medium">2.4k</p>
						<p className="text-[12px]">Followers</p>
					</div>
				</SmallCard>

				<button className="w-full bg-(--colorPurple) rounded-full py-2.5 text-white cursor-pointer">
					View More
				</button>
			</div>
		</Card>
	);
}
