import React from "react";
import { Link } from "react-router-dom";

import { register } from "swiper/element/bundle";
import { SwiperRef } from "swiper/react";
register();

import { useGetHeroContentQuery } from "../../redux/backendApi";

import s from "./Hero.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { SkeletonHero } from "../Skeletons";
import { Arrow } from "../../iconComponents";

export const Hero: React.FC = () => {
  const { data, isLoading, isError } = useGetHeroContentQuery();
  const [slide, setSlide] = React.useState(1);
  const swiperRef = React.useRef<SwiperRef>(null);

  React.useEffect(() => {
    if (!data) return;

    const swiperParams = {
      effect: "fade",
      loop: true,
      on: {
        slideChange() {
          setSlide((swiperRef.current?.swiper.realIndex ?? 0) + 1);
        },
      },
    };

    Object.assign(swiperRef.current, swiperParams);
    swiperRef.current?.initialize();
  }, [data]);

  React.useEffect(() => {
    // свайпер блочит контент, если effect="fade" // не использовать свайпер
    if (!data) return;

    const slides = swiperRef.current?.querySelectorAll("[data-swiper-slide-index]");
    slides.forEach((el: HTMLDivElement) => {
      (el as HTMLDivElement).style.pointerEvents = "none";
    });

    const activeSlide = swiperRef.current?.querySelector(".swiper-slide-active") as HTMLDivElement;
    if (activeSlide) {
      activeSlide.style.pointerEvents = "auto";
    }
  }, [data, slide]);

  if (!isError) {
    console.warn("Failed to load hero section data.");
  }

  if (isLoading || !data) {
    return <SkeletonHero />;
  }

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Our collections</h2>

      <div className={s.container}>
        <swiper-container ref={swiperRef} init={false}>
          {data.map((obj, i) => (
            <swiper-slide key={obj.id}>
              <div
                className={`${s.slide} ${s[`slide${i + 1}`]}`}
                data-even={i % 2 ? "false" : "true"}>
                <div className={`${s.content} ${cs.container} ${cs.container40}`}>
                  <span className={s.subtitle}>{obj.subtitle}</span>

                  <p className={s.title}>{obj.title}</p>

                  <div className={s.btns}>
                    <Link
                      to={obj.link1.url}
                      className={`${s.button} ${cs.btnReset} ${cs.btn} ${cs.btnLg} ${cs.btnOutline}`}>
                      {obj.link1.text}
                    </Link>

                    <Link
                      to={obj.link2.url}
                      className={`${s.button} ${cs.btnReset} ${cs.btn} ${cs.btnLg}`}>
                      {obj.link2.text}
                    </Link>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>

        {/* Navigation */}
        <button
          onClick={() => {
            swiperRef.current?.swiper.slidePrev();
          }}
          className={`${s.btnPrev} ${cs.btnReset} ${cs.arrow}`}
          aria-label="Choose previous slide.">
          <Arrow aria-hidden="true" />
        </button>
        <button
          onClick={() => {
            swiperRef.current?.swiper.slideNext();
          }}
          className={`${s.btnNext} ${cs.btnReset} ${cs.arrow}`}
          aria-label="Choose next slide.">
          <Arrow aria-hidden="true" />
        </button>

        {/* <!-- Pagination --> */}
        <div className={s.paginationWrapper}>
          <div className={`${s.pagination} ${cs.container} ${cs.container40}`}>
            {data.map((obj) => (
              <button
                key={obj.id}
                onClick={() => {
                  swiperRef.current?.swiper.slideToLoop(obj.id - 1);
                }}
                className={`${s.paginationBullet} ${
                  slide === obj.id ? s.paginationBulletActive : ""
                }`}
                aria-label={`Choose slide ${obj.id}`}>{`0${obj.id}`}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
