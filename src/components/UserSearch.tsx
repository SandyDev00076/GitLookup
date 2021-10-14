import React from "react";
import { ClearIcon, SearchIcon } from "assets/icons";
import { cJoin } from "utils";
import { useAppStore } from "stores/appStore";

import styles from "./UserSearch.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  showClearButton?: boolean;
}

const UserSearch = ({
  className,
  inputClassName,
  showClearButton = false,
  ...props
}: Props) => {
  const [searchQuery, setSearchQuery] = useAppStore(
    ({ searchQuery, setSearchQuery }) => [searchQuery, setSearchQuery]
  );

  const inputStyleWhenClearBtn: React.CSSProperties = {
    paddingRight: searchQuery && showClearButton ? "40px" : "16px",
  };

  return (
    <div className={cJoin(styles.container, className)}>
      <input
        type="text"
        className={cJoin(styles.searchInput, inputClassName)}
        style={inputStyleWhenClearBtn}
        placeholder="Type here"
        {...props}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon className={styles.searchIcon} />
      {showClearButton && searchQuery && (
        <button className={styles.clearBtn} onClick={() => setSearchQuery("")}>
          <ClearIcon />
        </button>
      )}
    </div>
  );
};

export default UserSearch;
