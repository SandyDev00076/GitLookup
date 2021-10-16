import React from "react";
import { Repo } from "types/Repo";
import GoodAnchor from "./GoodAnchor";

import styles from "./UserRepo.module.scss";

interface Props {
  repo: Repo;
}
const UserRepo = ({ repo }: Props) => {
  return (
    <GoodAnchor href={repo.html_url} className={styles.container}>
      <h1 className={styles.name}>{repo.name}</h1>
      {repo.description && <p className={styles.desc}>{repo.description}</p>}
      <span className={styles.stats}>
        <strong>{repo.stargazers_count}</strong> stars -{" "}
        <strong>{repo.forks_count}</strong> forks
      </span>
    </GoodAnchor>
  );
};

export default UserRepo;
