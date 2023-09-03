import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { OverflowBehavior } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

import React from "react";

import { ProductsType } from "../../../redux/backendApi/types";
import { useAppDispatch } from "../../../redux/store";
import { setCoord, setFiltersBC, setPage } from "../../../redux/catalogSlice/slice";

import { CatalogFilter } from "../../../components";

import s from "./CatalogFilters.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Cross, Filter } from "../../../iconComponents";

type CatalogGridProps = {
  isMQ1120: boolean;
  allData: ProductsType;
  category: string;
  showBtnCoord: number;
  isNewRequest: boolean;
  isOpenFilters: boolean;
  onHideFiltersClick: () => void;
  onRequestClick: () => void;
};

export const CatalogFilters: React.FC<CatalogGridProps> = ({
  isMQ1120,
  allData,
  category,
  showBtnCoord,
  isNewRequest,
  isOpenFilters,
  onHideFiltersClick,
  onRequestClick,
}) => {
  const filtersRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const onFiltersOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const filters = e.currentTarget.firstElementChild as HTMLDivElement;

    if (filters && !filters.contains(e.target as HTMLDivElement)) {
      onHideFiltersClick();
    }
  };

  const onApplyFilters = () => {
    onRequestClick();
    dispatch(setCoord(0));
    dispatch(setPage(1));
    dispatch(setFiltersBC());

    if (!isMQ1120) {
      onHideFiltersClick();
    }
  };

  const getShowBtnCoord = (coord: number) => {
    if (!filtersRef.current) return;

    const filtersTop = filtersRef.current.getBoundingClientRect().top;
    return coord - filtersTop + "px";
  };

  const scrollbarOptions = {
    overflow: {
      x: "visible" as OverflowBehavior,
    },
    scrollbars: {
      theme: s.osThemeFilters,
    },
  };

  console.log(category);

  return (
    <div className={s.filters} data-catalog="filters">
      {/* <!-- Button --> */}
      <button
        onClick={onHideFiltersClick}
        className={`${s.button} ${isOpenFilters ? "" : s.buttonHide} ${cs.btn} ${cs.btnMid}`}>
        <Filter aria-hidden="true" />
      </button>

      {/* <!-- Filters --> */}
      <div
        ref={filtersRef}
        onClick={onFiltersOutsideClick}
        className={`${s.wrapper} ${isOpenFilters ? "" : s.wrapperHide}`}>
        <div className={s.wrapperInner}>
          <h3 className={cs.srOnly}>
            To apply filters click on the button "Show" or "Apply filters" or press keys "+" and "-"
            simultaneuosly.
          </h3>

          {/* <!-- Wrapper top --> */}
          <div className={s.wrapperTop}>
            <span className={s.wrapperTitle}>Shop filters</span>

            <button
              onClick={onHideFiltersClick}
              className={s.wrapperClose}
              aria-label="Close shop filters menu.">
              <Cross aria-hidden="true" />
            </button>
          </div>

          {/* <div> */}
          <OverlayScrollbarsComponent className={s.wrapperBottom} options={scrollbarOptions} defer>
            <CatalogFilter title={category} input={true} allData={allData} init={true} />
            <CatalogFilter title="size" input={false} allData={allData} />
            <CatalogFilter title="color" input={false} allData={allData} theme="color" />
            <CatalogFilter title="material" input={true} allData={allData} />
            <CatalogFilter title="brand" input={true} allData={allData} />
            <CatalogFilter title="price" input={false} allData={allData} theme="price" />
          </OverlayScrollbarsComponent>
          {/* </div> */}

          {/* <!-- Apply filters button --> */}
          <span className={s.applyWrapper}>
            <button
              onClick={onApplyFilters}
              className={`${s.apply} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
              Apply filters
            </button>
          </span>

          {/* <!-- Show button --> */}
          <button
            onClick={onApplyFilters}
            style={{ top: getShowBtnCoord(showBtnCoord) }}
            className={`${s.show} ${showBtnCoord !== 0 && isNewRequest ? s.showActive : ""}`}
            aria-label="Show all chosen categories.">
            Show
          </button>
        </div>
      </div>
    </div>
  );
};
