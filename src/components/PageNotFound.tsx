import React from "react";
import { NotFound } from "assets/icons";
import { Link } from "react-router-dom";

import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <NotFound />
        <h1>
          <strong>404</strong>: Page not found. Go back to{" "}
          <Link to="/">home</Link>.
        </h1>
      </div>
    </section>
  );
};

export default PageNotFound;
