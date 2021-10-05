import React from "react";
import { useParams } from "react-router";
import { useUser } from "hooks/useUser";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  const { username } = useParams<{ username: string }>();
  const { data: user, isLoading, isError } = useUser(username);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (user === undefined) return <div>No user</div>;

  return (
    <section className={styles.container}>
      <UserInfo user={user} />
      <UserRepos reposURL={user.repos_url} username={user.login} />
    </section>
  );
};

export default UserDetails;
