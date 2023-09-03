import React from "react";

import styles from "./NotFound.module.scss";

export const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>&#128533;</span>
        <br />
        Nothing found :(
      </h1>
      <p className={styles.description}>Sorry, this page is not available in our online store</p>
    </div>
  );
};
