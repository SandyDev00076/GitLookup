import { useQuery } from "react-query";
import { fetchRepos } from "api/reposApi";
import { Repo } from "types/Repo";
import { ApiError } from "types/Error";

export const useRepos = (reposURL: string, username: string) => {
  return useQuery<Repo[], ApiError>(["user-repos", username], () =>
    fetchRepos(reposURL)
  );
};
