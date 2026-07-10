import { LuCodeXml } from "react-icons/lu";
import Card from "./Card";
import HeadingCard from "./HeadingCard";

export default function Contribution() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 md:w-110 w-full h-fit">
			<HeadingCard Icon={LuCodeXml}>Contribution</HeadingCard>
			<div className="w-full h-40"></div>
		</Card>
	);
}
