import React from "react";

import s from "./OutlerStores.module.scss";
import { Clock, Mail, Outline, Phone } from "../../../iconComponents";

export const OutletStores: React.FC = () => {
  return (
    <div className={s.root} role="tabpanel" id="contacts-1">
      {/* <!-- Stores list --> */}
      <ul className={s.list}>
        {/* <!-- Item1 --> */}
        <li className={s.item}>
          <img src="./img/contacts-1.jpg" alt="Outlet store image." className={s.image} />

          <div className={s.text}>
            <h3 className={s.title}>New York, USA</h3>

            {/* <!-- Stores info --> */}
            <ul className={s.info}>
              {/* <!-- Item1 --> */}
              <li className={s.infoItem}>
                <a href="tel:4055550128" className={`${s.infoData} ${s.infoDataLink}`}>
                  <Phone aria-hidden="true" />
                  (405) 555-0128
                </a>
              </li>

              {/* <!-- Item2 --> */}
              <li className={s.infoItem}>
                <a href="mailto:hello@createx.com" className={`${s.infoData} ${s.infoDataLink}`}>
                  <Mail aria-hidden="true" />
                  hello@createx.com
                </a>
              </li>

              {/* <!-- Item3 --> */}
              <li className={s.infoItem}>
                <span className={s.infoData}>
                  <Clock aria-hidden="true" />
                  Daily from 9 am to 9 pm
                </span>
              </li>

              {/* <!-- Item4 --> */}
              <li className={s.infoItem}>
                <a href="tel:7025550122" className={`${s.infoData} ${s.infoDataLink}`}>
                  <Outline aria-hidden="true" />

                  <span className={s.infoUnderline}>20 W 29th Street New York, NY 10001</span>
                </a>
              </li>
            </ul>
          </div>
        </li>

        {/* <!-- Item2 --> */}
        <li className="outlet-stores__item">
          <img
            src="./img/contacts-2.jpg"
            alt="Outlet store image."
            className="outlet-stores__image"
          />

          <div className="outlet-stores__text">
            <h4 className="outlet-stores__title">Delaware, USA</h4>

            {/* <!-- Stores info --> */}
            <ul className="outlet-stores__info">
              {/* <!-- Item1 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="tel:8085550111"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#phone" aria-hidden="true"></use>
                  </svg>
                  (808) 555-0111
                </a>
              </li>

              {/* <!-- Item2 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="mailto:delaware@createx.com"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#mail" aria-hidden="true"></use>
                  </svg>
                  delaware@createx.com
                </a>
              </li>

              {/* <!-- Item3 --> */}
              <li className="outlet-stores__info-item">
                <span className="outlet-stores__info-data">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
                  </svg>
                  Daily from 10 am to 9 pm
                </span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="tel:7025550122"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#outline" aria-hidden="true"></use>
                  </svg>

                  <span className="outlet-stores__info-underline">
                    6391 Elgin St. Celina, Delaware 10299
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>

        {/* <!-- Item3 --> */}
        <li className="outlet-stores__item">
          <img
            src="./img/contacts-3.jpg"
            alt="Outlet store image."
            className="outlet-stores__image"
          />

          <div className="outlet-stores__text">
            <h4 className="outlet-stores__title">New Jersey, USA</h4>

            {/* <!-- Stores info --> */}
            <ul className="outlet-stores__info">
              {/* <!-- Item1 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="tel:7025550122"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#phone" aria-hidden="true"></use>
                  </svg>
                  (702) 555-0122
                </a>
              </li>

              {/* <!-- Item2 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="mailto:newjersey@createx.com"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#mail" aria-hidden="true"></use>
                  </svg>
                  newjersey@createx.com
                </a>
              </li>

              {/* <!-- Item3 --> */}
              <li className="outlet-stores__info-item">
                <span className="outlet-stores__info-data">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
                  </svg>
                  Daily from 9 am to 8 pm
                </span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="tel:7025550122"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#outline" aria-hidden="true"></use>
                  </svg>

                  <span className="outlet-stores__info-underline">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>

        {/* <!-- Item4 --> */}
        <li className="outlet-stores__item">
          <img
            src="./img/contacts-4.jpg"
            alt="Outlet store image."
            className="outlet-stores__image"
          />

          <div className="outlet-stores__text">
            <h4 className="outlet-stores__title">Maine, USA</h4>

            {/* <!-- Stores info --> */}
            <ul className="outlet-stores__info">
              {/* <!-- Item1 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="tel:2195550114"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#phone" aria-hidden="true"></use>
                  </svg>
                  (219) 555-0114
                </a>
              </li>

              {/* <!-- Item2 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="mailto:maine@createx.com"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#mail" aria-hidden="true"></use>
                  </svg>
                  maine@createx.com
                </a>
              </li>

              {/* <!-- Item3 --> */}
              <li className="outlet-stores__info-item">
                <span className="outlet-stores__info-data">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
                  </svg>
                  Daily from 9 am to 9 pm
                </span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="outlet-stores__info-item">
                <a
                  href="tel:7025550122"
                  className="outlet-stores__info-data outlet-stores__info-data--link">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <use href="./img/sprite.svg#outline" aria-hidden="true"></use>
                  </svg>

                  <span className="outlet-stores__info-underline">
                    8502 Preston Rd. Inglewood, Maine 98380
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
