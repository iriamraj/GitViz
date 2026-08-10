export interface CommitEntry {
	sha: string;
	node_id: string;
	commit: {
		author: { name: string; email: string; date: string };
		committer: { name: string; email: string; date: string };
		message: string;
		tree: { sha: string; url: string };
		url: string;
		comment_count: number;
		verification: {
			verified: boolean;
			reason: string;
			signature: string | null;
			payload: string | null;
		};
	};
	url: string;
	html_url: string;
	comments_url: string;
	author: {
		login: string;
		id: number;
		node_id: string;
		avatar_url: string;
		gravatar_id: string;
		url: string;
		html_url: string;
		type: string;
		site_admin: boolean;
	};
	committer: {
		login: string;
		id: number;
		node_id: string;
		avatar_url: string;
		gravatar_id: string;
		url: string;
		type: string;
		site_admin: boolean;
	};
	parents: { sha: string; url: string; html_url: string }[];
}

const defaultAuthor = {
	login: "octocat",
	id: 583231,
	node_id: "MDQ6VXNlcjU4MzIzMQ==",
	avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/octocat",
	html_url: "https://github.com/octocat",
	type: "User",
	site_admin: false,
};

// Map repository full_name (or repo ID) to its commit array
export const repoCommitsMap: Record<string, CommitEntry[]> = {
	"octocat/git-viz-dashboard": [
		{
			sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
			node_id: "C_kwDOA123456dcb09b5b57875f334f61aebed695e2e4193db5e",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-25T09:15:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-25T09:15:00Z",
				},
				message:
					"feat: add analytics chart components for commit frequency and language distribution",
				tree: {
					sha: "7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a",
					url: "https://api.github.com/repos/octocat/git-viz-dashboard/git/trees/7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a",
				},
				url: "https://api.github.com/repos/octocat/git-viz-dashboard/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/git-viz-dashboard/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
			html_url:
				"https://github.com/octocat/git-viz-dashboard/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e",
			comments_url:
				"https://api.github.com/repos/octocat/git-viz-dashboard/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [
				{
					sha: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
					url: "https://api.github.com/repos/octocat/git-viz-dashboard/commits/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
					html_url:
						"https://github.com/octocat/git-viz-dashboard/commit/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
				},
			],
		},
		{
			sha: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
			node_id: "C_kwDOA123451a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-22T14:10:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-22T14:10:00Z",
				},
				message: "fix: resolve TypeScript strict type mismatch on imported JSON data",
				tree: {
					sha: "2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c",
					url: "https://api.github.com/repos/octocat/git-viz-dashboard/git/trees/2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c",
				},
				url: "https://api.github.com/repos/octocat/git-viz-dashboard/git/commits/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/git-viz-dashboard/commits/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
			html_url:
				"https://github.com/octocat/git-viz-dashboard/commit/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
			comments_url:
				"https://api.github.com/repos/octocat/git-viz-dashboard/commits/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/boysenberry-repo-1": [
		{
			sha: "7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h",
			node_id: "C_kwDOB123457a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2025-11-12T11:20:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2025-11-12T11:20:00Z",
				},
				message: "ci: update GitHub Actions workflow runners to Node 20 LTS",
				tree: {
					sha: "8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
					url: "https://api.github.com/repos/octocat/boysenberry-repo-1/git/trees/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
				},
				url: "https://api.github.com/repos/octocat/boysenberry-repo-1/git/commits/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h",
				comment_count: 0,
				verification: {
					verified: false,
					reason: "unsigned",
					signature: null,
					payload: null,
				},
			},
			url: "https://api.github.com/repos/octocat/boysenberry-repo-1/commits/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h",
			html_url:
				"https://github.com/octocat/boysenberry-repo-1/commit/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h",
			comments_url:
				"https://api.github.com/repos/octocat/boysenberry-repo-1/commits/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/low-code-layout-builder": [
		{
			sha: "8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
			node_id: "C_kwDOC123458b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-22T14:10:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-22T14:10:00Z",
				},
				message: "feat: implement drag-and-drop board state sync with output JSX generator",
				tree: {
					sha: "9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
					url: "https://api.github.com/repos/octocat/low-code-layout-builder/git/trees/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
				},
				url: "https://api.github.com/repos/octocat/low-code-layout-builder/git/commits/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/low-code-layout-builder/commits/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
			html_url:
				"https://github.com/octocat/low-code-layout-builder/commit/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i",
			comments_url:
				"https://api.github.com/repos/octocat/low-code-layout-builder/commits/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/custom-kernel-drivers": [
		{
			sha: "9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
			node_id: "C_kwDOD123459c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-03-01T17:25:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-03-01T17:25:00Z",
				},
				message: "fix(touchscreen): resolve I2C bus timeout issue on panel wakeup sequence",
				tree: {
					sha: "0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
					url: "https://api.github.com/repos/octocat/custom-kernel-drivers/git/trees/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
				},
				url: "https://api.github.com/repos/octocat/custom-kernel-drivers/git/commits/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/custom-kernel-drivers/commits/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
			html_url:
				"https://github.com/octocat/custom-kernel-drivers/commit/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j",
			comments_url:
				"https://api.github.com/repos/octocat/custom-kernel-drivers/commits/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/glassmorphic-design-system": [
		{
			sha: "0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
			node_id: "C_kwDOE123450d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-06-20T10:05:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-06-20T10:05:00Z",
				},
				message: "style: adjust backdrop-filter blur and dark mode border opacity rules",
				tree: {
					sha: "1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
					url: "https://api.github.com/repos/octocat/glassmorphic-design-system/git/trees/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
				},
				url: "https://api.github.com/repos/octocat/glassmorphic-design-system/git/commits/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/glassmorphic-design-system/commits/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
			html_url:
				"https://github.com/octocat/glassmorphic-design-system/commit/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k",
			comments_url:
				"https://api.github.com/repos/octocat/glassmorphic-design-system/commits/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/vite-inline-font-loader": [
		{
			sha: "1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
			node_id: "C_kwDOF123451e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-02T11:50:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-02T11:50:00Z",
				},
				message:
					"perf: eliminate render-blocking latency by base64-inlining local font subsets",
				tree: {
					sha: "2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
					url: "https://api.github.com/repos/octocat/vite-inline-font-loader/git/trees/2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
				},
				url: "https://api.github.com/repos/octocat/vite-inline-font-loader/git/commits/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/vite-inline-font-loader/commits/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
			html_url:
				"https://github.com/octocat/vite-inline-font-loader/commit/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l",
			comments_url:
				"https://api.github.com/repos/octocat/vite-inline-font-loader/commits/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/smooth-scroll-animations": [
		{
			sha: "2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
			node_id: "C_kwDOG123452f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-05-15T08:20:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-05-15T08:20:00Z",
				},
				message:
					"refactor: optimize Locomotive Scroll instance destroy handler on route changes",
				tree: {
					sha: "3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
					url: "https://api.github.com/repos/octocat/smooth-scroll-animations/git/trees/3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
				},
				url: "https://api.github.com/repos/octocat/smooth-scroll-animations/git/commits/2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/smooth-scroll-animations/commits/2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
			html_url:
				"https://github.com/octocat/smooth-scroll-animations/commit/2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m",
			comments_url:
				"https://api.github.com/repos/octocat/smooth-scroll-animations/commits/2f3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/magisk-module-builder": [
		{
			sha: "3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
			node_id: "C_kwDOH123453a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-01-08T17:10:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-01-08T17:10:00Z",
				},
				message:
					"feat: add LSPosed framework injection script and update module installation props",
				tree: {
					sha: "4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
					url: "https://api.github.com/repos/octocat/magisk-module-builder/git/trees/4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
				},
				url: "https://api.github.com/repos/octocat/magisk-module-builder/git/commits/3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
				comment_count: 0,
				verification: {
					verified: false,
					reason: "unsigned",
					signature: null,
					payload: null,
				},
			},
			url: "https://api.github.com/repos/octocat/magisk-module-builder/commits/3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
			html_url:
				"https://github.com/octocat/magisk-module-builder/commit/3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n",
			comments_url:
				"https://api.github.com/repos/octocat/magisk-module-builder/commits/3a4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/zustand-persisted-store-demo": [
		{
			sha: "4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
			node_id: "C_kwDOI123454b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-18T16:30:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-07-18T16:30:00Z",
				},
				message:
					"refactor: split Zustand store slices and add custom persistent storage middleware",
				tree: {
					sha: "5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
					url: "https://api.github.com/repos/octocat/zustand-persisted-store-demo/git/trees/5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
				},
				url: "https://api.github.com/repos/octocat/zustand-persisted-store-demo/git/commits/4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/zustand-persisted-store-demo/commits/4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
			html_url:
				"https://github.com/octocat/zustand-persisted-store-demo/commit/4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o",
			comments_url:
				"https://api.github.com/repos/octocat/zustand-persisted-store-demo/commits/4b5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],

	"octocat/html-to-jsx-compiler": [
		{
			sha: "5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
			node_id: "C_kwDOJ123455c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
			commit: {
				author: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-06-25T19:20:00Z",
				},
				committer: {
					name: "The Octocat",
					email: "octocat@github.com",
					date: "2026-06-25T19:20:00Z",
				},
				message: "feat: parse inline SVG elements into valid camelCase JSX attributes",
				tree: {
					sha: "6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q",
					url: "https://api.github.com/repos/octocat/html-to-jsx-compiler/git/trees/6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q",
				},
				url: "https://api.github.com/repos/octocat/html-to-jsx-compiler/git/commits/5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
				comment_count: 0,
				verification: { verified: true, reason: "valid", signature: null, payload: null },
			},
			url: "https://api.github.com/repos/octocat/html-to-jsx-compiler/commits/5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
			html_url:
				"https://github.com/octocat/html-to-jsx-compiler/commit/5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p",
			comments_url:
				"https://api.github.com/repos/octocat/html-to-jsx-compiler/commits/5c6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p/comments",
			author: defaultAuthor,
			committer: defaultAuthor,
			parents: [],
		},
	],
};
