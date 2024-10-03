export async function fetchWithBaseURL(url: string, options?: RequestInit) {
  console.log("token", process.env.GITHUB_TOKEN);
  return fetch(`https://api.github.com/${url}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
}
