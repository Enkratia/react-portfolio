import qs from "qs";

import React from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import {
  useLazyGetCatalogProductsQuery,
  useLazyGetAllCatalogProductsQuery,
} from "../../redux/backendApi";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectCatalog } from "../../redux/catalogSlice/selectors";
import {
  resetRefetch,
  resetToolbar,
  setCoord,
  setFilters,
  setFiltersBC,
  setRefetch,
} from "../../redux/catalogSlice/slice";

import { sortList } from "../../redux/catalogSlice/slice";
import { defaultFilters, defaultToolbar } from "../../redux/catalogSlice/slice";
import { FiltersType, ToolbarType } from "../../redux/catalogSlice/types";

import { CatalogFilters, CatalogGrid, CatalogToolbar } from "../../components";
import { useMediaQuery } from "../../util/customHooks";

import s from "./Catalog.module.scss";
import cs from "../../scss/global/_index.module.scss";

type CatalogProps = {
  object: string;
  category: string;
};

export const Catalog: React.FC<CatalogProps> = ({ object, category }) => {
  // const isNewPage = React.useRef([true, ""]);

  // const checkIsNewPage = () => {
  //   const regExp = /(\?|\&)([^&]*)/gi;

  //   const mainArgs = (isNewPage.current[1] as string).match(regExp);
  //   const objectArg = mainArgs?.[0] || "";
  //   const categoryArg = mainArgs?.[1] || "";
  //   isNewPage.current[0] = !objectArg.includes(object) || !categoryArg.includes(category);
  // };
  // checkIsNewPage();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const location = useLocation();
  const locationState = location.state;
  const searchParams = location.search.substring(1);

  const isNewPage = React.useRef([true, ""]);

  const checkIsNewPage = () => {
    if (locationState) {
      isNewPage.current[0] = false;
      isNewPage.current[1] = locationState + searchParams;
      return;
    }

    isNewPage.current[0] = locationState + searchParams !== isNewPage.current[1];
    isNewPage.current[1] = locationState + searchParams;
  };
  checkIsNewPage();

  console.log(isNewPage.current[0]);

  const { isMQ1120 } = useMediaQuery();
  const [isOpenFilters, setIsOpenFilters] = React.useState(isMQ1120);

  const [getAllCatalogProducts, { data: allData }] = useLazyGetAllCatalogProductsQuery();
  const [getCatalogProducts, { data, originalArgs }] = useLazyGetCatalogProductsQuery();

  const params = qs.parse(searchParams);
  const sortQS = sortList.filter((sortItem) => sortItem.sortProperty === params.sort);

  const filtersQS = {
    type: params.type || defaultFilters.type,
    size: params.size || defaultFilters.size,
    color: params.color || defaultFilters.color,
    material: params.material || defaultFilters.material,
    brand: params.brand || defaultFilters.brand,
    price: params.price || defaultFilters.price,
  } as FiltersType;

  const toolbarQS = {
    page: Number(params.page) || defaultToolbar.page,
    limit: params.limit || defaultToolbar.limit,
    sort: sortQS[0] || defaultToolbar.sort,
  } as ToolbarType;

  const { filters, toolbar, coord, refetch } = useAppSelector(selectCatalog);
  // const { type, size, color, material, brand, price } = isNewPage.current[0] ? filtersQS : filters;
  // const { sort, limit, page } = isNewPage.current[0] ? toolbarQS : toolbar;

  const { type, size, color, material, brand, price } = isNewPage.current[0] ? filtersQS : filters;
  const { sort, limit, page } = isNewPage.current[0] ? toolbarQS : toolbar;

  const delAmp = (type: string[]) => {
    return type.map((t) => {
      if (t.includes("&")) {
        return t.split("&").join("%26");
      } else {
        return t;
      }
    });
  };

  const formRequest = () => {
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

    return { generalReq, filtersReq, toolbarReq };
  };
  const { generalReq, filtersReq, toolbarReq } = formRequest();

  const request = `${generalReq}${filtersReq}${toolbarReq}`;
  const isNewRequest = !originalArgs?.includes(filtersReq);
  // console.log(filtersReq);
  // isNewPage.current[1] = originalArgs ?? "";

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

    dispatch(setFilters(filtersQS));
    dispatch(setFiltersBC());
    dispatch(resetToolbar());
    dispatch(resetRefetch());
  }, [object, category]);

  React.useEffect(() => {
    console.log(locationState);
    if (locationState) return;
    // getAllCatalogProducts(`?${generalReq}`);
    getCatalogProducts(`?${request}`);

    dispatch(setFilters(filtersQS));
    dispatch(setFiltersBC());
    dispatch(resetToolbar());
    // dispatch(resetRefetch());
  }, [searchParams]);

  React.useEffect(() => {
    if (refetch.isMount) return;
    navigate(`?${requestQS}`, { state: "navigation" });
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
