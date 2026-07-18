import { FaRegDotCircle } from "react-icons/fa";
import Card from "./Card";
import HeadingCard from "./HeadingCard";

export default function Issues() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 h-fit w-full">
			<HeadingCard Icon={FaRegDotCircle}>Issues</HeadingCard>
			<div className="w-full h-40"></div>
		</Card>
	);
}
