import React from "react";
import { useImmer } from "use-immer";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectCatalogToolbar } from "../../../redux/catalogSlice/selectors";
import { setLimit, setPage, setSort, sortList } from "../../../redux/catalogSlice/slice";
import { SortType } from "../../../redux/catalogSlice/types";

import { Pagination, PaginationMini } from "../../../components";
import { useMediaQuery } from "../../../util/customHooks";

import s from "./CatalogToolbar.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown } from "../../../iconComponents";

type CatalogToolbarProps = {
  totalCount: number;
};

export const CatalogToolbar: React.FC<CatalogToolbarProps> = ({ totalCount }) => {
  const { isMQ876 } = useMediaQuery();
  const [isOpen, setIsOpen] = useImmer(false);

  const dispatch = useAppDispatch();
  const { limit, page, sort } = useAppSelector(selectCatalogToolbar);

  // **
  const getTotalPages = () => {
    return Math.ceil(totalCount / (+limit || 1));
  };

  const totalPages = getTotalPages();

  const onPageChange = ({ selected }: Record<string, number>) => {
    dispatch(setPage(selected + 1));
  };

  // **
  const onIncrementMiniPage = () => {
    if (page >= totalPages) return;
    dispatch(setPage(page + 1));
  };

  const onDecrementMiniPage = () => {
    if (page <= 1) return;
    dispatch(setPage(page - 1));
  };

  const onSetLastMiniPage = () => {
    dispatch(setPage(totalPages));
  };

  // **
  const onCountBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      dispatch(setLimit("12"));
      dispatch(setPage(1));
    }
  };

  const onCountDownClick = () => {
    if (+limit <= 1) return;
    dispatch(setLimit((+limit - 1).toString()));
    dispatch(setPage(1));
  };

  const onCountUpClick = () => {
    if (+limit >= 1000) return;
    dispatch(setLimit((+limit + 1).toString()));
    dispatch(setPage(1));
  };

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D|^0$/gi, "");
    dispatch(setLimit(value));
    dispatch(setPage(1));
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

  const onSelectOptionClick = (option: SortType) => {
    dispatch(setSort(option));
    dispatch(setPage(1));
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: SortType) => {
    if (e.key === "Enter") {
      dispatch(setSort(option));
      dispatch(setPage(1));

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
              <span className={cs.selectSelected}>{sort.name}</span>
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
                {sortList.map((sortItem, i) => (
                  <li
                    key={i}
                    tabIndex={0}
                    className={`${cs.selectItem} ${
                      sortItem.sortProperty === sort.sortProperty ? cs.selectItemActive : ""
                    }`}
                    role="option"
                    aria-selected={sortItem.sortProperty === sort.sortProperty ? "true" : "false"}
                    onKeyDown={(e) => onSelectOptionKeyDown(e, sortItem)}
                    onClick={() => onSelectOptionClick(sortItem)}>
                    {sortItem.name}
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
              value={limit}
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

        {isMQ876 ? (
          <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
        ) : (
          <PaginationMini
            page={page}
            totalPages={totalPages}
            onIncrementMiniPage={onIncrementMiniPage}
            onDecrementMiniPage={onDecrementMiniPage}
            onSetLastMiniPage={onSetLastMiniPage}
          />
        )}
      </div>
    </div>
  );
};
