import React from "react";

import s from "./SkeletonPost.module.scss";
import cs from "../../../../scss/global/_index.module.scss";
import { SkeletonPostNavigation } from "../../../Skeletons";

export const SkeletonPost: React.FC = () => (
  <section className={s.root}>
    <div className={s.container}>
      {/* <!-- Head --> */}
      <div className={`${s.head} ${cs.container} ${cs.containerNarrow}`}>
        {/* <!-- Head title --> */}
        <div className={`${s.title} ${s.skeleton}`}></div>

        {/* <!-- Head bottom --> */}
        <div className={s.bottom}>
          {/* <!-- Data --> */}
          <div className={s.data}>
            {[...Array(3)].map((_, i) => (
              <span key={i} className={`${s.dataItem} ${s.skeleton}`}></span>
            ))}
          </div>

          {/* <!-- Social --> */}
          <div className={`${s.social}`}>
            {[...Array(4)].map((_, i) => (
              <span key={i} className={`${s.socialItem} ${s.skeleton}`}></span>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Wrapper --> */}
      <div className={s.postWrapper}>
        {/* <!-- Post --> */}
        <div className={`${s.post} ${cs.container} ${cs.containerNarrow}`}>
          {/* <!-- Image --> */}
          <div className={`${s.postImageWrapper} ${s.skeleton}`}></div>

          {/* Text */}
          <div className={s.postText}>
            {[...Array(10)].map((_, i) => (
              <span key={i} className={`${s.postTextItem}`}>
                {[...Array(3)].map((_, i) => (
                  <span key={i} className={`${s.postTextWord} ${s.skeleton}`}></span>
                ))}
              </span>
            ))}
          </div>

          {/* Bottom */}
          <div className={s.postBottom}>
            <div className={s.postTags}>
              <div className={`${s.postBottomTitle} ${s.skeleton}`}></div>

              <div className={s.postTagsList}>
                <span className={`${s.postTagsItem} ${s.skeleton}`}></span>
              </div>
            </div>

            <div className={s.postSocial}>
              <div className={`${s.postBottomTitle} ${s.skeleton}`}></div>

              <div className={`${s.social}`}>
                {[...Array(4)].map((_, i) => (
                  <span key={i} className={`${s.socialItem} ${s.skeleton}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Navigation --> */}
      <SkeletonPostNavigation />
    </div>
  </section>
);
