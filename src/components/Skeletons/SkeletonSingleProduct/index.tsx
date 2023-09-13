import React from "react";

import s from "./SkeletonSingleProduct.module.scss";

export const SkeletonSingleProductDetails = () => (
  <div className={s.root}>
    {/* <!-- Left --> */}
    <div className={s.left}>
      {/* <!-- Section1 --> */}
      <section className={s.section}>
        <span className={s.title}></span>

        <span className={s.descr}></span>

        <ul className={s.list}>
          {[...Array(6)].map((_, i) => (
            <li key={i} className={s.item}></li>
          ))}
        </ul>
      </section>

      {/* <!-- Section2 --> */}
      <section className={s.section}>
        <span className={s.title}></span>

        <ul className={s.list}>
          {[...Array(3)].map((_, i) => (
            <li key={i} className={s.item}></li>
          ))}
        </ul>
      </section>

      {/* <!-- Section3 --> */}
      <section className={s.section}>
        <span className={s.title}></span>

        <ul className={s.list}>
          {[...Array(4)].map((_, i) => (
            <li key={i} className={s.itemCare}></li>
          ))}
        </ul>
      </section>
    </div>

    {/* <!-- Right --> */}
    <div className={s.right}>
      <Product
        obj={product}
        mode="lg"
        isSlider={false}
        isPermanentHover={true}
        isCommon={true}
        selectRef={selectRef}
      />
    </div>
  </div>
);

export const SkeletonSingleProductGeneral: React.FC = () => (
  <div className={s.root}>
    {/* <!-- Left --> */}
    <div className={s.left}>
      {/* <!-- Slider --> */}
      <div className={s.sliderWrapper}>
        <div className={s.slider}>
          <span className={`${s.sliderSlide} ${s.skeleton}`}></span>
        </div>
      </div>

      {/* <!-- Minislider --> */}
      <div className={s.miniSliderWrapper}>
        <div className={s.miniSlider}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`${s.miniSliderSlide}`}>
              <span className={`${s.miniSliderImage} ${s.skeleton}`}></span>
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* <!--- Right ---> */}
    <div className={s.right}>
      <div className={s.details}>
        {/* <!-- Prices --> */}
        <div className={`${s.prices} ${s.skeleton}`}></div>

        {/* <!-- Discount --> */}
        <div className={`${s.discount} ${s.skeleton}`}></div>

        {/* <!-- Feedback --> */}
        <div className={s.feedback}>
          {/* <!-- Rating --> */}
          <div className={`${s.rating}`}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`${s.ratingIcon} ${s.skeleton}`}></span>
            ))}
          </div>

          {/* <!-- Reviews --> */}
          <span className={`${s.reviews} ${s.skeleton}`}></span>
        </div>
      </div>

      {/* <!-- Color --> */}
      <div className={s.color}>
        <span className={`${s.colorLabel} ${s.skeleton}`}></span>

        <div className={s.colorList}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`${s.colorItem} ${s.skeletonCircle}`}></span>
          ))}

          <span className={`${s.colorItem} ${s.skeleton}`}></span>
        </div>
      </div>

      {/* <!-- Size --> */}
      <div className={s.sizes}>
        {/* <!-- Size-select & label --> */}
        <div className={s.sizesWrapper}>
          <span className={`${s.sizesLabel} ${s.skeleton}`}></span>

          {/* <!-- Size select --> */}
          <span className={`${s.sizesInput} ${s.skeleton}`}></span>
        </div>

        {/* <!-- Size chart button --> */}
        <span className={`${s.sizesBtn} ${s.skeleton}`}></span>
      </div>

      {/* <!-- CTA --> */}
      <div className={s.cta}>
        <span className={`${s.inputNum} ${s.skeleton}`}></span>
        <span className={`${s.btnCartWrapper} ${s.skeleton}`}></span>
        <span className={`${s.favorite} ${s.skeleton}`}></span>
      </div>

      {/* <!-- Accordion #1 --> */}
      <div className={s.accordion}>
        <div className={`${s.accordionTop}`}>
          <span className={`${s.accordionTitle} ${s.skeleton}`}></span>
          <span className={`${s.accordionToggle} ${s.skeleton}`}></span>
        </div>
      </div>

      {/* <!-- Accordion #2 --> */}
      <div className={s.accordion}>
        <div className={`${s.accordionTop}`}>
          <span className={`${s.accordionTitle} ${s.skeleton}`}></span>
          <span className={`${s.accordionToggle} ${s.skeleton}`}></span>
        </div>
      </div>

      {/* <!-- Social --> */}
      <div className={s.share}>
        <span className={`${s.shareTitle} ${s.skeleton}`}></span>

        <div className={s.social}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`${s.socialItem} ${s.skeleton}`}></span>
          ))}
        </div>
      </div>

      {/* <!-- Payment --> */}
      <div className={s.payment}>
        {[...Array(3)].map((_, i) => (
          <span key={i} className={`${s.paymentBox} ${s.skeleton}`}></span>
        ))}
      </div>
    </div>
  </div>
);
