export async function getGithubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    
    // Sort by stars and get top repositories
    return repos
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        language: repo.language,
        topics: repo.topics || []
      }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
