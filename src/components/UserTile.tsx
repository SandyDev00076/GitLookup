import React from "react";
import { Link } from "react-router-dom";
import { SearchedUser } from "types/SearchedUser";

import styles from "./UserTile.module.scss";

interface Props {
  obj: SearchedUser;
}
const UserTile = ({ obj }: Props) => {
  return (
    <Link to={`user/${obj.login}`} className={styles.container}>
      <img src={obj.avatar_url} alt="Avatar" className={styles.avatar} />
      <div className={styles.details}>
        <div className={styles.name}>{obj.login}</div>
      </div>
    </Link>
  );
};

export default UserTile;
