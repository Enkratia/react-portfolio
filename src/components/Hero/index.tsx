import React from "react";

import { register } from "swiper/element/bundle";
register();

// Styles
import s from "./Hero.module.scss";
import cs from "../../scss/global/_index.module.scss";

import { Arrow } from "../../iconComponents";

export const Hero: React.FC = () => {
  const swiperRef = React.useRef(null);

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Our collections</h2>

      <div className={s.container}>
        <swiper-container ref={swiperRef} loop={true}>
          <swiper-slide>
            <div className={`${s.slide} ${s.slide1}`} data-even>
              <div className={`${s.content} ${cs.container}`}>
                <span className={s.subtitle}>New Collection</span>

                <p className={s.title}>Menswear 2020</p>

                <div className={s.btns}>
                  <a
                    href="#"
                    className={`${s.button} ${cs.btnReset} ${cs.btn} ${cs.btnLg} ${cs.btnOutline}`}>
                    Shop sale
                  </a>

                  <a href="#" className={`${s.button} ${cs.btnReset} ${cs.btn} ${cs.btnLg}`}>
                    Shop the menswear
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="hero__slide hero__slide--2 swiper-slide" data-odd>
              <div className="hero__content container">
                <span className="hero__subtitle">New in</span>

                <p className="hero__title">Fall-Winter 2021</p>

                <div className="hero__btns">
                  <a href="#" className="hero__button btn btn--lg btn--outline">
                    Shop sale
                  </a>

                  <a href="#" className="hero__button btn btn--lg">
                    Shop the menswear
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="hero__slide hero__slide--3 swiper-slide" data-even>
              <div className="hero__content container">
                <span className="hero__subtitle">Limited edition</span>

                <p className="hero__title">Leather Issue</p>

                <div className="hero__btns">
                  <a href="#" className="hero__button btn btn--lg btn--outline">
                    Shop sale
                  </a>

                  <a href="#" className="hero__button btn btn--lg">
                    Shop the menswear
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="hero__slide hero__slide--4 swiper-slide" data-odd>
              <div className="hero__content container">
                <span className="hero__subtitle">Hottest prices</span>

                <p className="hero__title">Kidswear sales</p>

                <div className="hero__btns">
                  <a href="#" className="hero__button btn btn--lg btn--outline">
                    Shop sale
                  </a>

                  <a href="#" className="hero__button btn btn--lg">
                    Shop the menswear
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>

        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className={s.btnPrev}
          aria-label="Choose previous slide.">
          <Arrow aria-hidden="true" />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className={s.btnNext}
          aria-label="Choose next slide.">
          <Arrow aria-hidden="true" />
        </button>

        {/* <!-- Pagination --> */}
        <div className="hero__pagination-wrapper">
          <div className="hero__pagination container" id="hero-pagination"></div>
        </div>

        {/* <!-- Navigation --> */}
        {/* <button className="hero__button-prev arrow" id="hero-button-prev"></button>

        <button className="hero__button-next arrow" id="hero-button-next"></button> */}
      </div>
    </section>
  );
};
