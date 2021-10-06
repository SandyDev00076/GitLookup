import React from "react";
import { useParams } from "react-router";
import { useUser } from "hooks/useUser";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import UserDetailsLoader from "./UserDetailsLoader";
import UserNotFound from "./UserNotFound";
import UserError from "./UserError";

import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  const { username } = useParams<{ username: string }>();
  const { data: user, isLoading, isError, error } = useUser(username);

  if (isLoading) return <UserDetailsLoader />;
  if ((isError && error?.message === "Not Found") || user === undefined)
    return <UserNotFound username={username} />;
  if (isError && error) return <UserError error={error} />;

  return (
    <section className={styles.container}>
      <UserInfo user={user} />
      <UserRepos reposURL={user.repos_url} username={user.login} />
    </section>
  );
};

export default UserDetails;
