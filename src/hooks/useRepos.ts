import { useInfiniteQuery } from "react-query";
import { fetchInfiniteRepos } from "api/reposApi";
import { ApiError } from "types/Error";
import { ReposRequest } from "types/ReposRequest";

export const useRepos = (reposURL: string, username: string) => {
  return useInfiniteQuery<ReposRequest, ApiError>(
    ["user-repos", username],
    ({ pageParam }) => fetchInfiniteRepos(reposURL, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPageIndex) return lastPage.nextPageIndex;
        return false;
      },
    }
  );
};
