import { useQuery } from "@tanstack/react-query";
import {
	fetchGithubUser,
	fetchGithubRepos,
	fetchGithubRepoDetails,
	fetchRepoCommits,
	fetchRepoLanguages,
} from "../services/githubApi";

export function useGithubUser(username?: string) {
	return useQuery({
		queryKey: ["github", "user", username],
		queryFn: () => fetchGithubUser(username!),
		enabled: Boolean(username),
	});
}

export function useGithubRepos(username?: string) {
	return useQuery({
		queryKey: ["github", "repos", username],
		queryFn: () => fetchGithubRepos(username!),
		enabled: Boolean(username),
		select: (data) => (Array.isArray(data) ? data : []),
	});
}

export function useGithubRepoDetails(username?: string, repo?: string) {
	return useQuery({
		queryKey: ["github", "repoDetails", username, repo],
		queryFn: () => fetchGithubRepoDetails(username!, repo!),
		enabled: Boolean(username && repo),
	});
}

export function useRepoCommits(username?: string, repo?: string) {
	return useQuery({
		queryKey: ["github", "commits", username, repo],
		queryFn: () => fetchRepoCommits(username!, repo!),
		enabled: Boolean(username && repo),
		select: (data) => (Array.isArray(data) ? data : []),
	});
}

export function useRepoLanguages(username?: string, repo?: string) {
	return useQuery({
		queryKey: ["github", "languages", username, repo],
		queryFn: () => fetchRepoLanguages(username!, repo!),
		enabled: Boolean(username && repo),
	});
}