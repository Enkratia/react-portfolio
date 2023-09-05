import React from "react";
import { Link } from "react-router-dom";
import { useGetMegamenuLinksQuery } from "../../../redux/backendApi";

import { linkNames } from "../../../components";

import s from "./HeaderMegamenu.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Arrow } from "../../../iconComponents";

const count = 5; // Количество ссылок из меню для показа на мобильных устройствах по умолчанию

type HeaderMegamenuProps = {
  index: number;
  isMQ1024: boolean;
};

export const HeaderMegamenu: React.FC<HeaderMegamenuProps> = ({ index, isMQ1024 }) => {
  const { data } = useGetMegamenuLinksQuery();
  const ulRef = React.useRef<HTMLUListElement>(null);
  const shrinkedHeight = React.useRef(0);

  React.useEffect(() => {
    if (!isMQ1024 && ulRef.current) {
      const liElement = ulRef.current.firstElementChild;

      if (liElement) {
        const liHeight = window.getComputedStyle(liElement).getPropertyValue("height");
        const liMargintBot = window.getComputedStyle(liElement).getPropertyValue("margin-bottom");
        const srinkedUlHeight =
          (+liHeight.replace("px", "") + +liMargintBot.replace("px", "")) * count;
        shrinkedHeight.current = srinkedUlHeight;

        const categories = document.querySelectorAll<HTMLUListElement>("[data-category]");
        categories.forEach((el) => {
          if (el.children.length > 5) {
            el.setAttribute("data-category", "5");
            el.style.height = srinkedUlHeight + "px";
          }
        });
      }
    } else {
      const categories = document.querySelectorAll<HTMLUListElement>("[data-category]");
      categories.forEach((el) => {
        const btn = el.nextElementSibling as HTMLButtonElement;
        if (btn) {
          btn.innerText = "...";
        }

        el.setAttribute("data-category", "true");
        el.style.height = "auto";
      });
    }
  }, [data, isMQ1024]);

  if (!data) return;

  const showMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const list = btn.previousElementSibling as HTMLUListElement;

    if (!list) return;

    if (btn.innerText === "...") {
      btn.innerText = "..";
      list.style.height = "auto";
      return;
    }

    btn.innerText = "...";
    list.style.height = shrinkedHeight.current + "px";
  };

  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container}`}>
        <div className={s.categories}>
          {/* <!-- Non-category --> */}
          <div className={s.nonCategory}>
            <ul ref={ulRef} className={s.list}>
              {data[index].nonCategory.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link to={category.url} className={`${s.link} ${category.red ? s.linkRed : ""}`}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- Category1 (Clothes) --> */}
          <div className={s.category}>
            <h3 className={s.title}>
              <Link to={`/${linkNames[index]}/clothes`}>Clothes</Link>
            </h3>

            <ul className={s.list} data-category>
              {data[index].clothes.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link
                    to={`/${linkNames[index]}/clothes?type%5B0%5D=${category.title.toLowerCase()}`}
                    className={s.link}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={showMore}
              className={`${s.more} ${cs.btnReset}`}
              aria-label="Show more categories">
              ...
            </button>
          </div>

          {/* <!-- Category2 (Shoes) --> */}
          <div className={s.category}>
            <h3 className={s.title}>
              <Link to={`/${linkNames[index]}/shoes`}>Shoes</Link>
            </h3>

            <ul className={s.list} data-category>
              {data[index].shoes.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link
                    to={`/${linkNames[index]}/shoes?type%5B0%5D=${category.title.toLowerCase()}`}
                    className={s.link}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={showMore}
              className={`${s.more} ${cs.btnReset}`}
              aria-label="Show more categories">
              ...
            </button>
          </div>

          {/* <!-- Category3 (Accessories) --> */}
          <div className={s.category}>
            <h3 className={s.title}>
              <Link to={`/${linkNames[index]}/accessories`}>Accessories</Link>
            </h3>

            <ul className={s.list} data-category>
              {data[index].accessories.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link
                    to={`/${
                      linkNames[index]
                    }/accessories?type%5B0%5D=${category.title.toLowerCase()}`}
                    className={s.link}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={showMore}
              className={`${s.more} ${cs.btnReset}`}
              aria-label="Show more categories">
              ...
            </button>
          </div>
        </div>

        <div className={s.divider}></div>

        <article className={s.offer}>
          <Link to={"/"}>
            <img src={data[index].offer.imageUrl} alt="Product offer." className={s.offerImage} />
          </Link>

          <p className={s.offerDescr}>{data[index].offer.description}</p>

          <Link to={"/"} className={`${s.offerBtn} ${cs.btn} ${cs.btnOutline}`}>
            <span className={s.offerBtnText}>See offers</span>

            <Arrow aria-hidden="true" />
          </Link>
        </article>
      </div>
    </div>
  );
};
