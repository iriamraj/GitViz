import { FiGitPullRequest } from "react-icons/fi";
import Card from "../../../Card";
import HeadingCard from "./HeadingCard";

export default function PullRequest() {
	return (
		<Card className="hover:[&>div>.iconHolder]:bg-(--colorPurple) hover:[&>div>.iconHolder>svg]:text-white p-3 h-fit w-full">
			<HeadingCard Icon={FiGitPullRequest}>Pull Request</HeadingCard>
			<div className="w-full h-40"></div>
		</Card>
	);
}
