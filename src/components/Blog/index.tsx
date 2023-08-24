import React from "react";
import { Link } from "react-router-dom";

import { useGetPostsQuery } from "../../redux/backendApi";
import { PostType } from "../../redux/backendApi/types";

import { Pagination, PaginationMini, PostPreview } from "../../components";
import { useMediaQuery } from "../../util/customHooks";
import { formatDate } from "../../util/customFunctions";

import s from "./Blog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Calendar, Clock, Cross, Search } from "../../iconComponents";

export const Blog: React.FC = () => {
  const { isMQ876 } = useMediaQuery();
  const [activeTags, setActiveTags] = React.useState<string[]>([]);
  const [activeCtg, setActiveCtg] = React.useState(0);

  const { data: posts } = useGetPostsQuery("");
  if (!posts || posts.length === 0) return;

  // **
  const tagsAll = posts.flatMap((post) => {
    return post.tags;
  });

  const tags = [...new Set(tagsAll)];

  // **
  let featured = [] as PostType[];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].isFeatured === true) {
      featured = [...featured, posts[i]];
    }

    if (featured.length === 3) break;
  }

  // **
  let categories = {} as Record<string, number>;
  let categoriesAll = {} as Record<string, number>;

  for (let i = 0; i < posts.length; i++) {
    const name = posts[i].category;

    categories[name] = categories[name] ? ++categories[name] : 1;
    categoriesAll["All"] = categoriesAll["All"] ? ++categoriesAll["All"] : 1;
  }

  const categoriesResult = [...Object.entries(categoriesAll), ...Object.entries(categories)];

  // **
  const toggleTag = (tag: string) => {
    setActiveTags((o) => {
      if (o.includes(tag)) {
        return o.filter((_tag) => _tag !== tag);
      }

      return [...o, tag];
    });
  };

  // **
  const getTotalPages = () => {
    return Math.ceil(reviewsCount / (limit || 1));
  };

  const totalPages = getTotalPages();

  const onPageChange = ({ selected }: Record<string, number>) => {
    dispatch(setReviewsPage(selected + 1));
  };

  // **
  const onIncrementMiniPage = () => {
    if (page >= totalPages) return;
    dispatch(setReviewsPage(page + 1));
  };

  const onDecrementMiniPage = () => {
    if (page <= 1) return;
    dispatch(setReviewsPage(page - 1));
  };

  const onSetLastMiniPage = () => {
    dispatch(setReviewsPage(totalPages));
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Articles --> */}
        <div className={s.articles}>
          {/* <!-- Title --> */}
          <h2 className={`${s.title} ${cs.sectionTitle}`}>Fashion blog</h2>

          {/* <!-- List --> */}
          <ul className={s.list}>
            {posts.map((post) => (
              <li key={post.id} className={s.item}>
                <PostPreview post={post} isBlog={true} />
              </li>
            ))}
          </ul>

          {/* <!-- Pagination --> */}
          <div className={`${s.pagWrapper} ${totalPages === 0 ? s.pagWrapperFlat : ""}`}>
            {isMQ876 ? (
              <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
            ) : (
              <PaginationMini
                page={page}
                totalPages={totalPages}
                onIncrementMiniPage={onIncrementMiniPage}
                onDecrementMiniPage={onDecrementMiniPage}
                onSetLastMiniPage={onSetLastMiniPage}
              />
            )}
          </div>
        </div>

        {/* <!-- Sidebar --> */}
        <div className={s.sidebarWrapper}>
          <div className={s.sidebarWrapperTop}>
            Sidebar
            <button className={s.WrapperClose} aria-label="Close sidebar.">
              <Cross aria-hidden="true" />
            </button>
          </div>

          <aside className={s.sidebar} data-overlayscrollbars-initialize>
            {/* <!-- Search --> */}
            <form className={s.search}>
              <input
                type="text"
                className={`${s.searchInput} ${cs.input}`}
                placeholder="Search the blog..."
                name="blog-search-input"
              />

              <button className={s.searchBtn} aria-label="Search the posts.">
                <Search aria-hidden="true" />
              </button>
            </form>

            {/* <!-- Categories --> */}
            <div className={s.categories}>
              <h3 className={`${s.categoriesTitle} ${s.sidebarTitle}`}>Blog Categories</h3>

              <ul className={s.categoriesList}>
                {categoriesResult.map(([name, count], i) => (
                  <li
                    key={i}
                    className={`${s.categoriesItem} ${
                      activeCtg === i ? s.categoriesItemActive : ""
                    }`}>
                    <button onClick={() => setActiveCtg(i)} className={s.categoriesBtn}>
                      {name}
                    </button>

                    <span className={s.categoriesCount}>{count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* <!-- Featured --> */}
            {featured.length > 0 && (
              <div className={s.featured}>
                <h3 className={`${s.featuredTitle} ${s.sidebarTitle}`}>Featured Posts</h3>

                <ul className={s.featuredList}>
                  {featured.map((post) => (
                    <li key={post.id} className={s.featuredItem}>
                      <Link to={post.linkUrl} className={s.featuredImageLink}>
                        <img
                          src={post.imageUrl}
                          alt="Featured post image."
                          className={s.featuredImage}
                        />
                      </Link>

                      <div className={s.featuredInfo}>
                        <span className={s.featuredDate}>
                          <Clock aria-hidden="true" />
                          {formatDate(post.date)}
                        </span>

                        <Link to={post.linkUrl} className={s.featuredName}>
                          {post.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* <!-- Tags --> */}
            {tags.length > 0 && (
              <div className={s.tags}>
                <h3 className={`${s.tagsTitle} ${s.sidebarTitle}`}>Tags</h3>

                <ul className={s.tagsList}>
                  {tags.map((tag) => (
                    <li key={tag} className={s.tagsItem}>
                      <button
                        onClick={() => toggleTag(tag)}
                        className={`${s.tagsBtn} ${cs.btn} ${cs.btnOutline} ${cs.btnTag} ${
                          activeTags.includes(tag) ? cs.btnTagActive : ""
                        }`}>
                        {`#${tag}`}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* <!-- Sidebar button --> */}
        <button className={`${s.sidebarBtn} ${cs.btn} ${cs.btnMid}`}>
          <Calendar aria-hidden="true" />
          Sidebar
        </button>
      </div>
    </section>
  );
};
