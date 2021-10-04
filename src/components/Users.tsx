import React from "react";
import { useAppStore } from "stores/appStore";
import { useUsers } from "hooks/useUsers";
import NoUsers from "./NoUsers";

import styles from "./Users.module.scss";
import UserTile from "./UserTile";

const Users = () => {
  const searchQuery = useAppStore((state) => state.searchQuery);
  const { data } = useUsers(searchQuery);
  console.log(data);
  if (searchQuery === "") return <NoUsers />;
  return (
    <section className={styles.container}>
      {data.map((user) => (
        <UserTile obj={user} key={user.id} />
      ))}
    </section>
  );
};

export default Users;
