import { FiGitCommit } from "react-icons/fi";
import Card from "../../../Card";
import HeadingCard from "./HeadingCard";

export default function Contribution() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 w-full xl:w-110 h-fit">
			<HeadingCard Icon={FiGitCommit}>Contribution</HeadingCard>
			<div className="w-full h-40"></div>
		</Card>
	);
}
