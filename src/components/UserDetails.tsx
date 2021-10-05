import React from "react";
import { BackIcon } from "assets/icons";
import { useHistory, useParams } from "react-router";
import { useUser } from "hooks/useUser";

import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  const { username } = useParams<{ username: string }>();
  const { data: user, isLoading, isError } = useUser(username);
  const history = useHistory();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (user === undefined) return <div>No user</div>;

  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.nav}>
          <button className={styles.backBtn} onClick={() => history.goBack()}>
            <BackIcon />
          </button>
          <h1 className={styles.username}>{user.login}</h1>
        </div>
        <img src={user.avatar_url} alt="avatar" className={styles.userPic} />
        <h2 className={styles.name}>{user.name}</h2>
        {user.email && <h1 className={styles.email}>{user.email}</h1>}
        {user.bio && <p className={styles.bio}>{user.bio}</p>}
        <span className={styles.stats}>
          <strong>{user.followers}</strong> followers -{" "}
          <strong>{user.following}</strong> following
        </span>
      </div>
      <div className={styles.rightSide}></div>
    </section>
  );
};

export default UserDetails;
