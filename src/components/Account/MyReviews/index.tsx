import qs from "qs";

import React from "react";
import { useNavigate } from "react-router-dom";

import { useGetProductReviewsByIdQuery } from "../../../redux/backendApi";
import { Review } from "../../../components";

import s from "./MyReviews.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown, Convert } from "../../../iconComponents";

const sortOptions = [
  { name: "Newest", property: "date" },
  { name: "Oldest", property: "-date" },
];

export const MyReviews: React.FC = () => {
  let searchOptionIndex, searchLimit;

  const email = "annetteb@example.com"; // Mock
  const defaultLimit = 4;

  const navigate = useNavigate();
  const isNavigate = React.useRef(false);

  if (window.location.search && !isNavigate.current) {
    const search = qs.parse(window.location.search.substring(1));

    if (search.sort && search.order && search.limit) {
      const searchOptionProperty = (search.order === "asc" ? "-" : "") + search.sort;

      searchOptionIndex = sortOptions.findIndex((option) => {
        if (option.property === searchOptionProperty) {
          return true;
        }

        return false;
      });

      searchLimit = +search.limit;
    }
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(searchOptionIndex || 0);
  const [limit, setLimit] = React.useState(searchLimit || defaultLimit);

  const sortOption = sortOptions.filter((option) =>
    option.property === sortOptions[active].property ? true : false,
  )[0];

  const sort = sortOption.property.replace("-", "");
  const order = sortOption.property.startsWith("-") ? "asc" : "desc";

  const request = `?email=${email}&_sort=${sort}&_order=${order}&_limit=${limit}`;

  const requestQS = qs.stringify({
    sort: sort,
    order: order,
    limit: limit,
  });

  React.useEffect(() => {
    if (sortOption.property !== sortOptions[0].property || limit !== defaultLimit) {
      isNavigate.current = true;
    }

    if (isNavigate.current) {
      navigate(`?${requestQS}`);
    }
  }, [sort, order, limit]);

  const { data } = useGetProductReviewsByIdQuery(request);
  if (!data) return;

  const { apiResponse: reviews, totalCount } = data;

  // **
  const onMoreClick = () => {
    setLimit((n) => n + defaultLimit);
  };

  // **
  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpen((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpen((b) => !b);
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionClick = (option: number) => {
    setActive(option);
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      setActive(option);

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div className={s.root}>
      {/* <!-- Top --> */}
      <div className={s.top}>
        <p className={s.title}>My reviews</p>

        <div className={s.sort}>
          <label htmlFor="" className={s.sortTitle}>
            Sort by
          </label>

          <div className={`${s.sortSelectWrapper} ${cs.inputWrapper}`}>
            <div
              className={`${s.sortSelect} ${cs.select} ${cs.input}`}
              role="listbox"
              tabIndex={0}
              onKeyDown={(e) => onSelectKeyDown(e)}
              onClick={onSelectClick}>
              <div className={`${cs.selectHead} ${cs.selectHeadActive}`}>
                <span className={cs.selectSelected}>{sortOptions[active].name}</span>
                {/* <input
                type="hidden"
                className=""
                name=""
                value={sortOptions[active].name}
              /> */}
                <AngleDown aria-hidden="true" />
              </div>
              <div
                className={`${cs.selectWrapper} ${cs.input} ${
                  isOpen ? cs.selectWrapperActive : ""
                }`}>
                <ul className={cs.selectList} data-overlayscrollbars-initialize>
                  {sortOptions.map((option, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${cs.selectItem} ${active === i ? cs.selectItemActive : ""}`}
                      role="option"
                      aria-selected={active === i ? "true" : "false"}
                      onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                      onClick={() => onSelectOptionClick(i)}>
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Orders --> */}
      <ul className={s.reviews}>
        {reviews.map((review) => (
          <li key={review.date} className={s.reviewsItem}>
            <Review review={review} isShowRecipient={false} isShowReply={false} isShowFor={true} />
          </li>
        ))}
      </ul>

      {/* <!-- More --> */}
      <button
        onClick={onMoreClick}
        className={`${s.more} ${reviews.length === totalCount ? s.moreHidden : ""}`}>
        <Convert aria-hidden="true" />
        Load more
      </button>
    </div>
  );
};
