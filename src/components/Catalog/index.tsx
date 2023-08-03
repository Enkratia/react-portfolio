import React from "react";

import { useLazyGetCatalogProductsQuery } from "../../redux/backendApi";

import s from "./Catalog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { CatalogFilters, CatalogGrid, CatalogToolbar } from "../../components";

import { useAppSelector } from "../../redux/store";
import { selectCatalog } from "../../redux/catalogSlice/selectors";

type CatalogProps = {
  object: string;
  category: string;
};

export const Catalog: React.FC<CatalogProps> = ({ object, category }) => {
  const [isOpenFilters, setIsOpenFilters] = React.useState(true);
  const [getCatalogProducts, { data, originalArgs }] = useLazyGetCatalogProductsQuery();

  // const { type, size, color, material, brand, price } = useAppSelector(selectCatalogFilters);
  const { filters, coord } = useAppSelector(selectCatalog);
  const { type, size, color, material, brand, price } = filters;

  // const getTest = (type: string[]) => {
  //   return type.map((t) => {
  //     if (t.includes("&")) {
  //       return "(" + t + ")";
  //     } else {
  //       return t;
  //     }
  //   });
  // };

  // const test = getTest(type);

  const typeReq = `&type_like=${type.join("|")}`;
  const sizeReq = `&size_like=${size.join("|")}`;
  const colorReq = `&color_like=${color.join("|")}`;
  const materialReq = `&material_like=${material.join("|")}`;
  const brandReq = `&brand_like=${brand.join("|")}`;
  const priceReq = price.length > 0 ? `&price_gte=${price[0]}&price_lte=${price[1]}` : "";

  const request = `object_like=${object}&category=${category}${typeReq}${sizeReq}${colorReq}${materialReq}${brandReq}${priceReq}`;
  const isNewRequest = request !== originalArgs;

  React.useEffect(() => {
    getCatalogProducts(request);
  }, []);

  const onApplyFiltersClick = () => {
    getCatalogProducts(request);
  };

  const onHideFiltersClick = () => {
    setIsOpenFilters((b) => !b);
  };

  if (!data) return;

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>{`Catalog of ${object} products`}</h2>

      <div
        className={`${s.container} ${isOpenFilters ? "" : s.containerHide} ${cs.container} ${
          cs.container40
        }`}>
        <CatalogFilters
          data={data}
          showBtnCoord={coord}
          isNewRequest={isNewRequest}
          onHideFiltersClick={onHideFiltersClick}
          onApplyFiltersClick={onApplyFiltersClick}
          isOpenFilters={isOpenFilters}
        />
        <CatalogToolbar />
        <CatalogGrid data={data} />
        <CatalogToolbar />
      </div>
    </section>
  );
};
