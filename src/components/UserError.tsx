import React from "react";
import { NotFound } from "assets/icons";
import { ApiError } from "types/Error";
import GoodAnchor from "./GoodAnchor";

import styles from "./UserError.module.scss";

interface Props {
  error: ApiError;
}
const UserError = ({ error }: Props) => {
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
            <GoodAnchor href={error.documentation_url}>
              {error.documentation_url}
            </GoodAnchor>{" "}
            for more info
          </h2>
        )}
      </div>
    </section>
  );
};

export default UserError;
