import React from "react";
import { useRepos } from "hooks/useRepos";
import UserRepo from "./UserRepo";
import UserReposLoader from "./UserReposLoader";

import styles from "./UserRepos.module.scss";

interface Props {
  reposURL: string;
  username: string;
}
const UserRepos = ({ reposURL, username }: Props) => {
  const { data: repos, isLoading, isError } = useRepos(reposURL, username);

  if (isLoading) return <UserReposLoader />;
  if (isError) return <div>Error</div>;
  if (repos === undefined) return <div>Repos could not be found</div>;

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
