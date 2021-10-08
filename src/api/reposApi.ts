import parseLink from "parse-link-header";

/**
 * Returns a list of public repos
 * @param url URL through which repos will be fetched
 * @returns List of public repos
 */
export async function fetchRepos(url: string) {
  const res = await fetch(url);
  const linkHeader = res.headers.get("Link");
  if (linkHeader) console.log("Next link - ", parseLink(linkHeader));
  return await res.json();
}
