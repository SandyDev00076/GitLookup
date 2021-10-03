import { useCallback } from "react";
import { useQuery } from "react-query";
import { fetchUsers } from "api/usersApi";

export const useUsers = (searchQuery: string, perPage: number = 20) => {
  const fetchUsersFn = useCallback(() => {
    fetchUsers(searchQuery, perPage);
  }, [searchQuery, perPage]);
  return useQuery("users", fetchUsersFn);
};
