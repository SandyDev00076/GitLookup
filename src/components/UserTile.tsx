import React from "react";
import { User } from "types/User";

import styles from "./UserTile.module.scss";

interface Props {
  obj: User;
}
const UserTile = ({ obj }: Props) => {
  return (
    <section className={styles.container}>
      <img src={obj.avatar_url} alt="Avatar" className={styles.avatar} />
      <div className={styles.details}>
        <div className={styles.name}>{obj.login}</div>
      </div>
    </section>
  );
};

export default UserTile;
