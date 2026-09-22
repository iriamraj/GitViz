import { FiGitCommit } from "react-icons/fi";
import Card from "../../../../Card";
import HeadingCard from "../../../dashboard/cards/HeadingCard";

export default function Commits() {
	return (
		<Card className="w-full xl:w-110 h-60 p-3">
			<HeadingCard Icon={FiGitCommit}>Commits</HeadingCard>
		</Card>
	);
}