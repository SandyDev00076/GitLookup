import React from "react";
import Loading from "./Loading";

import styles from "./UserReposLoader.module.scss";

const UserReposLoader = () => {
  return (
    <section className={styles.container}>
      <Loading />
    </section>
  );
};

export default UserReposLoader;
