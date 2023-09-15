import React from "react";

import s from "./SkeletonContactUs.module.scss";

export const SkeletonContactUs: React.FC = () => (
  <div className={s.root}>
    <div className={s.content}>
      <div className={`${s.title} ${s.skeleton}`}></div>

      {/* <!-- Contacts --> */}
      <div className={s.contacts}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={s.contactsItem}>
            <span className={`${s.contactsIcon} ${s.skeleton}`}></span>
            <span className={`${s.contactsLink} ${s.skeleton}`}></span>
          </div>
        ))}
      </div>

      {/* <!-- Form --> */}
      <div className={s.form}>
        <div className={`${s.title} ${s.skeleton}`}></div>

        {/* <!-- Fields --> */}
        <div className={s.fields}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={s.field}>
              <span className={`${s.label} ${s.skeleton}`}></span>
              <span className={`${s.input} ${s.skeleton}`}></span>
            </div>
          ))}

          <div className={s.field}>
            <span className={`${s.label} ${s.skeleton}`}></span>
            <span className={`${s.textarea} ${s.skeleton}`}></span>
          </div>
        </div>

        {/* <!-- Submit --> */}
        <span className={`${s.submit} ${s.skeleton}`}></span>
      </div>
    </div>
  </div>
);
