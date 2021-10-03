import { useQuery } from "react-query";
import { fetchUsers } from "api/usersApi";

export const useUsers = (searchQuery: string, perPage: number = 20) => {
  return useQuery("users", () => fetchUsers(searchQuery, perPage));
};
