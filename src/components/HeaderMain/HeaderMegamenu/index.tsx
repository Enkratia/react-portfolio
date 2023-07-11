import React from "react";
import { Link } from "react-router-dom";
import { useGetMegamenuLinksQuery } from "../../../redux/megamenuSlice";

import s from "./HeaderMegamenu.module.scss";
import cs from "../../../scss/global/_index.module.scss";

import { Arrow } from "../../../iconComponents";

type HeaderMegamenuProps = {
  index: number;
};

export const HeaderMegamenu: React.FC<HeaderMegamenuProps> = ({ index }) => {
  const { data } = useGetMegamenuLinksQuery();
  if (!data) return;

  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container}`}>
        <div className={s.categories}>
          {/* <!-- Non-category --> */}
          <div className={s.nonCategory}>
            <ul className={s.list}>
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
            <h3 className={s.title}>Clothes</h3>

            <ul className={s.list}>
              {data[index].clothes.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link to={category.url} className={s.link}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- Category2 (Shoes) --> */}
          <div className={s.category}>
            <h3 className={s.title}>Shoes</h3>

            <ul className={s.list}>
              {data[index].shoes.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link to={category.url} className={s.link}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- Category3 (Accessories) --> */}
          <div className={s.category}>
            <h3 className={s.title}>Accessories</h3>

            <ul className={s.list}>
              {data[index].accessories.map((category, i) => (
                <li key={i} className={s.item}>
                  <Link to={category.url} className={s.link}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
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
