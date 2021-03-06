import React from "react";
import {
  BackIcon,
  LocationIcon,
  SiteIcon,
  TwitterIcon,
  WorkIcon,
} from "assets/icons";
import { useHistory } from "react-router";
import { User } from "types/User";
import GoodAnchor from "./GoodAnchor";
import { fixLink } from "utils";

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
      <div style={{ flex: "1" }}></div>
      <div className={styles.extraDetails}>
        {user.blog && (
          <div className={styles.site}>
            <SiteIcon />{" "}
            <GoodAnchor href={fixLink(user.blog)}>{user.blog}</GoodAnchor>
          </div>
        )}
        {user.twitter_username && (
          <div className={styles.twitter}>
            <TwitterIcon />{" "}
            <GoodAnchor href={`https://twitter.com/${user.twitter_username}`}>
              {user.twitter_username}
            </GoodAnchor>
          </div>
        )}
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
