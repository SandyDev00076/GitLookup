import React from "react";
import { InfoIcon } from "assets/icons";

import styles from "./NoQuery.module.scss";

const NoQuery = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <InfoIcon />
        <h1>Type in a query to search</h1>
      </div>
    </section>
  );
};

export default NoQuery;
