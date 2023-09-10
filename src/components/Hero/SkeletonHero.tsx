// import ContentLoader from "react-content-loader";

import s from "./Hero.module.scss";
import cs from "../../scss/global/_index.module.scss";

export const HeroSkeleton = () => (
  <section className={s.root}>
    <div className={s.container}>
      <div className={`${s.slide} `}>
        <div className={`${s.content} ${cs.container} ${cs.container40}`}>
          <span
            className={`${s.subtitle} ${s.skeleton}`}
            data-skeleton-text="################"></span>

          <p className={`${s.title} ${s.skeleton}`} data-skeleton-text="#############"></p>
          <div className={s.btns}>
            <a
              className={`${s.button} ${cs.btnReset} ${cs.btn} ${cs.btnLg} ${cs.btnOutline} ${s.skeleton}`}
              data-skeleton-text="########"></a>
            <a
              className={`${s.button} ${cs.btnReset} ${cs.btn} ${cs.btnLg} ${s.skeleton}`}
              data-skeleton-text="################"></a>
          </div>
        </div>
      </div>

      {/* <!-- Pagination --> */}
      <div className={s.paginationWrapper}>
        <div className={`${s.pagination} ${cs.container} ${cs.container40}`}>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                className={`${s.paginationBullet} ${s.skeleton}`}
                data-skeleton-text="##"></button>
            ))}
        </div>
      </div>
    </div>
  </section>
);
