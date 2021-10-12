import parseLink from "parse-link-header";
import { ReposRequest } from "types/ReposRequest";

/**
 * Returns a list of public repos
 * @param url URL through which repos will be fetched
 * @returns List of public repos
 */
export async function fetchInfiniteRepos(
  url: string,
  pageParam = 1
): Promise<ReposRequest> {
  const res = await fetch(`${url}?page=${pageParam}`);
  const linkHeader = res.headers.get("Link");
  let parsedLinkHeader: parseLink.Links | null = null;
  if (linkHeader) parsedLinkHeader = parseLink(linkHeader);
  const data = await res.json();
  return {
    repos: data,
    nextPageIndex:
      linkHeader && parsedLinkHeader
        ? parseInt(parsedLinkHeader["next"].page)
        : null,
  };
}
