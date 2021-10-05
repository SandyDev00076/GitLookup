/**
 * Returns a list of public repos
 * @param url URL through which repos will be fetched
 * @returns List of public repos
 */
export async function fetchRepos(url: string) {
  const res = await fetch(url);
  return await res.json();
}
