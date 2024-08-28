export async function fetchWithBaseURL(url: string, options?: RequestInit) {
  return fetch(`https://api.github.com/${url}`, options);
}
