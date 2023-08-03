// import Pagination from "rc-pagination";
import ReactPaginate from "react-paginate";

import React from "react";
import { useImmer } from "use-immer";

// import { useGetCatalogProductsQuery } from "../../../redux/backendApi";

import s from "./CatalogToolbar.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown } from "../../../iconComponents";

const sorts = ["Popularity", "Low - High Price", "High - Low Price", "A - Z order", "Z - A order"];

export const CatalogToolbar: React.FC = () => {
  const [count, setCount] = React.useState("12");
  const [isOpen, setIsOpen] = useImmer(false);
  const [active, setActive] = useImmer(0);

  // **
  const onCountBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setCount("12");
    }
  };

  const onCountDownClick = () => {
    if (+count <= 1) return;
    setCount((n) => (+n - 1).toString());
  };

  const onCountUpClick = () => {
    if (+count >= 1000) return;
    setCount((n) => (+n + 1).toString());
  };

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let count = e.currentTarget.value.replace(/\D|^0$/gi, "");
    setCount(count);
  };

  // **
  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpen((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpen((b) => !b);
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);
        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionClick = (option: number) => {
    setActive(option);
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      setActive(option);

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div className={s.root} data-catalog="toolbar">
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Select Sort --> */}
        <div className={s.sort}>
          <label htmlFor="" className={s.title}>
            Sort by
          </label>

          <div
            className={`${s.sortSelect} ${cs.select} ${cs.input}`}
            role="listbox"
            tabIndex={0}
            onKeyDown={onSelectKeyDown}
            onClick={onSelectClick}>
            <div className={`${cs.selectHead} ${cs.selectHeadActive}`}>
              <span className={cs.selectSelected}>{sorts[active]}</span>
              {/* <input
              type="hidden"
              className="catalog-sort-input"
              name="catalog-sort-input"
              value={sorts[active]}
            /> */}
              <AngleDown aria-hidden="true" />
            </div>
            <div
              className={`${cs.selectWrapper} ${cs.input} ${isOpen ? cs.selectWrapperActive : ""}`}>
              <ul className={cs.selectList} data-overlayscrollbars-initialize>
                {sorts.map((sort, i) => (
                  <li
                    key={i}
                    tabIndex={0}
                    className={`${cs.selectItem} ${active === i ? cs.selectItemActive : ""}`}
                    role="option"
                    aria-selected={active === i ? "true" : "false"}
                    onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                    onClick={() => onSelectOptionClick(i)}>
                    {sort}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Select Show --> */}
        <div className={s.show}>
          <span className={s.title}>Show</span>

          <div className={`${s.itemInputNum} ${cs.inputNum}`}>
            <input
              onBlur={onCountBlur}
              onChange={onCountChange}
              type="text"
              className={`${cs.inputNumInput} ${cs.input}`}
              value={count}
              aria-label="Write the count of products on page."
              maxLength={4}
            />

            <div className={`${cs.inputNumBtns} ${cs.inputNumBtnsLg}`}>
              <button
                type="button"
                onClick={onCountUpClick}
                className={`${cs.inputNumBtn} ${cs.inputNumBtnLg}`}
                aria-label="Increment number of products on page."></button>

              <button
                type="button"
                onClick={onCountDownClick}
                className={`${cs.inputNumBtn} ${cs.inputNumBtnLg}`}
                aria-label="Decrement number of products on page."></button>
            </div>
          </div>

          <span className={s.text}>products per page</span>
        </div>

        {/* <!-- Pagination --> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={10}
          previousLabel=""
          renderOnZeroPageCount={null}
          className={s.pag}
        />

        {/* <!-- Pagination mini (for small devices) --> */}
        {/* <ul className="toolbar__pagination-mini tool-pag-mini">
          <li
            className="tool-pag-mini__item tool-pag-mini__item--inactive"
            data-toolpag="arrow-left">
            <a href="#" className="tool-pag-mini__link" aria-label="Go to the previous page.">
              <svg
                className="tool-pag-mini__arrow tool-pag__arrow--left"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
              </svg>
            </a>
          </li>

          <li className="tool-pag-mini__item" data-toolpag="current">
            <a href="#" className="tool-pag__link">
              1
            </a>
          </li>

          <li className="tool-pag-mini__item">/</li>

          <li className="tool-pag-mini__item" data-toolpag="total">
            <a href="#" className="tool-pag__link">
              10
            </a>
          </li>

          <li className="tool-pag-mini__item" data-toolpag="arrow-right">
            <a href="#" className="tool-pag-mini__link" aria-label="Go to the next page.">
              <svg
                className="tool-pag-mini__arrow tool-pag-mini__arrow--right"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
              </svg>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
