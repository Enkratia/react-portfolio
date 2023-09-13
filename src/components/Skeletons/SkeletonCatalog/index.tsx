import React from "react";

import s from "./SkeletonCatalog.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { SkeletonProduct } from "../../Skeletons";

const SkeletonCatalogFilterClosed: React.FC = () => (
  <div className={`${s.filter}`}>
    {/* <!-- Filter-top --> */}
    <span className={s.filterTop}>
      <span className={`${s.filterTitle} ${s.skeleton}`}></span>
      <span className={`${s.filterToggle} ${s.skeleton}`}></span>
    </span>
  </div>
);

const SkeletonCatalogFilterOpen: React.FC = () => (
  <div className={`${s.filter}`}>
    {/* <!-- Filter-top --> */}
    <span className={s.filterTop}>
      <span className={`${s.filterTitle} ${s.skeleton}`}></span>
      <span className={`${s.filterToggle} ${s.skeleton}`}></span>
    </span>

    {/* <!-- Filter-bottom --> */}
    <div className={s.filterBottom}>
      <div className={s.filterSearch}>
        <span className={`${s.filterSearchBtn} ${s.skeleton}`}></span>
      </div>

      <div>
        <div className={s.filterList}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={s.filterItem}>
              <span className={`${s.filterCheckbox} ${s.skeleton}`}></span>

              <div className={s.filterLabel}>
                <span className={`${s.filterName} ${s.skeleton}`}></span>
                <span className={`${s.filterCount} ${s.skeleton}`}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SkeletonCatalogFilters: React.FC = () => (
  <div className={s.filters} data-catalog="filters">
    {/* <!-- Button --> */}
    <span className={`${s.filtersButton} ${s.skeleton}`}></span>

    {/* <!-- Filters --> */}
    <div className={`${s.filtersWrapper}`}>
      <div className={s.filtersWrapperInner}>
        <div className={s.filtersWrapperBottom}>
          <SkeletonCatalogFilterOpen />
          {[...Array(6)].map((_, i) => (
            <SkeletonCatalogFilterClosed key={i} />
          ))}
        </div>

        {/* <!-- Apply filters button --> */}
        <div className={s.filtersApplyWrapper}>
          <span className={`${s.filtersApply} ${s.skeleton}`}></span>
        </div>
      </div>
    </div>
  </div>
);

const SkeletonCatalogGrid: React.FC = () => (
  <div className={s.grid} data-catalog="grid">
    {[...Array(12)].map((_, i) => (
      <SkeletonProduct key={i} />
    ))}
  </div>
);

const SkeletonCatalogToolbar: React.FC = () => (
  <div className={s.toolbar} data-catalog="toolbar">
    <div className={`${s.toolbarContainer} ${cs.container} ${cs.container40}`}>
      <div className={s.toolbarSort}>
        <span className={`${s.toolbarTitle} ${s.skeleton}`}></span>
        <span className={`${s.toolbarSortSelect} ${s.skeleton}`}></span>
      </div>

      <div className={s.toolbarShow}>
        <span className={`${s.toolbarTitle} ${s.skeleton}`}></span>
        <span className={`${s.toolbarItemInputNum} ${s.skeleton}`}></span>
      </div>

      <span className={`${s.toolbarPagination} ${s.skeleton}`}></span>
    </div>
  </div>
);

export const SkeletonCatalog: React.FC = () => (
  <section className={s.root}>
    <div className={`${s.container} ${cs.container} ${cs.container40}`}>
      <SkeletonCatalogFilters />
      <SkeletonCatalogToolbar />
      <SkeletonCatalogGrid />
      <SkeletonCatalogToolbar />
    </div>
  </section>
);
