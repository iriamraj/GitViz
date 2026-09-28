export async function fetchGithubUser(username: string) {
	const response = await fetch(`/api/github?username=${encodeURIComponent(username)}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch user: ${response.statusText}`);
	}
	return await response.json();
}

export async function fetchGithubRepos(username: string) {
	const response = await fetch(`/api/github?username=${encodeURIComponent(username)}&endpoint=repos`);
	if (!response.ok) {
		throw new Error(`Failed to fetch repos: ${response.statusText}`);
	}
	return await response.json();
}

export async function fetchGithubRepoDetails(username: string, repo: string) {
	const response = await fetch(
		`/api/github?username=${encodeURIComponent(username)}&repo=${encodeURIComponent(repo)}`
	);
	if (!response.ok) {
		throw new Error(`Failed to fetch repo details: ${response.statusText}`);
	}
	return await response.json();
}

export async function fetchRepoCommits(username: string, repo: string) {
	const response = await fetch(
		`/api/github?username=${encodeURIComponent(username)}&repo=${encodeURIComponent(repo)}&endpoint=commits`
	);
	if (!response.ok) {
		return [];
	}
	return await response.json();
}

export async function fetchRepoLanguages(username: string, repo: string) {
	const response = await fetch(
		`/api/github?username=${encodeURIComponent(username)}&repo=${encodeURIComponent(repo)}&endpoint=languages`
	);
	if (!response.ok) {
		return {};
	}
	return await response.json();
}