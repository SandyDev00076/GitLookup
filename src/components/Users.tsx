import React from "react";
import { useAppStore } from "stores/appStore";
import LoadingUsers from "./LoadingUsers";
import NoUsers from "./NoUsers";
import UserTile from "./UserTile";
import { useUsers } from "hooks/useUsers";

import styles from "./Users.module.scss";

const Users = () => {
  const searchQuery = useAppStore((state) => state.searchQuery);
  const { data: searchResult, isLoading, isError } = useUsers(searchQuery);
  if (searchQuery === "") return <NoUsers />;
  if (isLoading) return <LoadingUsers />;
  if (isError) return <div>Error</div>;
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
