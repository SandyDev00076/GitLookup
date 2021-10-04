import React from "react";
import { useAppStore } from "stores/appStore";
import NoUsers from "./NoUsers";
import UserTile from "./UserTile";
import { useUsers } from "hooks/useUsers";

import styles from "./Users.module.scss";

const Users = () => {
  const searchQuery = useAppStore((state) => state.searchQuery);
  const { data: searchResult, isLoading, isError } = useUsers(searchQuery);
  if (searchQuery === "") return <NoUsers />;
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <section className={styles.container}>
      {searchResult.map((user) => (
        <UserTile obj={user} key={user.id} />
      ))}
    </section>
  );
};

export default Users;
