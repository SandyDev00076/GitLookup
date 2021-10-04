const BASE_URL = "https://api.github.com";
const SEARCH_BASE_URL = BASE_URL + "/search";

/**
 * Returns the list of user
 * @param searchQuery Query via which users will be filtered out
 * @param perPage Number of users returned
 * @returns Array of users
 */
export async function fetchUsers(searchQuery: string, perPage: number) {
  const searchQueryParam =
    searchQuery !== "" ? `q=${encodeURIComponent(searchQuery)};` : "";
  const res = await fetch(
    `${SEARCH_BASE_URL}/users?${searchQueryParam}per_page=${perPage}`
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}
