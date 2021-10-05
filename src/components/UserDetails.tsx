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
      </div>
      <div className={styles.rightSide}></div>
    </section>
  );
};

export default UserDetails;
