import React from "react";
import { NotFound } from "assets/icons";

import styles from "./UserNotFound.module.scss";

interface Props {
  username: string;
}
const UserNotFound = ({ username }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <NotFound />
        <h1>
          User with username <strong>{username}</strong> not found
        </h1>
      </div>
    </section>
  );
};

export default UserNotFound;
