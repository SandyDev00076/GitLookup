import { useQuery } from "react-query";
import { fetchUsers } from "api/usersApi";
import { SearchResult } from "types/SearchResult";
import { ApiError } from "types/Error";

export const useUsers = (searchQuery: string, perPage: number = 20) => {
  const result = useQuery<SearchResult, ApiError>(["users", searchQuery], () =>
    fetchUsers(searchQuery, perPage)
  );
  const userList = result.data !== undefined ? result.data["items"] : [];
  return {
    ...result,
    data: userList,
  };
};
