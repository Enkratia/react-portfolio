import qs from "qs";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useGetPostsQuery } from "../../redux/backendApi";
import { PostType } from "../../redux/backendApi/types";

import { Pagination, PaginationMini, PostPreview, SkeletonBlog } from "../../components";
import { useMediaQuery } from "../../util/customHooks";
import { formatDate, setOverflowHidden } from "../../util/customFunctions";

import s from "./Blog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Calendar, Clock, Cross, Search } from "../../iconComponents";

type Categories = (string | number)[];

const limit = 3;
let tags = [];
let categoriesResult = [] as Categories[];

export const Blog: React.FC = () => {
  const isNavigate = React.useRef(false);
  const navigate = useNavigate();
  const { search: locationSearch, state: locationState } = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const { isMQ876 } = useMediaQuery();

  let searchPage, searchTags, searchCtg: string | undefined, searchSearch;
  if (locationSearch) {
    const search = window.location.search.substring(1);
    const searchQS = qs.parse(search);

    searchPage = (searchQS.page as string) ? Number(searchQS.page) : undefined;
    searchCtg = searchQS.category as string;
    searchTags = searchQS.tags as string[];
    searchSearch = searchQS.search as string;
  }

  const [activeTags, setActiveTags] = React.useState<string[]>(searchTags || []);
  const [activeCtg, setActiveCtg] = React.useState(searchCtg || "All");
  const [page, setPage] = React.useState(searchPage || 1);
  const [search, setSearch] = React.useState(searchSearch || "");

  // **
  const tagsReq = `&tags_like=${tags.length > 0 ? activeTags.join("|") : ""}`;
  const categoryReq =
    activeCtg !== "All" || locationState === "post-preview-category-link"
      ? `category=${activeCtg}`
      : "";
  const searchReq = search.length > 0 ? `q=${search}` : "";
  const request = `?${searchReq}${categoryReq}${tagsReq}&_page=${page}&_limit=${limit}`;

  const requestQS = qs.stringify({
    search,
    page,
    category: activeCtg,
    tags: activeTags,
  });

  React.useEffect(() => {
    if (!searchCtg) return;
    setActiveCtg(searchCtg);

    setActiveTags([]);
    setPage(1);
    isNavigate.current = false;
  }, [searchCtg]);

  React.useEffect(() => {
    if (isNavigate.current) {
      navigate(`?${requestQS}`);
    }
  }, [search, page, activeCtg, activeTags]);

  const { data: dataAll, isError: isErrorAll } = useGetPostsQuery("");
  const { data: dataFiltered, isError: isErrorFiltered } = useGetPostsQuery(request);

  const { data: dataCategory, isError: isErrorCategory } = useGetPostsQuery(`?${categoryReq}`, {
    skip: activeCtg === "All",
  }); // get tags when category clicked

  if (isErrorAll || isErrorFiltered || isErrorCategory) {
    console.log("Failed to load posts");
    alert("Failed to load posts");
  }

  const postsAll = dataAll?.apiResponse;

  const posts = dataFiltered?.apiResponse;
  const totalCount = dataFiltered?.totalCount;

  const postsCategory = dataCategory?.apiResponse;

  if (!postsAll || !posts || !totalCount) {
    return <SkeletonBlog />;
  }

  // **
  const getPostsResource = () => {
    if (postsCategory && activeCtg !== "All") {
      return postsCategory;
    }

    if (activeCtg === "All") {
      return postsAll;
    }

    return posts;
  };

  const tagsAll = getPostsResource().flatMap((post) => {
    return post.tags;
  });

  tags = [...new Set(tagsAll)];

  // **
  let featured = [] as PostType[];

  for (let i = 0; i < postsAll.length; i++) {
    if (postsAll[i].isFeatured === true) {
      featured = [...featured, postsAll[i]];
    }

    if (featured.length === 3) break;
  }

  // **
  let categories = {} as Record<string, number>;
  let categoriesAll = {} as Record<string, number>;

  for (let i = 0; i < postsAll.length; i++) {
    const name = postsAll[i].category;

    categories[name] = categories[name] ? ++categories[name] : 1;
    categoriesAll["All"] = categoriesAll["All"] ? ++categoriesAll["All"] : 1;
  }

  categoriesResult = [...Object.entries(categoriesAll), ...Object.entries(categories)];

  // **
  const onSidebarOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const sidebar = e.currentTarget.firstElementChild;

    if (sidebar && sidebar.contains(e.target as Node)) {
      return;
    }

    setIsSidebarOpen((b) => !b);
    setOverflowHidden(!isSidebarOpen);
  };

  const onSidebarBtnClick = () => {
    setIsSidebarOpen((b) => !b);
    setOverflowHidden(!isSidebarOpen);
  };

  // **
  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    clearInterval(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSearch(searchValue);

      setActiveCtg("All");
      setActiveTags([]);
      setPage(1);
      isNavigate.current = true;
    }, 150);
  };

  // **
  const onCategoryClick = (name: string) => {
    setActiveCtg(name);

    setActiveTags([]);
    setPage(1);
    isNavigate.current = true;
  };

  // **
  const toggleTag = (tag: string) => {
    setActiveTags((o) => {
      if (o.includes(tag)) {
        return o.filter((_tag) => _tag !== tag);
      }

      return [...o, tag];
    });

    setPage(1);
    isNavigate.current = true;
  };

  // **
  const getTotalPages = () => {
    return Math.ceil(totalCount / (limit || 1));
  };

  const totalPages = getTotalPages();

  const onPageChange = ({ selected }: Record<string, number>) => {
    setPage(selected + 1);
    isNavigate.current = true;
  };

  // // **
  const onIncrementMiniPage = () => {
    if (page >= totalPages) return;
    setPage(page + 1);
    isNavigate.current = true;
  };

  const onDecrementMiniPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
    isNavigate.current = true;
  };

  const onSetLastMiniPage = () => {
    setPage(totalPages);
    isNavigate.current = true;
  };

  // **
  const scrollbarOptions = {
    scrollbars: {
      theme: s.osThemeBlogSidebar,
    },
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
        <div
          onClick={onSidebarOutsideClick}
          className={`${s.sidebarWrapperOuter} ${isSidebarOpen ? s.sidebarWrapperOuterShow : ""}`}>
          <div className={s.sidebarWrapper}>
            <div className={s.sidebarWrapperTop}>
              Sidebar
              <button
                onClick={onSidebarBtnClick}
                className={s.sidebarWrapperClose}
                aria-label="Close sidebar.">
                <Cross aria-hidden="true" />
              </button>
            </div>

            <OverlayScrollbarsComponent
              element={"aside"}
              className={s.sidebar}
              options={scrollbarOptions}
              defer>
              {/* <!-- Search --> */}
              <form className={s.search} onSubmit={(e) => e.preventDefault()}>
                <input
                  onChange={onSearchInput}
                  type="text"
                  className={`${s.searchInput} ${cs.input}`}
                  placeholder="Search the blog..."
                  name="blog-search-input"
                  defaultValue={search}
                />

                <button type="button" className={s.searchBtn} aria-label="Search the posts.">
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
                        activeCtg === name ? s.categoriesItemActive : ""
                      }`}>
                      <button
                        onClick={() => onCategoryClick(name as string)}
                        className={s.categoriesBtn}>
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
                        <Link to={`${post.id}`} className={s.featuredImageLink}>
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

                          <Link to={`${post.id}`} className={s.featuredName}>
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
            </OverlayScrollbarsComponent>
          </div>
        </div>

        {/* <!-- Sidebar button --> */}
        <div className={s.sidebarBtnWrapper}>
          <button onClick={onSidebarBtnClick} className={`${s.sidebarBtn} ${cs.btn} ${cs.btnMid}`}>
            <Calendar aria-hidden="true" />
            Sidebar
          </button>
        </div>
      </div>
    </section>
  );
};
