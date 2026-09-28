export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    const { username, repo, endpoint } = req.query;
    if (!username) {
        return res.status(400).json({ error: "Username parameter is required" });
    }
    const GITHUB_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    const headers = {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "GitViz-App",
    };
    if (GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }
    try {
        let targetUrl = `https://api.github.com/users/${username}`;
        if (repo) {
            if (endpoint === "commits") {
                targetUrl = `https://api.github.com/repos/${username}/${repo}/commits?per_page=10`;
            }
            else if (endpoint === "languages") {
                targetUrl = `https://api.github.com/repos/${username}/${repo}/languages`;
            }
            else {
                targetUrl = `https://api.github.com/repos/${username}/${repo}`;
            }
        }
        else if (endpoint === "repos") {
            targetUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
        }
        const response = await fetch(targetUrl, { headers });
        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json(data);
        }
        return res.status(200).json(data);
    }
    catch {
        return res.status(500).json({ error: "Failed to fetch data from GitHub API" });
    }
}
