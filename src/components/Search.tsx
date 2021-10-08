import React from "react";
import UserSearch from "./UserSearch";
import Users from "./Users";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <section className={styles.container}>
      <div className={styles.searchWrapper}>
        <UserSearch className={styles.userInput} autoFocus />
      </div>
      <Users />
    </section>
  );
};

export default Search;
