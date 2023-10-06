import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { OverflowBehavior } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

import React from "react";

import { ProductsType } from "../../../redux/backendApi/types";
import { useAppDispatch } from "../../../redux/store";
import { setCoord, setFiltersBC, setPage } from "../../../redux/catalogSlice/slice";

import { CatalogFilter } from "../../../components";
import { setOverflowHidden } from "../../../util/customFunctions";

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
  const dispatch = useAppDispatch();
  const filtersRef = React.useRef<HTMLDivElement>(null);
  let keySet = new Set();

  React.useEffect(() => {
    if (!isMQ1120) {
      if (isOpenFilters) {
        setOverflowHidden(true);
      }
    } else {
      if (isOpenFilters) {
        setOverflowHidden(false);
      }
    }
  }, [isMQ1120]);

  const onFiltersOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasAttribute("data-modal-exit")) {
      e.currentTarget.removeAttribute("data-modal-exit");
      onFiltersBtnClick();
    }
  };

  const onFiltersDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.setAttribute("data-modal-exit", "");
    }
  };

  const onFiltersBtnClick = () => {
    onHideFiltersClick();

    if (!isMQ1120) {
      setOverflowHidden(!isOpenFilters);
    }
  };

  // **
  const onApplyFilters = () => {
    onRequestClick();
    dispatch(setCoord(0));
    dispatch(setPage(1));
    dispatch(setFiltersBC());

    if (!isMQ1120) {
      onFiltersBtnClick();
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

  // **
  const onFiltersKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    keySet.add(e.key);

    if (keySet.has("+") && keySet.has("-")) {
      onApplyFilters();
    }
  };

  return (
    <div className={s.filters} data-catalog="filters" onKeyDown={onFiltersKeyDown}>
      {/* <!-- Button --> */}
      <button
        onClick={onFiltersBtnClick}
        className={`${s.button} ${isOpenFilters ? "" : s.buttonHide} ${cs.btn} ${cs.btnMid}`}>
        <Filter aria-hidden="true" />
      </button>

      {/* <!-- Filters --> */}
      <div
        ref={filtersRef}
        onClick={onFiltersOutsideClick}
        onPointerDown={onFiltersDown}
        className={`${s.wrapper} ${isOpenFilters ? "" : s.wrapperHide}`}>
        <div className={s.wrapperInner}>
          <h3 className={cs.srOnly}>
            To apply filters, click on the button "Show" or "Apply filters" or press keys "+" and
            "-" simultaneuosly. It doesn't work for price inputs, but works for price sliders. To
            make price inputs work aswell: press 'shift' + `tab`simulteniously 2 times and then
            press enter to apply price changes.
          </h3>

          {/* <!-- Wrapper top --> */}
          <div className={s.wrapperTop}>
            <span className={s.wrapperTitle}>Shop filters</span>

            <button
              onClick={onFiltersBtnClick}
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
