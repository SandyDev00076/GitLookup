import React from "react";
import { SearchIcon } from "assets/icons";
import { cJoin } from "utils";
import { useAppStore } from "stores/appStore";

import styles from "./UserSearch.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

const UserSearch = ({ className, inputClassName, ...props }: Props) => {
  const [searchQuery, setSearchQuery] = useAppStore(
    ({ searchQuery, setSearchQuery }) => [searchQuery, setSearchQuery]
  );

  return (
    <div className={cJoin(styles.container, className)}>
      <input
        type="text"
        className={cJoin(styles.searchInput, inputClassName)}
        placeholder="Type here"
        {...props}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};

export default UserSearch;
