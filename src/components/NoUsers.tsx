import React from "react";
import { NotFound } from "assets/icons";

import styles from "./NoUsers.module.scss";

const NoUsers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <NotFound />
        <h1>No users found</h1>
      </div>
    </section>
  );
};

export default NoUsers;
