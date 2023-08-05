import React from "react";

import { useAppDispatch } from "../../../redux/store";
import { resetFilters, setRefetch } from "../../../redux/catalogSlice/slice";

import s from "./CatalogNotFound.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Sorry } from "../../../iconComponents";

export const CatalogNotFound: React.FC = () => {
  const dispatch = useAppDispatch();

  const onResetClick = () => {
    dispatch(resetFilters());
    dispatch(setRefetch());
  };

  return (
    <div className={s.root}>
      <Sorry />
      <h2 className={`${s.title} ${cs.sectionTitle}`}>
        Sorry, there are currently no products matching your request.
      </h2>
      <span className={s.subtitle}>
        try softening your search terms or search in a different category
      </span>
      <button onClick={onResetClick} className={`${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
        Reset filters
      </button>
    </div>
  );
};
