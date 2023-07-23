import React from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Blog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Comments } from "../../iconComponents";

export const Blog: React.FC = () => {
  const { data } = useGetPostsQuery();
  if (!data) return;

  let settings = {
    arrows: false,
    dots: false,
    swipe: false,
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

  const amendComments = (array: string[]) => {
    if (array.length === 0) {
      return "No comments";
    }

    if (array.length === 1) {
      return "1 comment";
    }

    return array.length + " comments";
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.head}>
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Fashion blog</h2>

          <Link to={"/"} className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            View blog
          </Link>
        </div>

        <div className={`${s.slider} ${cs.flatPagination}`}>
          <Slider {...settings}>
            {data.map((post) => (
              <article key={post.id} className={cs.article}>
                <div className={cs.articleBox}>
                  <Link to={post.linkUrl}>
                    <img src={post.imageUrl} alt="Article image." className={cs.articleImage} />
                  </Link>
                </div>

                <div className={cs.articleText}>
                  <p className={cs.articleTitle}>
                    <Link to={post.linkUrl} className={cs.articleLink}>
                      {post.title}
                    </Link>
                  </p>

                  <ul className={cs.articleData}>
                    <li className={cs.articleItem}>
                      <Link to={post.categoryLink} className={cs.articleInfo}>
                        {post.category}
                      </Link>
                    </li>

                    <li className={cs.articleItem}>
                      <span className={cs.articleInfo}>{post.date}</span>
                    </li>

                    <li className={cs.articleItem}>
                      <span className={cs.articleInfo}>
                        <Comments aria-hidden="true" />
                        <span className={cs.articleInfo}>{amendComments(post.comments)}</span>
                      </span>
                    </li>
                  </ul>

                  <p className={cs.firstLines}>{post.text.substring(0, 200)}</p>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
