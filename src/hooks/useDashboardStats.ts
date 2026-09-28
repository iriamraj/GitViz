import { useGithubUser, useGithubRepos } from "./useGithub";

export interface DashboardStats {
	totalStars: number;
	totalForks: number;
	totalRepos: number;
	followers: number;
	following: number;
	topLanguage: string;
	languageBreakdown: Record<string, number>;
	recentRepos: any[];
}

export function useDashboardStats(username?: string) {
	const userQuery = useGithubUser(username);
	const reposQuery = useGithubRepos(username);

	const isLoading = userQuery.isLoading || reposQuery.isLoading;
	const isError = userQuery.isError || reposQuery.isError;

	const repos = reposQuery.data || [];
	const user = userQuery.data;

	// Aggregation Logic
	let totalStars = 0;
	let totalForks = 0;
	const languageCounts: Record<string, number> = {};

	repos.forEach((repo: any) => {
		totalStars += repo.stargazers_count || 0;
		totalForks += repo.forks_count || 0;

		if (repo.language) {
			languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
		}
	});

	// Find the top language based on repository count
	let topLanguage = "N/A";
	let maxCount = 0;
	Object.entries(languageCounts).forEach(([lang, count]) => {
		if (count > maxCount) {
			maxCount = count;
			topLanguage = lang;
		}
	});

	// Sort most recently updated repositories for quick activity preview
	const recentRepos = [...repos]
		.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
		.slice(0, 5);

	const stats: DashboardStats = {
		totalStars,
		totalForks,
		totalRepos: user?.public_repos ?? repos.length,
		followers: user?.followers ?? 0,
		following: user?.following ?? 0,
		topLanguage,
		languageBreakdown: languageCounts,
		recentRepos,
	};

	return {
		stats,
		user,
		isLoading,
		isError,
	};
}