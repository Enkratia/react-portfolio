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
  const applyFilersBtnRef = React.useRef<HTMLButtonElement>(null);
  const [isOpenFilters, setIsOpenFilters] = React.useState(true);
  const [getCatalogProducts, { data }] = useLazyGetCatalogProductsQuery();

  const { filters, toolbar, coord } = useAppSelector(selectCatalog);
  const { type, size, color, material, brand, price } = filters;
  const { sort, limit, page } = toolbar;

  const getNewType = (type: string[]) => {
    return type.map((t) => {
      if (t.includes("&")) {
        return t.split("&").join("%26");
      } else {
        return t;
      }
    });
  };

  const newType = getNewType(type);

  const typeReq = `&type_like=${newType.join("|")}`;
  const sizeReq = `&size_like=${size.join("|")}`;
  const colorReq = `&color_like=${color.join("|")}`;
  const materialReq = `&material_like=${material.join("|")}`;
  const brandReq = `&brand_like=${brand.join("|")}`;
  const priceReq = price.length > 0 ? `&price_gte=${price[0]}&price_lte=${price[1]}` : "";

  const sortReq = `&_sort=${sort.sortProperty.replace(/^\-/, "")}&_order=${
    sort.sortProperty.startsWith("-") ? "asc" : "desc"
  }`;
  const pagesReq = `&_page=${page}&_limit=${limit}`;

  const request = `object_like=${object}&category=${category}${typeReq}${sizeReq}${colorReq}${materialReq}${brandReq}${priceReq}${pagesReq}${sortReq}`;

  // const isNewRequest = request !== originalArgs;
  console.log("rerender");
  console.log(applyFilersBtnRef.current);

  React.useEffect(() => {
    getCatalogProducts(request);
  }, [page, limit, sort]);

  const onRequestClick = () => {
    getCatalogProducts(request);
  };

  const onHideFiltersClick = () => {
    setIsOpenFilters((b) => !b);
  };

  if (!data) return;
  const { apiResponse, totalCount } = data;

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>{`Catalog of ${object} products`}</h2>

      <div
        className={`${s.container} ${isOpenFilters ? "" : s.containerHide} ${cs.container} ${
          cs.container40
        }`}>
        <CatalogFilters
          data={apiResponse}
          showBtnCoord={coord}
          ref={applyFilersBtnRef}
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
