import React from "react";
import Loading from "./Loading";

import styles from "./UserDetailsLoader.module.scss";

const UserDetailsLoader = () => {
  return (
    <section className={styles.container}>
      <Loading />
    </section>
  );
};

export default UserDetailsLoader;
