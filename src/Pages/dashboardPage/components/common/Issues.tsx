import { FaRegDotCircle } from "react-icons/fa";
import Card from "../Card";
import HeadingCard from "../routes/dashboard/cards/HeadingCard";

export default function Issues({ width }: { width?: string }) {
	return (
		<Card
			className={`hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 h-full ${width || "w-full"}`}
		>
			<HeadingCard Icon={FaRegDotCircle}>Issues</HeadingCard>
			<div className="w-full h-40"></div>
		</Card>
	);
}
