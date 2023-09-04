import qs from "qs";

import React from "react";
import { useNavigate } from "react-router-dom";

import {
  useLazyGetCatalogProductsQuery,
  useLazyGetAllCatalogProductsQuery,
} from "../../redux/backendApi";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCatalog } from "../../redux/catalogSlice/selectors";
import { setRefetch } from "../../redux/catalogSlice/slice";
import { defaultFilters, defaultToolbar } from "../../redux/catalogSlice/slice";

import { CatalogFilters, CatalogGrid, CatalogToolbar } from "../../components";
import { useMediaQuery } from "../../util/customHooks";

import s from "./Catalog.module.scss";
import cs from "../../scss/global/_index.module.scss";

type CatalogProps = {
  object: string;
  category: string;
};

export const Catalog: React.FC<CatalogProps> = ({ object, category }) => {
  const isPageChanged = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isMQ1120 } = useMediaQuery();
  const [isOpenFilters, setIsOpenFilters] = React.useState(isMQ1120);

  const [getAllCatalogProducts, { data: allData }] = useLazyGetAllCatalogProductsQuery();
  const [getCatalogProducts, { data, originalArgs }] = useLazyGetCatalogProductsQuery();

  const { filters, toolbar, coord, refetch } = useAppSelector(selectCatalog);
  const { type, size, color, material, brand, price } = isPageChanged ? defaultFilters : filters;
  const { sort, limit, page } = isPageChanged ? defaultToolbar : toolbar;

  const delAmp = (type: string[]) => {
    return type.map((t) => {
      if (t.includes("&")) {
        return t.split("&").join("%26");
      } else {
        return t;
      }
    });
  };

  const generalReq = `object_like=${object}&category_like=${category}`;

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
  const toolbarReq = sortReq + pageReq + limitReq;

  const request = `${generalReq}${filtersReq}${toolbarReq}`;
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
    getCatalogProducts(`?${request}`);
  }, [object, category]);

  React.useEffect(() => {
    if (refetch.isMount) return;
    navigate(`?${requestQS}`);
    getCatalogProducts(`?${request}`);
  }, [refetch.isRefetch]);

  const onRequestClick = () => {
    dispatch(setRefetch());
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
          category={category}
          showBtnCoord={coord}
          isNewRequest={isNewRequest}
          onHideFiltersClick={onHideFiltersClick}
          onRequestClick={onRequestClick}
          isOpenFilters={isOpenFilters}
        />
        <CatalogToolbar onRequestClick={onRequestClick} totalCount={totalCount} />
        <CatalogGrid data={apiResponse} />
        <CatalogToolbar onRequestClick={onRequestClick} totalCount={totalCount} />
      </div>
    </section>
  );
};
