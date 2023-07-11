import React from "react";

import { Search } from "../../../iconComponents";

import s from "./HeaderSearch.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const HeaderSearch: React.FC = () => {
  return (
    <form className={s.root}>
      <input
        type="text"
        className={`${s.input} ${cs.input}`}
        placeholder="Search for products..."
      />

      <button className={s.btn} aria-label="Search information.">
        <Search aria-hidden="true" />
      </button>
    </form>
  );
};
