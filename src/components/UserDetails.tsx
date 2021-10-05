import React from "react";
import { BackIcon } from "assets/icons";

import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.nav}>
          <button className={styles.backBtn}>
            <BackIcon />
          </button>
          <h1 className={styles.username}>Username</h1>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </section>
  );
};

export default UserDetails;
