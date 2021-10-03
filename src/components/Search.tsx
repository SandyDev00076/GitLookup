import React from "react";
import UserSearch from "./UserSearch";
import Users from "./Users";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <section className={styles.container}>
      <UserSearch className={styles.userInput} autoFocus />
      <Users />
    </section>
  );
};

export default Search;
