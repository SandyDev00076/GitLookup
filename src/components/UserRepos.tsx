import React from "react";
import { useRepos } from "hooks/useRepos";
import UserRepo from "./UserRepo";
import UserReposLoader from "./UserReposLoader";
import NoRepos from "./NoRepos";
import UserReposError from "./UserReposError";
import Loading from "./Loading";

import styles from "./UserRepos.module.scss";

interface Props {
  reposURL: string;
  username: string;
}
const UserRepos = ({ reposURL, username }: Props) => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useRepos(reposURL, username);

  if (isLoading) return <UserReposLoader />;
  if (isError && error) return <UserReposError error={error} />;
  if (!data || data.pages.length === 0) return <NoRepos />;

  return (
    <div className={styles.container}>
      <h1 className={styles.reposTitle}>Public Repos</h1>
      <div className={styles.repos}>
        {data.pages.map((page) =>
          page.repos.map((repo) => <UserRepo repo={repo} key={repo.id} />)
        )}
        {isFetching && (
          <div className={styles.loadingRepos}>
            <Loading />
          </div>
        )}
        {hasNextPage && (
          <button className={styles.loadMore} onClick={() => fetchNextPage()}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default UserRepos;
