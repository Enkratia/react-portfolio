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
  showBtnCoord: number;
  isNewRequest: boolean;
  isOpenFilters: boolean;
  onHideFiltersClick: () => void;
  onRequestClick: () => void;
};

const clothes = [
  "Coats",
  "Jackets",
  "Suits",
  "Dresses",
  "Cardigans & sweaters",
  "Sweatshirts & hoodies",
  "T-shirts & tops",
  "Jeans",
];

const size = ["XS", "S", "M", "L", "XL", "Plus Size"];

const material = [
  "Cotton",
  "Synthetics",
  "Nappa leather",
  "Leather",
  "Cashmere",
  "Denim",
  "Batiste",
  "Velours",
  "Veil",
  "Suede",
  "Organza",
];

const brand = [
  "Adidas",
  "Ann Taylor",
  "Armani",
  "Banana Republic",
  "Calvin Klein",
  "Columbia",
  "Bilabong",
  "Birkenstock",
  "Converse",
  "Dockers",
  "Fruit of the loom",
  "Hanes",
  "Jimmy Choo",
  "Levi's",
  "New Balance",
];

const color = [
  "black",
  "blue-gray",
  "yellow",
  "red",
  "dark blue",
  "beige",
  "brown",
  "gray",
  "purple",
  "green",
  "orange",
  "white",
  "pink",
];

export const CatalogFilters: React.FC<CatalogGridProps> = ({
  isMQ1120,
  allData,
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
            <CatalogFilter
              title="clothes"
              types={clothes}
              input={true}
              allData={allData}
              init={true}
            />

            <CatalogFilter title="size" types={size} input={false} allData={allData} />

            <CatalogFilter
              title="color"
              types={color}
              input={false}
              allData={allData}
              theme="color"
            />

            <CatalogFilter title="material" types={material} input={true} allData={allData} />

            <CatalogFilter title="brand" types={brand} input={true} allData={allData} />

            <CatalogFilter
              title="price"
              types={brand}
              input={false}
              allData={allData}
              theme="price"
            />
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
