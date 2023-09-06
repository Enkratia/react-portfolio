import React from "react";

import { ProductReviewType, ProductType } from "../../../redux/backendApi/types";
import {
  setReviewsSort,
  setReviewsPage,
  sortNames,
} from "../../../redux/productReviewsSlice/slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

import { ModalReview, Pagination, PaginationMini, Product, Review } from "../../../components";
import { getStarRating, setOverflowHidden } from "../../../util/customFunctions";
import { useMediaQuery } from "../../../util/customHooks";

import s from "./ProductReviews.module.scss";
import pr from "../../../components/Product/Product.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown, Star2 } from "../../../iconComponents";
import { selectProductReviews } from "../../../redux/productReviewsSlice/selectors";

type ProductReviewsProps = {
  activeTab: number;
  product: ProductType;
  selectRef: React.RefObject<HTMLDivElement>;
  productReviews: ProductReviewType[];
  reviewsCount: number;
};

export const ProductReviews: React.FC<ProductReviewsProps> = ({
  activeTab,
  product,
  selectRef,
  productReviews,
  reviewsCount,
}) => {
  const { isMQ876 } = useMediaQuery();
  const dispatch = useAppDispatch();
  const { sortIndex, limit, page } = useAppSelector(selectProductReviews);

  const [isOpenSelect, setIsOpenSelect] = React.useState(false);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [recipient, setRecipient] = React.useState<string>();

  const [starCount, topRating, sumRating, percentage] = getStarRating(product.rating);
  let percentageWidths = [] as string[];

  const onOpenModalClick = () => {
    setIsModalOpen((b) => !b);
    setOverflowHidden(!isModalOpen);
    setRecipient(undefined);
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

  // **
  const getReviewsCount = () => {
    if (reviewsCount === 1) return "1 review";
    return `${reviewsCount} reviews`;
  };

  // **
  const calcBarWidth = (num: number, total: number) => {
    const percentage = 50 + ((num - 2) / total) * 100;
    return percentage.toFixed(2) + "%";
  };

  const getBarsWidths = () => {
    const productRatings = Object.values(product.rating);

    for (let elem in productRatings) {
      switch (productRatings[elem]) {
        case 0:
          percentageWidths.unshift("0");
          break;
        case 1:
          percentageWidths.unshift("25%");
          break;
        case 2:
          percentageWidths.unshift("50%");
          break;
        default:
          percentageWidths.unshift(calcBarWidth(productRatings[elem], sumRating));
      }
    }
  };
  getBarsWidths();

  // **
  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpenSelect((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpenSelect(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpenSelect((b) => !b);
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpenSelect(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionClick = (option: number) => {
    dispatch(setReviewsSort(option));
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      dispatch(setReviewsSort(option));

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div
      className={`${s.root} ${activeTab === 2 ? s.rootShow : ""}`}
      id="product-reviews"
      role="tabpanel">
      {/* <!-- Left --> */}
      <div className={s.left}>
        {/* <!-- Info --> */}
        <div className={s.info}>
          {/* <!-- Rate --> */}
          <div className={s.infoRate}>
            <h3 className={s.infoTitle}>{getReviewsCount()}</h3>

            {starCount > 0 && (
              <>
                <div className={`${pr.rating} ${s.infoRating}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star2
                      key={i}
                      className={`${pr.ratingIcon} ${starCount > i ? pr.ratingIconActive : ""}`}
                    />
                  ))}
                </div>

                <div className={s.infoRecommended}>
                  <span
                    className={
                      s.infoNumbers
                    }>{`${topRating} out of ${sumRating} (${percentage}%)`}</span>
                  <span className={s.infoDescr}>Customers recommended this product</span>
                </div>
              </>
            )}
          </div>

          {/* <!-- Progress --> */}
          {starCount > 0 && (
            <ul className={s.infoProgress}>
              {percentageWidths.map((width, i) => (
                <li key={i} className={s.infoProgressItem}>
                  <span className={s.infoProgressGrade}>{percentageWidths.length - i}</span>
                  <span
                    className={`${s.infoProgressBar} ${
                      s[`infoProgressBar${percentageWidths.length - i}`]
                    }`}
                    data-pb={product.rating[percentageWidths.length - i]}
                    style={{ "--progress-width": width } as React.CSSProperties}></span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* <!-- Tool-bar --> */}
        <div className={s.toolbar}>
          <button onClick={onOpenModalClick} className={`${s.toolbarBtn} ${cs.btn} ${cs.btnMid}`}>
            Leave a review
          </button>
          {isModalOpen && (
            <ModalReview
              recipient={recipient}
              isModalOpen={isModalOpen}
              setIsModalOpen={() => setIsModalOpen((b) => !b)}
            />
          )}

          <div className={s.toolbarSort}>
            <span className={s.toolbarTitle}>Sort by</span>

            <div
              className={`${s.toolbarSelect} ${cs.select} ${cs.input}`}
              role="listbox"
              tabIndex={0}
              onKeyDown={onSelectKeyDown}
              onClick={onSelectClick}>
              <div className={`${cs.selectHead} ${cs.selectHeadActive}`}>
                <span className={cs.selectSelected}>{sortNames[sortIndex].name}</span>
                {/* <input
                    type="hidden"
                    className=""
                    name=""
                    value={selectSizes[activeOption]}
                  /> */}
                <AngleDown aria-hidden="true" />
              </div>
              <div
                className={`${cs.selectWrapper} ${cs.input} ${
                  isOpenSelect ? cs.selectWrapperActive : ""
                }`}>
                <ul className={cs.selectList}>
                  {sortNames.map((sortName, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${cs.selectItem} ${sortIndex === i ? cs.selectItemActive : ""}`}
                      role="option"
                      aria-selected={sortIndex === i ? "true" : "false"}
                      onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                      onClick={() => onSelectOptionClick(i)}>
                      {sortName.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Review --> */}
        <div className={s.review}>
          {productReviews.length > 0 &&
            productReviews.map((review, i) => (
              <Review
                key={i}
                review={review}
                isModalOpen={isModalOpen}
                setRecipient={(s) => setRecipient(s)}
                setIsModalOpen={() => setIsModalOpen((b) => !b)}
              />
            ))}
        </div>

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

      {/* <!-- Right --> */}
      <div className={s.right}>
        <Product
          obj={product}
          mode="lg"
          isSlider={false}
          isPermanentHover={true}
          isCommon={true}
          selectRef={selectRef}
        />
      </div>
    </div>
  );
};
