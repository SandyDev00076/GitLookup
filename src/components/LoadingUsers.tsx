import React from "react";
import Loading from "./Loading";

import styles from "./LoadingUsers.module.scss";

const LoadingUsers = () => {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default LoadingUsers;
