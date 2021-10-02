import React from "react";
import UserSearch from "components/UserSearch";
import { ForwardIcon } from "assets/icons";
import { useHistory } from "react-router";

import styles from "./Home.module.scss";

const Home = () => {
  const history = useHistory();

  function startSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    history.push("/search");
  }

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
        <form onSubmit={(e) => startSearch(e)} className={styles.searchForm}>
          <UserSearch
            className={styles.userInput}
            inputClassName={styles.userInputField}
            autoFocus
          />
          <button type="submit" className={styles.submitBtn}>
            <ForwardIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
