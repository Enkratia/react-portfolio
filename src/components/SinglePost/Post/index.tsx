import qs from "qs";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { PostType } from "../../../redux/backendApi/types";
import { useAppDispatch } from "../../../redux/store";
import { setBreadcrumbsTitle } from "../../../redux/breadcrumbsSlice/slice";

import { PostNavigation } from "../../../components";
import { formatDate } from "../../../util/customFunctions";

import s from "./Post.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import pp from "../../../components/PostPreview/PostPreview.module.scss";
import "../../../scss/global/post.scss";
import { Comments, Facebook, Instagram, Linkedin, Twitter } from "../../../iconComponents";

const social = [
  {
    title: "facebook",
    linkUrl: "/",
    icon: <Facebook aria-hidden="true" />,
  },
  {
    title: "instagram",
    linkUrl: "/",
    icon: <Instagram aria-hidden="true" />,
  },
  {
    title: "twitter",
    linkUrl: "/",
    icon: <Twitter aria-hidden="true" />,
  },
  {
    title: "linkedin",
    linkUrl: "/",
    icon: <Linkedin aria-hidden="true" />,
  },
];

type ArticleType = {
  post: PostType;
};

export const Post: React.FC<ArticleType> = ({ post }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(setBreadcrumbsTitle(post.title));

    return () => {
      dispatch(setBreadcrumbsTitle(undefined));
    };
  }, [post.title]);

  const postHTML = { __html: post.text };

  // **
  const onCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = e.currentTarget;
    const category = link.innerText.trim();

    const requestQS = qs.stringify({
      category: category,
    });

    navigate(`/fashion-blog?${requestQS}`);
  };

  const onTagClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = e.currentTarget;
    const tag = link.innerText.trim().replace("#", "");

    const requestQS = qs.stringify({
      tags: [tag],
    });

    navigate(`/fashion-blog?${requestQS}`);
  };

  // **
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
                <Link onClick={onCategoryClick} to={post.categoryLink} className={pp.info}>
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
              {social.map((item, i) => (
                <li key={i} className={cs.socialItem}>
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    className={`${cs.socialLink} ${cs.socialLinkLight}`}
                    aria-label={`Sign in with ${item.title}.`}>
                    {item.icon}
                  </a>
                </li>
              ))}
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

            {/* Text */}
            <div data-post-css dangerouslySetInnerHTML={postHTML} />

            {/* Bottom */}
            <div className={s.postBottom}>
              {post.tags.length > 0 && (
                <div className={s.postTags}>
                  <h3 className={`${s.postTagsTitle} ${s.postBottomTitle}`}>Tags:</h3>

                  <ul className={s.postTagsList}>
                    {post.tags.map((tag, i) => (
                      <li key={i} className={s.postTagsItem}>
                        <Link
                          onClick={onTagClick}
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
                  {social.map((item, i) => (
                    <li key={i} className={cs.socialItem}>
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        className={`${cs.socialLink} ${cs.socialLinkLight}`}
                        aria-label={`Sign in with ${item.title}.`}>
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Navigation --> */}
        <PostNavigation post={post} />
      </div>
    </section>
  );
};
