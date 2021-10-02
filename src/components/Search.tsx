import React from "react";
import UserSearch from "./UserSearch";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <section className={styles.container}>
      <UserSearch className={styles.userInput} autoFocus />
    </section>
  );
};

export default Search;
