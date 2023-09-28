import React from "react";

import styles from "./NotFoundBlog.module.scss";

export const NotFoundBlog: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Nothing found :(</h1>
    </div>
  );
};
