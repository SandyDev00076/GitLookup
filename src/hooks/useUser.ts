import { useQuery } from "react-query";
import { fetchUserDetails } from "api/usersApi";
import { User } from "types/User";
import { ApiError } from "types/Error";

export const useUser = (username: string) => {
  return useQuery<User, ApiError>(["user", username], () =>
    fetchUserDetails(username)
  );
};
