import { useQuery } from "react-query";
import { fetchRepos } from "api/reposApi";
import { Repo } from "types/Repo";

export const useRepos = (reposURL: string, username: string) => {
  return useQuery<Repo[]>(["user-repos", username], () => fetchRepos(reposURL));
};
