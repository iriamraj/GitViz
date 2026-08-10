import { FiGitCommit } from "react-icons/fi";
import Card from "../../../../Card";
import HeadingCard from "../../../dashboard/cards/HeadingCard";

export default function Contributor() {
	return (
		<Card className="h-60 w-70 p-3">
			<HeadingCard Icon={FiGitCommit}>Contributors</HeadingCard>
		</Card>
	);
}
