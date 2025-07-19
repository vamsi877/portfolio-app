'use client';

import { useEffect, useState } from 'react';

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  language: string;
  topics: string[];
}

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Welcome to My Portfolio
        </h1>
        
        {/* About Section */}
        <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I am a passionate full-stack developer with expertise in modern web technologies.
          </p>
        </div>

        {/* GitHub Repositories Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            My GitHub Projects
          </h2>
          {loading ? (
            <div className="text-center text-gray-600 dark:text-gray-400">Loading repositories...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {repo.name}
                  </h3>
                  {repo.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {repo.language && (
                      <span className="mr-4">
                        <span className="font-semibold">{repo.language}</span>
                      </span>
                    )}
                    <span className="mr-4">⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                  {repo.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
