import React from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./RelatedPosts.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { PostPreview, SkeletonPostPreview } from "../../../components";

type RelatedPostsProps = {
  category: string | undefined;
};

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ category }) => {
  const clickableRef = React.useRef(true);
  const sliderRef = React.useRef<Slider>(null);

  const { data, isError } = useGetPostsQuery(`?category=${category}`, { skip: !category });

  if (isError) {
    console.warn("Failed to load related posts");
  }

  const posts = data?.apiResponse;
  if (posts && posts.length < 2) return;

  let settings = {
    swipe: true,
    arrows: false,
    dots: false,
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
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Related posts</h2>

          <Link
            to=""
            preventScrollReset
            className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            View all posts
          </Link>
        </div>

        <div className={`${s.slider} ${cs.flatPagination} ${!posts ? cs.none : ""}`}>
          <Slider ref={sliderRef} swipeEvent={swipeEvent} {...settings}>
            {!posts
              ? [...Array(2)].map((_, i) => <SkeletonPostPreview key={i} />)
              : posts.map((post) => <PostPreview key={post.id} post={post} />)}
          </Slider>
        </div>
      </div>
    </section>
  );
};
