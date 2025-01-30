const GITHUB_ACCESS = import.meta.env.VITE_GITHUB_ACCESS;

export async function fetchGithubStats() {
  try {
    const reposResponse = await fetch(
      "https://api.github.com/users/Rajnish-J/repos",
      {
        headers: {
          Authorization: `Bearer ${GITHUB_ACCESS}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await reposResponse.json();
    let totalCommits = 0;

    for (const repo of repos) {
      try {
        const commitsUrl = repo.commits_url.replace("{/sha}", "");
        const commitsResponse = await fetch(commitsUrl, {
          headers: {
            Authorization: `Bearer ${GITHUB_ACCESS}`,
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (commitsResponse.ok) {
          const commits = await commitsResponse.json();
          totalCommits += commits.length;
        }
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}:`, error);
      }
    }

    return { commits: totalCommits };
  } catch (error) {
    console.error("Error in GitHub stats API:", error);
    return { error: error.message };
  }
}
