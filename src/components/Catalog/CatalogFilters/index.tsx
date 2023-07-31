import React from "react";

import { ProductsType } from "../../../redux/backendApi/types";

import { CatalogFilter } from "../../../components";

import s from "./CatalogFilters.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Cross, Filter } from "../../../iconComponents";

type CatalogGridProps = {
  data: ProductsType;
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

export const CatalogFilters: React.FC<CatalogGridProps> = ({ data }) => {
  return (
    <div className={s.filters} id="catalog-filters">
      {/* <!-- Button --> */}
      <button className={`${s.button} ${cs.btn} ${cs.btnMid}`}>
        <Filter aria-hidden="true" />

        <span className={s.buttonText}>Hide filters</span>
      </button>

      {/* <!-- Filters --> */}
      <div className={s.wrapper}>
        <div className={s.wrapperInner} data-overlayscrollbars-initialize>
          <h3 className={cs.srOnly}>
            To apply filters click on the button "Show" or "Apply filters" or press keys "+" and "-"
            simultaneuosly.
          </h3>

          {/* <!-- Wrapper top --> */}
          <div className={s.wrapperTop}>
            <span className={s.wrapperTitle}>Shop filters</span>

            <button className={s.wrapperClose} aria-label="Close shop filters menu.">
              <Cross aria-hidden="true" />
            </button>
          </div>

          <CatalogFilter title="Clothes" types={clothes} input={true} data={data} init={true} />

          <CatalogFilter title="Size" types={size} input={false} data={data} />

          <CatalogFilter title="Color" types={color} input={false} data={data} theme="color" />

          <CatalogFilter title="Material" types={material} input={true} data={data} />

          <CatalogFilter title="Brand" types={brand} input={true} data={data} />

          <CatalogFilter title="Price" types={brand} input={false} data={data} theme="price" />

          {/* <!-- Apply filters button --> */}
          <button className={`${s.apply} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            Apply filters
          </button>
        </div>

        {/* <!-- Show button --> */}
        <button className={s.show} aria-label="Show all chosen categories.">
          Show
        </button>
      </div>
    </div>
  );
};
