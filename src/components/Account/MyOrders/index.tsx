import { Decimal } from "decimal.js/decimal";

import React from "react";
import { Link } from "react-router-dom";

import { useGetUserOrdersQuery } from "../../../redux/backendApi";
import { UsersOrdersType } from "../../../redux/backendApi/types";

import { capitalize, formatDate } from "../../../util/customFunctions";

import s from "./MyOrders.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown, Clock, Convert } from "../../../iconComponents";

const sortOptions = [
  { name: "All", property: "" },
  { name: "Oldest", property: "-date" },
  { name: "Newest", property: "date" },
  // { name: "In progress", property: "progress" },
  // { name: "Delivered", property: "delivered" },
  // { name: "Canceled", property: "canceled" },
];

type MyOrdersAccordionProps = {
  order: UsersOrdersType;
};

const MyOrdersAccordion: React.FC<MyOrdersAccordionProps> = ({ order }) => {
  const [isAccOpen, setIsAccOpen] = React.useState(false);

  // **
  const calcSubtotal = (quantity: number, price: number) => {
    const subtotal = new Decimal(quantity * price).toFixed(2);
    return subtotal;
  };

  // **
  const onAccordionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bottom = e.currentTarget.nextElementSibling as HTMLDivElement;
    if (!bottom) return;

    if (isAccOpen) {
      bottom.style.height = "";
      setIsAccOpen((b) => !b);
      return;
    }

    const bottomHeight = bottom.scrollHeight;
    bottom.style.height = bottomHeight + "px";
    setIsAccOpen((b) => !b);
  };

  return (
    <li key={order.vendor} className={s.order}>
      {/* <!-- Head --> */}
      <button
        onClick={onAccordionClick}
        className={s.head}
        aria-expanded="false"
        aria-controls={`account-order-products-${order.vendor}`}>
        <span className={s.vendor}>{`# ${order.vendor}`}</span>

        <time className={s.time}>
          <Clock aria-hidden="true" />
          {formatDate(order.date)}
        </time>

        <span className={`${s.state} ${s[`state${capitalize(order.state)}`]}`}>
          {capitalize(order.state)}
        </span>

        <span className={s.pay}>{`$${order.total.toFixed(2)}`}</span>
        <span
          className={`${s.toggle} ${cs.toggle} ${cs.toggleMid} ${
            isAccOpen ? cs.toggleActive : ""
          }`}></span>
      </button>

      {/* <!-- Products --> */}
      <div className={s.products} id={`account-order-products-${order.vendor}`}>
        {/* <!-- Products list --> */}
        <ul className={s.productsList}>
          {order.products.map((product, i) => (
            <li key={i} className={s.product}>
              {/* <!-- Image --> */}
              <img src={product.imageUrl} alt="Product-image." className={s.productImage} />

              {/* <!-- Text --> */}
              <div className={s.productText}>
                {/* <!-- Title --> */}
                <p className={s.productTitle}>{product.title}</p>

                {/* Color */}
                {product.color && (
                  <div className={s.productColor}>
                    <span className={s.productColorName}>Color:</span>
                    <span className={s.productColorData}>{` ${product.color}`}</span>
                  </div>
                )}

                {/* <!-- Size --> */}
                {product.size && (
                  <div className={s.productSize}>
                    <span className={s.productSizeName}>Size:</span>
                    <span className={s.productSizeData}>{` ${product.size}`}</span>
                  </div>
                )}
              </div>

              {/* <!-- Price --> */}
              <div className={s.productPrice}>
                <span className={s.productPriceName}>Price:</span>
                <span className={s.productPriceData}>{` $${product.price.toFixed(2)}`}</span>
              </div>

              {/* <!-- Quantity --> */}
              <div className={s.productQuantity}>
                <span className={s.productQuantityName}>Quantity:</span>
                <span className={s.productQuantityData}>{` ${product.quantity}`}</span>
              </div>

              {/* <!-- Subtotal --> */}
              <div className={s.productSubtotal}>
                <span className={s.productSubtotalName}>Subtotal:</span>

                <span className={s.productSubtotalData}>{`$${calcSubtotal(
                  product.quantity,
                  product.price,
                )}`}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* <!-- Products resume --> */}
        <ul className={s.resume}>
          {/* <!-- Item1 --> */}
          <li className={s.resumeItem}>
            <span className={s.resumeTitle}>Subtotal:</span>
            <span className={s.resumeSum}>{` $${order.subtotal.toFixed(2)}`}</span>
          </li>

          {/* <!-- Item2 --> */}
          <li className={s.resumeItem}>
            <span className={s.resumeTitle}>Shipping:</span>
            <span className={s.resumeSum}>{` $${order.shipping.toFixed(2)}`}</span>
          </li>

          {/* <!-- Item3 --> */}
          <li className={s.resumeItem}>
            <span className={s.resumeTitle}>Tax:</span>
            <span className={s.resumeSum}>{` $${order.tax.toFixed(2)}`}</span>
          </li>

          {/* <!-- Item4 --> */}
          <li className={s.resumeItem}>
            <span className={s.resumeTitle}>Total:</span>
            <span className={`${s.resumeSum} ${s.resumeSumBold}`}>{` $${order.total.toFixed(
              2,
            )}`}</span>
          </li>
        </ul>

        {/* <!-- Products tracking --> */}
        <div className={s.tracking}>
          <p className={s.trackingDescr}>You can track your order here</p>

          <Link to={order.trackUrl} className={`${s.trackingBtn} ${cs.btn} ${cs.btnOutline}`}>
            Order tracking
          </Link>
        </div>
      </div>
    </li>
  );
};

export const MyOrders: React.FC = () => {
  const email = "createx@example.com"; // Mock
  const defaultLimit = 5;

  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [limit, setLimit] = React.useState(defaultLimit);

  const sortOption = sortOptions.filter((option) =>
    option.property === sortOptions[active].property ? true : false,
  )[0];

  const sortReq = `?_sort=${sortOption.property.replace("-", "")}`;
  const orderReq = `&_order=${sortOption.property.startsWith("-") ? "asc" : "desc"}`;
  const limitReq = `&_limit=${limit}`;

  const request = `${email}${sortReq}${orderReq}${limitReq}`;

  const { data } = useGetUserOrdersQuery(request);
  if (!data) return;

  const { apiResponse: orders, totalCount } = data;

  // **
  const onMoreClick = () => {
    setLimit((n) => n + 5);
  };

  // **
  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpen((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpen((b) => !b);
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionClick = (option: number) => {
    setActive(option);
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      setActive(option);

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div className={s.root}>
      {/* <!-- Top --> */}
      <div className={s.top}>
        <p className={s.title}>My orders</p>

        <div className={s.sort}>
          <label htmlFor="" className={s.sortTitle}>
            Sort orders
          </label>

          <div className={`${s.sortSelectWrapper} ${cs.inputWrapper}`}>
            <div
              className={`${s.sortSelect} ${cs.select} ${cs.input}`}
              role="listbox"
              tabIndex={0}
              onKeyDown={(e) => onSelectKeyDown(e)}
              onClick={onSelectClick}>
              <div className={`${cs.selectHead} ${cs.selectHeadActive}`}>
                <span className={cs.selectSelected}>{sortOptions[active].name}</span>
                {/* <input
                  type="hidden"
                  className=""
                  name=""
                  value={sortOptions[active].name}
                /> */}
                <AngleDown aria-hidden="true" />
              </div>
              <div
                className={`${cs.selectWrapper} ${cs.input} ${
                  isOpen ? cs.selectWrapperActive : ""
                }`}>
                <ul className={cs.selectList} data-overlayscrollbars-initialize>
                  {sortOptions.map((option, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${cs.selectItem} ${active === i ? cs.selectItemActive : ""}`}
                      role="option"
                      aria-selected={active === i ? "true" : "false"}
                      onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                      onClick={() => onSelectOptionClick(i)}>
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Orders --> */}
      <ul className={s.orders}>
        {orders.map((order) => (
          <MyOrdersAccordion key={order.vendor} order={order} />
        ))}
      </ul>

      {/* <!-- More --> */}
      <button
        onClick={onMoreClick}
        className={`${s.more} ${orders.length === totalCount ? s.moreHidden : ""}`}>
        <Convert aria-hidden="true" />
        Load more
      </button>
    </div>
  );
};