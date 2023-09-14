import React from "react";

import s from "./SkeletonBlog.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { SkeletonPostPreview } from "../../Skeletons";

export const SkeletonBlog: React.FC = () => (
  <section className={s.root}>
    <div className={`${s.container} ${cs.container} ${cs.container40}`}>
      {/* <!-- Articles --> */}
      <div className={s.articles}>
        {/* <!-- Title --> */}
        <div className={`${s.title} ${s.skeleton}`}></div>

        {/* <!-- List --> */}
        <div className={s.list}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className={s.item}>
              <SkeletonPostPreview isBlog={true} />
            </span>
          ))}
        </div>
      </div>

      {/* <!-- Sidebar --> */}
      <div className={s.sidebarWrapperOuter}>
        <div className={s.sidebarWrapper}>
          <div className={s.sidebar}>
            {/* <!-- Search --> */}
            <div className={s.search}>
              <span className={`${s.searchBtn} ${s.skeleton}`}></span>
            </div>

            {/* <!-- Categories --> */}
            <div className={s.categories}>
              <span className={`${s.sidebarTitle} ${s.skeleton}`}></span>

              <div className={s.categoriesList}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`${s.categoriesItem}`}>
                    <span className={`${s.categoriesBtn} ${s.skeleton}`}></span>
                    <span className={`${s.categoriesCount} ${s.skeleton}`}></span>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Featured --> */}
            <div className={s.featured}>
              <span className={`${s.sidebarTitle} ${s.skeleton}`}></span>

              <div className={s.featuredList}>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={s.featuredItem}>
                    <span className={`${s.featuredImage} ${s.skeleton}`}></span>

                    <div className={s.featuredInfo}>
                      <span className={`${s.featuredDate} ${s.skeleton}`}></span>
                      <span className={`${s.featuredName} ${s.skeleton}`}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Tags --> */}
            <div className={s.tags}>
              <div className={`${s.sidebarTitle} ${s.skeleton}`}></div>

              <div className={s.tagsList}>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`${s.tagsItem} ${s.skeleton}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
