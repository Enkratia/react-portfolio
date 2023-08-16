import React from "react";

import s from "./PaginationMini.module.scss";

type PaginationProps = {
  page: number;
  totalPages: number;
  onIncrementMiniPage: () => void;
  onDecrementMiniPage: () => void;
  onSetLastMiniPage: () => void;
};

export const PaginationMini: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onIncrementMiniPage,
  onDecrementMiniPage,
  onSetLastMiniPage,
}) => {
  return (
    <ul className={`${s.root} ${totalPages === 0 ? s.rootDisabled : ""}`}>
      <li className={`${page === 1 ? s.rootDisabled : ""} ${s.rootPrevMini}`}>
        <a
          onClick={onDecrementMiniPage}
          tabIndex={0}
          aria-label="Previous page."
          aria-disabled={page === 1 ? "true" : "false"}></a>
      </li>
      <li>
        <a
          className={s.rootActiveLink}
          tabIndex={0}
          aria-label={`Page ${page} is your current page.`}>
          {page}
        </a>
      </li>
      <li className={s.rootDivider} aria-hidden="true">
        /
      </li>
      <li>
        <a onClick={onSetLastMiniPage} tabIndex={0} aria-label={`Total pages: ${totalPages}`}>
          {totalPages}
        </a>
      </li>
      <li
        className={`${s.rootNext} ${page === totalPages ? s.rootDisabled : ""} ${s.rootNextMini}`}>
        <a
          onClick={onIncrementMiniPage}
          tabIndex={0}
          aria-label="Next page."
          aria-disabled={page === totalPages ? "true" : "false"}></a>
      </li>
    </ul>
  );
};
