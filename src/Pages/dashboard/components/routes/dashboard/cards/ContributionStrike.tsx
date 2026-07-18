import { LuCodeXml } from "react-icons/lu";
import Card from "./Card";
import HeadingCard from "./HeadingCard";

export default function ContributionStrike() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 w-full xl:w-110 h-fit">
			<HeadingCard Icon={LuCodeXml}>Contribution Strike</HeadingCard>
			<div className="w-full h-25"></div>
		</Card>
	);
}
