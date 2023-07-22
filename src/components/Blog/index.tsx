import React from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/backendApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./Blog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Comments } from "../../iconComponents";

// const posts = [
//   {
//     linkUrl: "/",
//     imageUrl: "https://i.ibb.co/TMPS8sP/blog-1.png",
//     title: "Bag Trends for Summer 2020",
//     category: "Fashion",
//     date: "August 24, 2020",
//     comments: [],
//     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus laudantium sit dolorum assumenda magnam! Quod, animi dolores facere ducimus eum, ratione veniam qui omnis excepturi aliquid recusandae rerum maiores. Aperiam impedit cupiditate possimus aliquam fugiat. Harum corrupti non placeat dolorum nesciunt aperiam, est doloribus eligendi consectetur deserunt, illum laudantium doloremque aliquam velit officiis qui temporibus commodi sequi cumque! Molestias, tempore, dicta repudiandae placeat dolore ut a culpa autem commodi vitae voluptate quam pariatur. Molestias modi repellat iste labore culpa, eligendi veritatis quis nihil fugit maxime magni omnis aut doloribus quam laudantium sit molestiae ducimus soluta. Quisquam laboriosam veniam facilis sapiente.",
//   },
//   {
//     linkUrl: "/",
//     imageUrl: "https://i.ibb.co/hRmP0SB/blog-2.png",
//     title: "Top 10 of This Season’s Hottest Sneakers",
//     category: "Lifestyle",
//     date: "July 16, 2020",
//     comments: ["", "", "", ""],
//     text: "Lorem ipsum dolor,  rerum possimus voluptas vel cum ducimus rem nesciunt eos asperiores sequi? Autem sapiente nisi quis corrupti veritatis laborum aliquid totam eligendi voluptates magnam, dolor odit dicta eum perspiciatis officia excepturi beatae quaerat ut mollitia sint voluptatem. Esse praesentium in repellendus? Sunt laudantium accusamus porro saepe earum ab soluta? Ex animi possimus error nostrum nobis facere ab, velit dolores laborum non assumenda? sit amet consectetur adipisicing elit. Vitae consequatur id officiis reprehenderit architecto explicabo, perspiciatis vero porro aliquam nihil eaque commodi, aperiam asperiores quia tempora, minus repudiandae magnam eius corrupti eveniet tenetur facere. Veniam nam iste, adipisci nihil.",
//   },
// ];

export const Blog: React.FC = () => {
  const { data } = useGetPostsQuery();
  if (!data) return;

  let settings = {
    arrows: false,
    dots: false,
    // swipe: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    // responsive: [
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       dots: true,
    //       swipe: true,
    //       swipeToSlide: true,
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 375,
    //     settings: {
    //       dots: true,
    //       swipe: true,
    //       swipeToSlide: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const amendComments = (array: string[]) => {
    if (array.length === 0) {
      return "No comments";
    }

    if (array.length === 1) {
      return "1 comment";
    }

    return array.length + "comments";
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

        <div className={s.slider}>
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

                  <p className={cs.firstLines}>
                    Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt
                    aliquet sit vel, venenatis sit vel, venenatis nulla. Integer bibendum turpis
                    convallis
                  </p>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
