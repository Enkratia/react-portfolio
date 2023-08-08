import qs from "qs";

import React from "react";
import { useNavigate } from "react-router-dom";

import {
  useLazyGetCatalogProductsQuery,
  useLazyGetAllCatalogProductsQuery,
} from "../../redux/backendApi";

import { useAppSelector } from "../../redux/store";
import { selectCatalog } from "../../redux/catalogSlice/selectors";

import { useMediaQuery } from "../../util/customHooks";

import s from "./Catalog.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { CatalogFilters, CatalogGrid, CatalogToolbar } from "../../components";

type CatalogProps = {
  object: string;
  category: string;
};

export const Catalog: React.FC<CatalogProps> = ({ object, category }) => {
  const isMount = React.useRef(true);
  const navigate = useNavigate();

  const { isMQ1120 } = useMediaQuery();
  const [isOpenFilters, setIsOpenFilters] = React.useState(isMQ1120);

  const [getAllCatalogProducts, { data: allData }] = useLazyGetAllCatalogProductsQuery();
  const [getCatalogProducts, { data, originalArgs, isUninitialized }] =
    useLazyGetCatalogProductsQuery();

  const { filters, toolbar, coord, isRefetch } = useAppSelector(selectCatalog);
  const { type, size, color, material, brand, price } = filters;
  const { sort, limit, page } = toolbar;

  const delAmp = (type: string[]) => {
    return type.map((t) => {
      if (t.includes("&")) {
        return t.split("&").join("%26");
      } else {
        return t;
      }
    });
  };

  const generalReq = `object_like=${object}&category=${category}`;

  const typeReq = `&type_like=${delAmp(type).sort().join("|")}`;
  const sizeReq = `&size_like=${size.slice().sort().join("|")}`;
  const colorReq = `&color_like=${color.slice().sort().join("|")}`;
  const materialReq = `&material_like=${material.slice().sort().join("|")}`;
  const brandReq = `&brand_like=${delAmp(brand).sort().join("|")}`;
  const priceReq = price.length > 0 ? `&price_gte=${price[0]}&price_lte=${price[1]}` : "";
  const filtersReq = typeReq + sizeReq + colorReq + materialReq + brandReq + priceReq;

  const sortReq = `&_sort=${sort.sortProperty.replace(/^\-/, "")}&_order=${
    sort.sortProperty.startsWith("-") ? "asc" : "desc"
  }`;
  const pageReq = `&_page=${page}`;
  const limitReq = `&_limit=${limit}`;

  const request = `${generalReq}${filtersReq}${sortReq}${pageReq}${limitReq}`;
  const isNewRequest = !originalArgs?.includes(filtersReq);

  const requestQS = qs.stringify({
    type,
    size,
    color,
    material,
    brand,
    price,
    sort: sort.sortProperty,
    limit,
    page,
  });

  React.useEffect(() => {
    getAllCatalogProducts(`?${generalReq}`);
    isMount.current = false;
  }, []);

  React.useEffect(() => {
    if (!isUninitialized) {
      navigate(`?${requestQS}`);
    }
    getCatalogProducts(`?${request}`);
  }, [page, limit, sort, isRefetch]);

  const onRequestClick = () => {
    navigate(`?${requestQS}`);
    getCatalogProducts(`?${request}`);
  };

  const onHideFiltersClick = () => {
    setIsOpenFilters((b) => !b);
  };

  if (!data || !allData) return;

  const { apiResponse, totalCount } = data;

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>{`Catalog of ${object} products`}</h2>

      <div
        className={`${s.container} ${isOpenFilters ? "" : s.containerHide} ${cs.container} ${
          cs.container40
        }`}>
        <CatalogFilters
          isMQ1120={isMQ1120}
          allData={allData}
          showBtnCoord={coord}
          isNewRequest={isNewRequest}
          onHideFiltersClick={onHideFiltersClick}
          onRequestClick={onRequestClick}
          isOpenFilters={isOpenFilters}
        />
        <CatalogToolbar totalCount={totalCount} />
        <CatalogGrid data={apiResponse} />
        <CatalogToolbar totalCount={totalCount} />
      </div>
    </section>
  );
};
