import React from "react";

import { useGetCatalogProductsQuery } from "../../redux/backendApi";

import s from "./Catalog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { CatalogFilters, CatalogGrid, CatalogToolbar } from "..";

type CatalogProps = {
  object: string;
  category: string;
};

export const Catalog: React.FC<CatalogProps> = ({ object, category }) => {
  const [isOpenFilters, setIsOpenFilters] = React.useState(true);

  const request = `object_like=${object}&category=${category}`;
  const { data } = useGetCatalogProductsQuery(request);
  if (!data) return;

  const onHideFiltersClick = () => {
    setIsOpenFilters((b) => !b);
  };

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>{`Catalog of ${object} products`}</h2>

      <div
        className={`${s.container} ${isOpenFilters ? "" : s.containerHide} ${cs.container} ${
          cs.container40
        }`}>
        <CatalogFilters
          data={data}
          onHideFiltersClick={onHideFiltersClick}
          isOpenFilters={isOpenFilters}
        />
        <CatalogToolbar />
        <CatalogGrid data={data} />
        <CatalogToolbar />
      </div>
    </section>
  );
};
