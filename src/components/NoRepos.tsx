import React from "react";
import { NotFound } from "assets/icons";

import styles from "./NoRepos.module.scss";

const NoRepos = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <NotFound />
        <h1>No repos found</h1>
      </div>
    </section>
  );
};

export default NoRepos;
