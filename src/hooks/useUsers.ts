import { useQuery } from "react-query";
import { fetchUsers } from "api/usersApi";
import { SearchResult } from "types/SearchResult";
import { ApiError } from "types/Error";
import { useDebounce } from "use-debounce";

/**
 * Duration for debouncing in ms
 */
const DEBOUNCE_DURATION = 600;

export const useUsers = (searchQuery: string, perPage: number = 20) => {
  const [debouncedSearchQuery, controlFns] = useDebounce(
    searchQuery,
    DEBOUNCE_DURATION
  );
  const result = useQuery<SearchResult, ApiError>(
    ["users", debouncedSearchQuery],
    () => fetchUsers(debouncedSearchQuery, perPage)
  );
  const userList = result.data !== undefined ? result.data["items"] : [];
  return {
    ...result,
    isLoading: result.isLoading || controlFns.isPending(),
    data: userList,
  };
};
