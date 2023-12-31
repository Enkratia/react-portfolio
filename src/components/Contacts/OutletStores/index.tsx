import React from "react";

import { useGetOutletStoresQuery } from "../../../redux/backendApi";

import { SkeletonOutletStores } from "../../Skeletons";

import s from "./OutlerStores.module.scss";
import { Clock, Mail, Outline, Phone } from "../../../iconComponents";

const storeIcons = [
  <Phone aria-hidden="true" />,
  <Mail aria-hidden="true" />,
  <Clock aria-hidden="true" />,
  <Outline aria-hidden="true" />,
];

export const OutletStores: React.FC = () => {
  const { data: stores, isError } = useGetOutletStoresQuery();

  if (isError) {
    console.log("Failed to load stores");
    alert("Failed to load stores");
  }

  if (!stores) {
    return <SkeletonOutletStores />;
  }

  return (
    <div className={s.root} role="tabpanel" id="contacts-1">
      <ul className={s.list}>
        {stores &&
          stores.map((store, i) => (
            <li key={i} className={s.item}>
              <img src={store.imageUrl} alt="Outlet store image." className={s.image} />

              <div className={s.text}>
                <h3 className={s.title}>{store.title}</h3>

                {/* <!-- Stores info --> */}
                <ul className={s.info}>
                  {store.info.map((info, j) => (
                    <li key={j} className={s.infoItem}>
                      {j === 2 ? (
                        <span className={s.infoData}>
                          {storeIcons[j]}
                          {info.text}
                        </span>
                      ) : (
                        <a href={info.href} className={`${s.infoData} ${s.infoDataLink}`}>
                          {storeIcons[j]}
                          {j === 3 ? (
                            <span className={s.infoUnderline}>{info.text}</span>
                          ) : (
                            info.text
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
