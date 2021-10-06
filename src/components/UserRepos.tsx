import React from "react";
import { useRepos } from "hooks/useRepos";
import UserRepo from "./UserRepo";
import UserReposLoader from "./UserReposLoader";
import NoRepos from "./NoRepos";
import UserReposError from "./UserReposError";

import styles from "./UserRepos.module.scss";

interface Props {
  reposURL: string;
  username: string;
}
const UserRepos = ({ reposURL, username }: Props) => {
  const {
    data: repos,
    isLoading,
    isError,
    error,
  } = useRepos(reposURL, username);

  if (isLoading) return <UserReposLoader />;
  if (isError && error) return <UserReposError error={error} />;
  if (repos === undefined || repos.length === 0) return <NoRepos />;

  return (
    <div className={styles.container}>
      <h1 className={styles.reposTitle}>Public Repos</h1>
      <div className={styles.repos}>
        {repos.map((repo) => (
          <UserRepo repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
