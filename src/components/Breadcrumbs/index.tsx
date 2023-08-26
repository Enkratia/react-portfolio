import React from "react";
import { Link, useLocation } from "react-router-dom";

import { selectBCTitle } from "../../redux/breadcrumbsSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCatalog } from "../../redux/catalogSlice/selectors";
import {
  resetFilters,
  setRefetch,
  setFiltersBC,
  setType,
  setPriceType,
  setCoord,
} from "../../redux/catalogSlice/slice";

import s from "./Breadcrumbs.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Home } from "../../iconComponents";

export const Breadcrumbs: React.FC = () => {
  const title = useAppSelector(selectBCTitle);

  // **
  const dispatch = useAppDispatch();

  const { isFiltersBC, filters } = useAppSelector(selectCatalog);
  const prevState = React.useRef({
    isFiltersBC: isFiltersBC,
    filters: filters,
  });

  if (prevState.current.isFiltersBC !== isFiltersBC) {
    prevState.current.filters = filters;
    prevState.current.isFiltersBC = isFiltersBC;
  }

  const filtersArray = Object.entries(prevState.current.filters);
  const isFilters = filtersArray.some(([_, elements]) => {
    return elements.length !== 0;
  });

  // **
  const onDeleteClick = (type: string, title: string) => {
    dispatch(setType({ type, title }));
    dispatch(setRefetch());
    dispatch(setFiltersBC());
    dispatch(setCoord(0));
  };

  const onDeletePriceClick = () => {
    dispatch(setPriceType([]));
    dispatch(setRefetch());
    dispatch(setFiltersBC());
    dispatch(setCoord(0));
  };

  const onResetClick = () => {
    dispatch(resetFilters());
    dispatch(setRefetch());
    dispatch(setFiltersBC());
    dispatch(setCoord(0));
  };

  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const formatFilter = (filter: string, element: string | string[]) => {
    switch (filter) {
      case "size":
        return `Size: ${element}`;
      case "price":
        return `Price: ${(element as string[]).slice().join("-")}`;
      case "color":
        return capitalize(element as string);
      default:
        return element;
    }
  };

  const getFilterElements = (filter: string, elements: string[]) => {
    if (elements.length === 0) return;

    if (filter === "price") {
      return (
        <li key={filter} className={s.filtersItem}>
          <button
            onClick={onDeletePriceClick}
            className={s.filtersBtn}
            aria-label="Delete this filter.">
            {formatFilter(filter, elements)}
          </button>
        </li>
      );
    }

    return elements.map((element) => (
      <li key={element} className={s.filtersItem}>
        <button
          onClick={() => onDeleteClick(element, filter)}
          className={s.filtersBtn}
          aria-label="Delete this filter.">
          {formatFilter(filter, element)}
        </button>
      </li>
    ));
  };

  // **
  const breadcrumbsPaths = useLocation()
    .pathname.split("/")
    .filter((crumb) => crumb !== "");

  const getLink = (idx: number) => {
    let link = "";
    for (let i = 0; i <= idx; i++) {
      link += "/" + breadcrumbsPaths[i];
    }
    return link;
  };

  const breadcrumbsElements = breadcrumbsPaths.map((crumb, i) => (
    <li key={i} className={s.item}>
      {i === breadcrumbsPaths.length - 1 ? (
        title ? (
          capitalize(title)
        ) : (
          capitalize(crumb).replace("-", " ")
        )
      ) : (
        <Link to={getLink(i)} className={s.link}>
          {capitalize(crumb).replace("-", " ")}
        </Link>
      )}
    </li>
  ));

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to="/" className={s.link}>
              <Home aria-hidden="true" />
            </Link>
          </li>

          {breadcrumbsElements}
        </ul>

        {isFilters && (
          <ul className={s.filters}>
            {filtersArray.map(([filter, elements]) => {
              return getFilterElements(filter, elements);
            })}

            <li className={s.filtersItem}>
              <button
                onClick={onResetClick}
                className={s.filtersBtn}
                aria-label="Delete all filters.">
                Clear all
              </button>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
