import React from "react";
import { NotFound } from "assets/icons";
import { ApiError } from "types/Error";

import styles from "./UserReposError.module.scss";

interface Props {
  error: ApiError;
}
const UserReposError = ({ error }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <NotFound />
        <h1>
          <strong>Error</strong>: {error.message}
        </h1>
        {error.documentation_url && (
          <h2>
            Check out{" "}
            <a
              href={error.documentation_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {error.documentation_url}
            </a>{" "}
            for more info
          </h2>
        )}
      </div>
    </section>
  );
};

export default UserReposError;
