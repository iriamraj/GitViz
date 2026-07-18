import { LuCodeXml } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import Card from "./Card";
import HeadingCard from "./HeadingCard";

const organizationData = [
	{
		id: 1,
		name: "shark pull",
		icon: LuCodeXml,
	},
	{
		id: 2,
		name: "shark pull",
		icon: LuCodeXml,
	},
	{
		id: 3,
		name: "shark pull",
		icon: LuCodeXml,
	},
	{
		id: 4,
		name: "shark pull",
		icon: LuCodeXml,
	},
	{
		id: 5,
		name: "shark pull",
		icon: LuCodeXml,
	},
	{
		id: 6,
		name: "shark pull",
		icon: LuCodeXml,
	},
];

export default function Organization() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 w-full flex flex-col gap-4">
			<HeadingCard stroke="stroke-1" Icon={GoOrganization}>
				Organization
			</HeadingCard>
			<div className="w-full flex flex-wrap gap-4 text-[14px]">
				{organizationData.map((item) => (
					<div
						key={item.id}
						className="w-fit flex flex-col items-center text-[14px] text-(--colorTextLight)"
					>
						<div className="w-10 h-10 rounded-full border-2 border-(--colorDashBorder) shrink-0"></div>
						<p>{item.name}</p>
					</div>
				))}
			</div>
		</Card>
	);
}
