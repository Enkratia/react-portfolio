import React from "react";

import s from "./SkeletonTrackOrder.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const SkeletonTrackOrder: React.FC = () => (
  <section className={s.root}>
    <div className={`${s.container} ${cs.container} ${cs.container40}`}>
      {/* <!-- Form --> */}
      <div className={s.form}>
        <span className={`${s.formTitle} ${s.skeleton}`}></span>
        <span className={`${s.formDescr} ${s.skeleton}`}></span>

        {/* <!-- FIeld --> */}
        <div className={s.formField}>
          <span className={`${s.formLabel} ${s.skeleton}`}></span>
          <span className={`${s.formFieldWrapper} ${s.skeleton}`}></span>
        </div>

        {/* Info */}
        <div className={s.formInfo}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={s.formInfoItem}>
              <span className={`${s.formInfoName} ${s.skeleton}`}></span>
              <span className={`${s.formInfoData} ${s.skeleton}`}></span>
            </div>
          ))}
        </div>

        {/* <!-- Notifier --> */}
        <div className={s.formNotifier}>
          <span className={`${s.formNotifierCheckbox} ${s.skeleton}`}></span>
          <span className={`${s.formNotifierText} ${s.skeleton}`}></span>
        </div>
      </div>
      {/* <!-- Chart --> */}
      <div className={s.chartWrapper}>
        <table className={s.chart}>
          <thead></thead>

          <tbody className={s.chartTbody}>
            {[...Array(9)].map((_, i) => (
              <tr key={i} className={`${s.chartStage}`}>
                {[...Array(4)].map((_, j) => (
                  <td key={j} className={`${s.chartInfo} ${s.skeleton}`}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
