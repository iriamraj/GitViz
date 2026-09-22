import { MdOutlineMail, MdOutlineCalendarToday } from "react-icons/md";
import { LuUserRound, LuLink, LuLogOut } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import RoutesHeading from "../../common/RoutesHeading";
import Card from "../../Card";
import SmallCard from "../dashboard/cards/SmallCard";
import CardIcon from "../../common/CardIcon";
import HeadingCard from "../dashboard/cards/HeadingCard";
import UserProfile from "../dashboard/cards/UserProfile";

const accountDetails = [
	{ id: 1, label: "Email", value: "ir.iamraj@gmail.com", Icon: MdOutlineMail },
	{ id: 2, label: "Username", value: "@iriamraj", Icon: LuUserRound },
	{ id: 3, label: "Connected", value: "GitHub · X (Twitter)", Icon: LuLink },
	{ id: 4, label: "Member since", value: "Jan 2024", Icon: MdOutlineCalendarToday },
];

export default function Account() {
	return (
		<div className="px-4 sm:px-8 py-6 flex flex-col gap-5 min-w-0">
			<RoutesHeading>Account</RoutesHeading>

			<div className="flex flex-col lg:flex-row gap-4 w-full">
				<UserProfile noViewMore={false} />

				<Card className="w-fit flex flex-col gap-4 p-4">
					<HeadingCard Icon={LuUserRound}>Account Details</HeadingCard>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{accountDetails.map(({ id, label, value, Icon }) => (
							<div
								key={id}
								className="flex items-center gap-3 rounded-2xl border border-(--colorDashBorder) p-3"
							>
								<CardIcon>
									<Icon className="w-5 h-5 text-(--colorPurple) transition-colors duration-300" />
								</CardIcon>
								<div className="min-w-0">
									<p className="text-[12px] text-(--colorTextLight)">{label}</p>
									<p className="text-[14px] font-medium text-(--colorText) truncate">
										{value}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="border-t border-(--colorDashBorder) pt-4 mt-2">
						<h4 className="text-[14px] font-medium text-(--colorText) mb-3">
							Connected Accounts
						</h4>
						<div className="flex flex-wrap gap-3">
							<SmallCard className="gap-3">
								<div className="w-8 h-8 rounded-full bg-(--colorPurple)/20 flex items-center justify-center shrink-0">
									<FaXTwitter className="w-4 h-4 text-(--colorPurple)" />
								</div>
								<p className="text-(--colorText)">@raj_mallick</p>
							</SmallCard>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
