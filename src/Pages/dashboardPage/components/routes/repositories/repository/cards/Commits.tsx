import Card from "../../../../Card";
import { useRepoCommits } from "../../../../../../../hooks/useGithub";

interface CommitsProps {
	repoName: string;
	username?: string;
}

export default function Commits({ repoName, username }: CommitsProps) {
	const { data: commits = [] } = useRepoCommits(username, repoName);

	return (
		<Card className="p-4">
			<h3 className="font-semibold mb-2 text-(--colorText)">Recent Commits ({commits.length})</h3>
			{/* Render commits here */}
		</Card>
	);
}