import React from "react";
import { Link } from "react-router-dom";

import { PostType } from "../../../redux/backendApi/types";

import { formatDate } from "../../../util/customFunctions";

import s from "./Post.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import pp from "../../../components/PostPreview/PostPreview.module.scss";
import { Comments, Facebook, Instagram, Linkedin, Twitter } from "../../../iconComponents";

type ArticleType = {
  post: PostType;
};

export const Article: React.FC<ArticleType> = ({ post }) => {
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
      <div className={s.container}>
        {/* <!-- Head --> */}
        <div className={`${s.head} ${cs.container} ${cs.containerNarrow}`}>
          {/* <!-- Head title --> */}
          <h2 className={`${s.title} ${cs.sectionTitle}`}>{post.title}</h2>

          {/* <!-- Head bottom --> */}
          <div className={s.bottom}>
            {/* <!-- Data --> */}

            <ul className={pp.data}>
              <li className={`${pp.item} ${pp.itemPost}`}>
                <Link to={post.categoryLink} className={pp.info}>
                  {post.category}
                </Link>
              </li>

              <li className={`${pp.item} ${pp.itemPost}`}>
                <span className={pp.info}>{formatDate(post.date)}</span>
              </li>

              <li className={`${pp.item} ${pp.itemPost}`}>
                <span className={pp.info}>
                  <Comments aria-hidden="true" />
                  <span className={pp.info}>{amendComments(post.comments)}</span>
                </span>
              </li>
            </ul>

            {/* <!-- Social --> */}
            <ul className={`${s.social} ${cs.social} ${cs.ulReset}`}>
              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with facebook.">
                  <Facebook aria-hidden="true" />
                </a>
              </li>

              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with instagram.">
                  <Instagram aria-hidden="true" />
                </a>
              </li>

              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with twitter.">
                  <Twitter aria-hidden="true" />
                </a>
              </li>

              <li className={cs.socialItem}>
                <a
                  href="#"
                  target="_blank"
                  className={`${cs.socialLink} ${cs.socialLinkLight}`}
                  aria-label="Sign in with linkedIn.">
                  <Linkedin aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Wrapper --> */}
        <div className={s.postWrapper}>
          {/* <!-- Post --> */}
          <div className={`${s.post} ${cs.container} ${cs.containerNarrow}`}>
            {/* <!-- Image --> */}
            <div className={s.postImageWrapper}>
              <img src={post.imageUrl} alt="Post image." className={s.postImage} />
            </div>

            <p className={`${s.postLead} ${s.postDark} ${s.postBold}`}>
              Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui
              odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor
              nullam diam quis est hendrerit ac euismod.
            </p>

            <p>
              At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et
              sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci,
              consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non
              nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus
              vel.
            </p>

            <p>
              Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat
              lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam
              urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam
              tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra.
            </p>

            <blockquote className={`${s.postLead} ${s.postDark} ${s.postBold}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id
              turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam
              eros. Vel accumsan at elit neque, ipsum.
            </blockquote>

            <p>
              Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae
              mus blandit in neque amet non fringilla blandit:
            </p>

            <ul>
              <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>

              <li>Vulputate placerat amet pulvinar lorem nisl.</li>

              <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>

              <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
            </ul>

            <p>
              Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo.
              Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit
              aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim
              aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus.
              Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis
              curabitur tellus convallis eget netus vitae.
            </p>

            {/* <!-- Post bottom --> */}
            <div className={s.postBottom}>
              {post.tags.length > 0 && (
                <div className={s.postTags}>
                  <h3 className={`${s.postTagsTitle} ${s.postBottomTitle}`}>Tags:</h3>

                  <ul className={s.postTagsList}>
                    {post.tags.map((tag) => (
                      <li className={s.postTagsItem}>
                        <Link
                          to="/"
                          className={`${s.postTagsTag} ${cs.btn} ${cs.btnOutline} ${cs.btnTag}`}>
                          {`#${tag}`}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={s.postSocial}>
                <h3 className={`${s.postSocialTitle} ${s.postBottomTitle}`}>Share:</h3>

                <ul className={`${s.socialList} ${cs.social} ${cs.ulReset}`}>
                  <li className={cs.socialItem}>
                    <a
                      href="#"
                      target="_blank"
                      className={`${cs.socialLink} ${cs.socialLinkLight}`}
                      aria-label="Sign in with facebook.">
                      <Facebook aria-hidden="true" />
                    </a>
                  </li>

                  <li className={cs.socialItem}>
                    <a
                      href="#"
                      target="_blank"
                      className={`${cs.socialLink} ${cs.socialLinkLight}`}
                      aria-label="Sign in with instagram.">
                      <Instagram aria-hidden="true" />
                    </a>
                  </li>

                  <li className={cs.socialItem}>
                    <a
                      href="#"
                      target="_blank"
                      className={`${cs.socialLink} ${cs.socialLinkLight}`}
                      aria-label="Sign in with twitter.">
                      <Twitter aria-hidden="true" />
                    </a>
                  </li>

                  <li className={cs.socialItem}>
                    <a
                      href="#"
                      target="_blank"
                      className={`${cs.socialLink} ${cs.socialLinkLight}`}
                      aria-label="Sign in with linkedIn.">
                      <Linkedin aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Navigation --> */}
        <div className="single-post__navigation post-nav container container--narrow">
          {/* <!-- Prev --> */}
          <a href="#" className="post-nav__link">
            <h3 className="post-nav__title">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
              </svg>

              <span className="post-nav__title-text">Prev Post</span>
            </h3>

            <div className="post-nav__box">
              <div className="post-nav__image-wrapper">
                <img src="./img/blog-6.jpg" alt="Blog image." className="post-nav__image" />
              </div>

              <div className="post-nav__info">
                <time className="post-nav__date">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
                  </svg>
                  April 9, 2020
                </time>

                <h6 className="post-nav__name">Best Fashion Instagrams of the Week</h6>
              </div>
            </div>
          </a>

          {/* <!-- Next --> */}
          <a href="#" className="post-nav__link">
            <h3 className="post-nav__title">
              <span className="post-nav__title-text">Next Post</span>

              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#arrow" aria-hidden="true"></use>
              </svg>
            </h3>

            <div className="post-nav__box">
              <div className="post-nav__info">
                <time className="post-nav__date">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
                  </svg>
                  March 12, 2020
                </time>

                <h6 className="post-nav__name">Top 10 Looks From the Venice Film Festival</h6>
              </div>

              <div className="post-nav__image-wrapper">
                <img src="./img/blog-7.jpg" alt="Blog image." className="post-nav__image" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
