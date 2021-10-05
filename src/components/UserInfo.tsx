import React from "react";
import { BackIcon, LocationIcon, WorkIcon } from "assets/icons";
import { useHistory } from "react-router";
import { User } from "types/User";

import styles from "./UserInfo.module.scss";

interface Props {
  user: User;
}
const UserInfo = ({ user }: Props) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
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
      <div className={styles.extraDetails}>
        {user.company && (
          <div className={styles.work}>
            <WorkIcon /> {user.company}
          </div>
        )}
        {user.location && (
          <div className={styles.location}>
            <LocationIcon /> {user.location}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
