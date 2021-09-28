import React from "react";
import UserSearch from "components/UserSearch";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.appName}>
          Git
          <span className={styles.word2}>Lookup</span>
        </h1>
        <p className={styles.tagLine}>
          Search for anyone in the wonderful world of Git
        </p>
        <UserSearch className={styles.userInput} />
      </div>
    </section>
  );
};

export default Home;
