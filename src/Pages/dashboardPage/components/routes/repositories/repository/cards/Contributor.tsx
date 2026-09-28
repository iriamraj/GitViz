import { useEffect } from "react";
import Card from "../../../../Card";

interface ContributorProps {
	repoName: string;
	username?: string;
}

export default function Contributor({ repoName, username }: ContributorProps) {
	useEffect(() => {
		if (!username || !repoName) return;
		// Fetch contributors using username & repoName
	}, [username, repoName]);

	return (
		<Card className="p-4">
			<h3 className="font-semibold text-(--colorText)">Contributors</h3>
		</Card>
	);
}