import React from "react";
import { useAppStore } from "stores/appStore";
import LoadingUsers from "./LoadingUsers";
import NoUsers from "./NoUsers";
import NoQuery from "./NoQuery";
import UserTile from "./UserTile";
import { useUsers } from "hooks/useUsers";
import SearchError from "./SearchError";

import styles from "./Users.module.scss";

const Users = () => {
  const searchQuery = useAppStore((state) => state.searchQuery);
  const {
    data: searchResult,
    isLoading,
    isError,
    error,
  } = useUsers(searchQuery);
  if (searchQuery === "") return <NoQuery />;
  if (isLoading) return <LoadingUsers />;
  if (isError && error) return <SearchError error={error} />;
  if (searchResult.length === 0) return <NoUsers />;
  return (
    <section className={styles.container}>
      {searchResult.map((user) => (
        <UserTile obj={user} key={user.id} />
      ))}
    </section>
  );
};

export default Users;
