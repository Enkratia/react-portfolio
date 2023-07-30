import React from "react";

import { ProductsType } from "../../../redux/backendApi/types";

import { CatalogFilter1 } from "../CatalogFIlter1";

import s from "./CatalogFilters.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Cross, Filter } from "../../../iconComponents";

type CatalogGridProps = {
  data: ProductsType;
};

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

          {/* <!-- Filter1 (Clothes) --> */}
          {/* <div className={`${s.filter} ${s.filterShow}`}>
            <div className={s.filterTop}>
              <h3 className={s.filterTitle}>Clothes</h3>

              <button
                className={`${s.filter} ${s.filterShow} ${cs.toggle}`}
                aria-label="Show or hide the list of the categories."></button>
            </div>


            <div className={s.filterBottom}>
              <div className={s.filterSearch}>
                <input
                  type="text"
                  className={`${s.filterSearchInput} ${cs.input}`}
                  placeholder="Write the clothes type."
                />

                <button className={s.filterSearchBtn} aria-label="Search written in input clothes.">
                  <Search aria-hidden="true" />
                </button>
              </div>

              <ul className={s.filterList} data-overlayscrollbars-initialize>
                <li className={s.filterItem}>
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <Check aria-hidden={true} />

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className={s.filterName}>Coats</span>
                  <span className={s.filterCount}>(16)</span>
                </li>

                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Jackets</span>

                  <span className="filter__count">(12)</span>
                </li>

                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Suits</span>

                  <span className="filter__count">(5)</span>
                </li>

                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Dresses</span>

                  <span className="filter__count">(11)</span>
                </li>


                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Cardigans & sweaters</span>

                  <span className="filter__count">(18)</span>
                </li>

                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Sweatshirts & hoodies</span>

                  <span className="filter__count">(21)</span>
                </li>

                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">T-shirts & tops</span>

                  <span className="filter__count">(17)</span>
                </li>

                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Pants</span>

                  <span className="filter__count">(14)</span>
                </li>
              </ul>
            </div>
          </div> */}

          <CatalogFilter1 data={data} />

          {/* <!-- Filter2 (Size) --> */}
          <div className="sidebar-filters__filter filter">
            {/* <!-- Filter-top --> */}
            <div className="filter__top">
              <h6 className="filter__title">Size</h6>

              <button
                className="filter__toggle c-toggle filter__toggle--show"
                aria-label="Show or hide the list of the categories."></button>
            </div>

            {/* <!-- Filter-bottom --> */}
            <div className="filter__bottom">
              <ul className="filter__list" data-overlayscrollbars-initialize>
                {/* <!-- Item1--> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">XS</span>

                  <span className="filter__count">(16)</span>
                </li>

                {/* <!-- Item2 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">S</span>

                  <span className="filter__count">(12)</span>
                </li>

                {/* <!-- Item3 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">M</span>

                  <span className="filter__count">(5)</span>
                </li>

                {/* <!-- Item4 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">L</span>

                  <span className="filter__count">(11)</span>
                </li>

                {/* <!-- Item5 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">XL</span>

                  <span className="filter__count">(18)</span>
                </li>

                {/* <!-- Item6 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Plus size</span>

                  <span className="filter__count">(21)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Filter3 (Color) --> */}
          <div className="sidebar-filters__filter filter">
            {/* <!-- Filter-top --> */}
            <div className="filter__top">
              <h6 className="filter__title">Color</h6>

              <button
                className="filter__toggle c-toggle filter__toggle--show"
                aria-label="Show or hide the list of the categories."></button>
            </div>

            {/* <!-- Filter-bottom --> */}
            <div className="filter__bottom">
              <div className="filter__colors-wrapper" data-overlayscrollbars-initialize>
                <ul className="filter__colors colors">
                  {/* <!-- Item1--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Black"
                      aria-label="Choose black color."></button>

                    <span className="filter__color-name">Black</span>
                  </li>

                  {/* <!-- Item2--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Blue-gray"
                      aria-label="Choose blue-gray color."></button>

                    <span className="filter__color-name">Blue-gray</span>
                  </li>

                  {/* <!-- Item3--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Yellow"
                      aria-label="Choose yellow color."></button>

                    <span className="filter__color-name">Yellow</span>
                  </li>

                  {/* <!-- Item4--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Red"
                      aria-label="Choose red color."></button>

                    <span className="filter__color-name">Red</span>
                  </li>

                  {/* <!-- Item5--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Dark-blue"
                      aria-label="Choose dark-blue color."></button>

                    <span className="filter__color-name">Dark blue</span>
                  </li>

                  {/* <!-- Item6--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Beige"
                      aria-label="Choose beige color."></button>

                    <span className="filter__color-name">Beige</span>
                  </li>

                  {/* <!-- Item7--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Brown"
                      aria-label="Choose brown color."></button>

                    <span className="filter__color-name">Brown</span>
                  </li>

                  {/* <!-- Item8--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Gray"
                      aria-label="Choose gray color."></button>

                    <span className="filter__color-name">Gray</span>
                  </li>

                  {/* <!-- Item9--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Purple"
                      aria-label="Choose purple color."></button>

                    <span className="filter__color-name">Purple</span>
                  </li>

                  {/* <!-- Item10--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Green"
                      aria-label="Choose green color."></button>

                    <span className="filter__color-name">Green</span>
                  </li>

                  {/* <!-- Item11--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Orange"
                      aria-label="Choose orange color."></button>

                    <span className="filter__color-name">Orange</span>
                  </li>

                  {/* <!-- Item12--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="White"
                      aria-label="Choose white color."></button>

                    <span className="filter__color-name">White</span>
                  </li>

                  {/* <!-- Item13--> */}
                  <li className="filter__color colors__item">
                    <button
                      className="filter__color-btn colors__button"
                      data-color="Pink"
                      aria-label="Choose pink color."></button>

                    <span className="filter__color-name">Pink</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Filter4 (Material) --> */}
          <div className="sidebar-filters__filter filter">
            {/* <!-- Filter-top --> */}
            <div className="filter__top">
              <h6 className="filter__title">Material</h6>

              <button
                className="filter__toggle c-toggle filter__toggle--show"
                aria-label="Show or hide the list of the categories."></button>
            </div>

            {/* <!-- Filter-bottom --> */}
            <div className="filter__bottom">
              <div className="filter__search">
                <input
                  type="text"
                  className="filter__search-input input"
                  placeholder="Search the clothes type"
                />

                <button className="filter__search-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#search" aria-hidden="true"></use>
                  </svg>
                </button>
              </div>

              <ul className="filter__list" data-overlayscrollbars-initialize>
                {/* <!-- Item1--> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Cotton</span>

                  <span className="filter__count">(162)</span>
                </li>

                {/* <!-- Item2 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Synthetics</span>

                  <span className="filter__count">(12)</span>
                </li>

                {/* <!-- Item3 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Nappa leather</span>

                  <span className="filter__count">(26)</span>
                </li>

                {/* <!-- Item4 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Leather</span>

                  <span className="filter__count">(5)</span>
                </li>

                {/* <!-- Item5 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Cashmere</span>

                  <span className="filter__count">(41)</span>
                </li>

                {/* <!-- Item6 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Denim</span>

                  <span className="filter__count">(48)</span>
                </li>

                {/* <!-- Item7 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Batiste</span>

                  <span className="filter__count">(17)</span>
                </li>

                {/* <!-- Item8 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Velours</span>

                  <span className="filter__count">(3)</span>
                </li>

                {/* <!-- Item9 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Veil</span>

                  <span className="filter__count">(9)</span>
                </li>

                {/* <!-- Item10 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Suede</span>

                  <span className="filter__count">(4)</span>
                </li>

                {/* <!-- Item11 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Organza</span>

                  <span className="filter__count">(1)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Filter5 (Brand) --> */}
          <div className="sidebar-filters__filter filter">
            {/* <!-- Filter-top --> */}
            <div className="filter__top">
              <h6 className="filter__title">Brand</h6>

              <button
                className="filter__toggle c-toggle filter__toggle--show"
                aria-label="Show or hide the list of the categories."></button>
            </div>

            {/* <!-- Filter-bottom --> */}
            <div className="filter__bottom">
              <div className="filter__search">
                <input
                  type="text"
                  className="filter__search-input input"
                  placeholder="Search the clothes type"
                />

                <button className="filter__search-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#search" aria-hidden="true"></use>
                  </svg>
                </button>
              </div>

              <ul className="filter__list" data-overlayscrollbars-initialize>
                {/* <!-- Item1--> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Adidas</span>

                  <span className="filter__count">(162)</span>
                </li>

                {/* <!-- Item2 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Ann Taylor</span>

                  <span className="filter__count">(12)</span>
                </li>

                {/* <!-- Item3 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Armani</span>

                  <span className="filter__count">(26)</span>
                </li>

                {/* <!-- Item4 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Banana Republic</span>

                  <span className="filter__count">(5)</span>
                </li>

                {/* <!-- Item5 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Calvin Klein</span>

                  <span className="filter__count">(41)</span>
                </li>

                {/* <!-- Item6 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Columbia</span>

                  <span className="filter__count">(48)</span>
                </li>

                {/* <!-- Item7 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Bilabong</span>

                  <span className="filter__count">(27)</span>
                </li>

                {/* <!-- Item8 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Birkenstock</span>

                  <span className="filter__count">(10)</span>
                </li>

                {/* <!-- Item9 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Converse</span>

                  <span className="filter__count">(176)</span>
                </li>

                {/* <!-- Item10 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Dockers</span>

                  <span className="filter__count">(54)</span>
                </li>

                {/* <!-- Item11 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Fruit of the loom</span>

                  <span className="filter__count">(239)</span>
                </li>

                {/* <!-- Item12 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Hanes</span>

                  <span className="filter__count">(92)</span>
                </li>

                {/* <!-- Item13 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Jimmy Choo</span>

                  <span className="filter__count">(17)</span>
                </li>

                {/* <!-- Item14 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">Levi's</span>

                  <span className="filter__count">(361)</span>
                </li>

                {/* <!-- Item15 --> */}
                <li className="filter__item">
                  <label
                    className="filter__checkbox custom-checkbox"
                    tabIndex={0}
                    role="checkbox"
                    aria-checked="false">
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <use href="./img/sprite.svg#check"></use>
                    </svg>

                    <input type="checkbox" className="custom-checkbox__input" />
                  </label>

                  <span className="filter__name">New Balance</span>

                  <span className="filter__count">(218)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Filter6 (Price) --> */}
          <div className="sidebar-filters__filter filter">
            {/* <!-- Filter-top --> */}
            <div className="filter__top">
              <h6 className="filter__title">Price</h6>

              <button
                className="filter__toggle c-toggle filter__toggle--show"
                aria-label="Show or hide the list of the categories."></button>
            </div>

            {/* <!-- Filter-bottom --> */}
            <div className="filter__bottom">
              <div className="filter__slider">
                {/* <!--Slider range --> */}
                <div className="filter__slider-range" id="filter-slider-range"></div>

                {/* <!-- Slider inputs --> */}
                <div className="filter__slider-inputs">
                  <input type="text" className="filter__slider-input input" />
                  <div className="filter__slider-divider"></div>
                  <input type="text" className="filter__slider-input input" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Apply filters button --> */}
          <button className="sidebar-filters__apply btn btn--mid btn--outline">
            Apply filters
          </button>
        </div>

        {/* <!-- Show button --> */}
        <button className="sidebar-filters__show" aria-label="Show all chosen categories.">
          Show
        </button>
      </div>
    </div>
  );
};
