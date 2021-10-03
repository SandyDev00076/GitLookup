import React from "react";
import { useAppStore } from "stores/appStore";
import { useUsers } from "hooks/useUsers";
import NoUsers from "./NoUsers";

import styles from "./Users.module.scss";

const Users = () => {
  const searchQuery = useAppStore((state) => state.searchQuery);
  const { data } = useUsers(searchQuery);

  if (searchQuery === "") return <NoUsers />;
  return <section className={styles.container}>Users</section>;
};

export default Users;
