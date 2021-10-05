import { useQuery } from "react-query";
import { fetchUserDetails } from "api/usersApi";
import { User } from "types/User";

export const useUser = (username: string) => {
  return useQuery<User>(["user", username], () => fetchUserDetails(username));
};
