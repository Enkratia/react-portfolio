import React from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./BlogPreview.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { PostPreview } from "..";

export const BlogPreview: React.FC = () => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  const { data } = useGetPostsQuery("");
  if (!data) return;

  const { apiResponse: posts } = data;

  let settings = {
    arrows: false,
    dots: false,
    swipe: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          swipe: true,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (event: MouseEvent) => {
    // Для swipeEvent
    if (!clickableRef.current) {
      event.stopPropagation();
      event.preventDefault();
    }
    clickableRef.current = true;
  };

  const swipeEvent = () => {
    // Фикс (слайдер воспринимает свайп, как клик)
    if (sliderRef?.current?.innerSlider?.list) {
      sliderRef.current.innerSlider.list.onclick = handleClick;
      clickableRef.current = false;
    }
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.head}>
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Fashion blog</h2>

          <Link
            to="/fashion-blog"
            className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            View blog
          </Link>
        </div>

        <div className={`${s.slider} ${cs.flatPagination}`}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {posts.map((post) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
