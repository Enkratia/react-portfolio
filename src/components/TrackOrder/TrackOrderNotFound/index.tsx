import React from "react";

import s from "./TrackOrderNotFound.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Sorry } from "../../../iconComponents";

export const TrackOrderNotFound: React.FC = () => {
  return (
    <div className={s.root}>
      <Sorry />
      <h2 className={`${s.title} ${cs.sectionTitle}`}>
        Sorry, there are currently no orders matching your request.
      </h2>
      <span className={s.subtitle}>try another one or double-check this one</span>
    </div>
  );
};
