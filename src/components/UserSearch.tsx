import React from "react";
import { SearchIcon } from "assets/icons";
import { cJoin } from "utils";

import styles from "./UserSearch.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const UserSearch = ({ className, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={cJoin(styles.searchInput, className)}
        placeholder="Type here"
        {...props}
      />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};

export default UserSearch;
