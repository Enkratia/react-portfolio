import React from "react";

import styles from "./NotFound.module.scss";

export const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>&#128533;</span>
        <br />
        Ничего не найдено :(
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует в нашем интернет магазине
      </p>
    </div>
  );
};
