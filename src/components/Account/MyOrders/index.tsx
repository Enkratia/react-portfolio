import React from "react";

export const MyOrders: React.FC = () => {
  return (
    <div className="my-orders__content orders-content">
      {/* <!-- Top --> */}
      <div className="orders-content__top">
        <h2 className="orders-content__title">My orders</h2>

        <div className="orders-content__sort">
          <span className="orders-content__sort-title">Sort orders</span>

          <div
            className="custom-select custom-select--light orders-content__sort-select"
            role="listbox"
            tabIndex={0}>
            <div className="custom-select__head custom-select__head--light orders-content__sort-head">
              <span className="custom-select__selected orders-content__sort-selected">All</span>

              <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
                <use href="./img/sprite.svg#angle-down"></use>
              </svg>
            </div>

            <div className="custom-select__inner-wrapper orders-content__sort-wrapper">
              <ul
                className="custom-select__list orders-content__sort-list"
                data-overlayscrollbars-initialize>
                <li
                  className="custom-select__item custom-select__item--active orders-content__sort-item"
                  aria-selected="true">
                  All
                </li>

                <li className="custom-select__item orders-content__sort-item" aria-selected="false">
                  Oldest
                </li>

                <li className="custom-select__item orders-content__sort-item" aria-selected="false">
                  Newest
                </li>

                <li className="custom-select__item orders-content__sort-item" aria-selected="false">
                  In progress
                </li>

                <li className="custom-select__item orders-content__sort-item" aria-selected="false">
                  Delivered
                </li>

                <li className="custom-select__item orders-content__sort-item" aria-selected="false">
                  Canceled
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Orders --> */}
      <ul className="orders-content__orders">
        {/* <!-- Order1 --> */}
        <li className="orders-content__order">
          {/* <!-- Head --> */}
          <button
            className="orders-content__head"
            aria-expanded="false"
            aria-controls="orders-content-products-34BV66580K92">
            <span className="orders-content__vendor"># 34BV66580K92</span>

            <time className="orders-content__time">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
              </svg>
              September 9, 2020
            </time>

            <span className="orders-content__state orders-content__state--inprogress">
              In progress
            </span>

            <span className="orders-content__pay">$750.00</span>

            <span className="orders-content__toggle c-toggle c-toggle--mid"></span>
          </button>

          {/* <!-- Products --> */}
          <div className="orders-content__products" id="orders-content-products-34BV66580K92">
            {/* <!-- Products list --> */}
            <ul className="orders-content__products-list">
              {/* <!-- Product3 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-jeans_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Mid-rise slim cropped fit jeans</h6>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">M</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$40.00</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">2</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$80.00</span>
                </div>
              </li>

              {/* <!-- Product4 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-shoes_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Men fashion gray shoes</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">gray</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">44</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$85.00</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$85.00</span>
                </div>
              </li>
            </ul>

            {/* <!-- Products resume --> */}
            <ul className="orders-content__products-resume products-resume">
              {/* <!-- Item1 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Subtotal:</span>

                <span className="products-resume__sum">$198.65</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Shipping:</span>

                <span className="products-resume__sum">$25.00</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Tax:</span>

                <span className="products-resume__sum">$6.35</span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Total:</span>

                <span className="products-resume__sum">$230.00</span>
              </li>
            </ul>

            {/* <!-- Products tracking --> */}
            <div className="orders-content__tracking">
              <p className="orders-content__tracking-descr">You can track your order here</p>

              <a href="#" className="orders-content__tracking-btn btn btn--outline">
                Order tracking
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Order2 --> */}
        <li className="orders-content__order">
          {/* <!-- Head --> */}
          <button
            className="orders-content__head orders-content__head--init"
            aria-expanded="true"
            aria-controls="orders-content-products-50HV46580V84">
            <span className="orders-content__vendor"># 50HV46580V84</span>

            <time className="orders-content__time">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
              </svg>
              August 29, 2020
            </time>

            <span className="orders-content__state orders-content__state--inprogress">
              In progress
            </span>

            <span className="orders-content__pay">$230.00</span>

            <span className="orders-content__toggle c-toggle c-toggle--mid"></span>
          </button>

          {/* <!-- Products --> */}
          <div className="orders-content__products" id="orders-content-products-50HV46580V84">
            {/* <!-- Products list --> */}
            <ul className="orders-content__products-list">
              {/* <!-- Product1 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-sweatshirt_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Basic hooded sweatshirt in pink</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">pink</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">S</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$15.50</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$15.50</span>
                </div>
              </li>

              {/* <!-- Product2 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-cap_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Black and white sport cap</h6>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$18.15</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$18.15</span>
                </div>
              </li>

              {/* <!-- Product3 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-jeans_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Mid-rise slim cropped fit jeans</h6>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">M</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$40.00</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">2</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$80.00</span>
                </div>
              </li>

              {/* <!-- Product4 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-shoes_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Men fashion gray shoes</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">gray</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">44</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$85.00</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$85.00</span>
                </div>
              </li>
            </ul>

            {/* <!-- Products resume --> */}
            <ul className="orders-content__products-resume products-resume">
              {/* <!-- Item1 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Subtotal:</span>

                <span className="products-resume__sum">$198.65</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Shipping:</span>

                <span className="products-resume__sum">$25.00</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Tax:</span>

                <span className="products-resume__sum">$6.35</span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Total:</span>

                <span className="products-resume__sum">$230.00</span>
              </li>
            </ul>

            {/* <!-- Products tracking --> */}
            <div className="orders-content__tracking">
              <p className="orders-content__tracking-descr">You can track your order here</p>

              <a href="#" className="orders-content__tracking-btn btn btn--outline">
                Order tracking
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Order3 --> */}
        <li className="orders-content__order">
          {/* <!-- Head --> */}
          <button
            className="orders-content__head"
            aria-expanded="false"
            aria-controls="orders-content-products-93BR64523J71">
            <span className="orders-content__vendor"># 93BR64523J71</span>

            <time className="orders-content__time">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
              </svg>
              August 4, 2020
            </time>

            <span className="orders-content__state orders-content__state--delivered">
              Delivered
            </span>

            <span className="orders-content__pay">$92.40</span>

            <span className="orders-content__toggle c-toggle c-toggle--mid"></span>
          </button>

          {/* <!-- Products --> */}
          <div className="orders-content__products" id="orders-content-products-93BR64523J71">
            {/* <!-- Products list --> */}
            <ul className="orders-content__products-list">
              {/* <!-- Product1 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-sweatshirt_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Basic hooded sweatshirt in pink</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">pink</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">S</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$15.50</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$15.50</span>
                </div>
              </li>

              {/* <!-- Product2 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-cap_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Black and white sport cap</h6>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$18.15</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$18.15</span>
                </div>
              </li>
            </ul>

            {/* <!-- Products resume --> */}
            <ul className="orders-content__products-resume products-resume">
              {/* <!-- Item1 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Subtotal:</span>

                <span className="products-resume__sum">$198.65</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Shipping:</span>

                <span className="products-resume__sum">$25.00</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Tax:</span>

                <span className="products-resume__sum">$6.35</span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Total:</span>

                <span className="products-resume__sum">$230.00</span>
              </li>
            </ul>

            {/* <!-- Products tracking --> */}
            <div className="orders-content__tracking">
              <p className="orders-content__tracking-descr">You can track your order here</p>

              <a href="#" className="orders-content__tracking-btn btn btn--outline">
                Order tracking
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Order4 --> */}
        <li className="orders-content__order">
          {/* <!-- Head --> */}
          <button
            className="orders-content__head"
            aria-expanded="false"
            aria-controls="orders-content-products-66TU12580L11">
            <span className="orders-content__vendor"># 66TU12580L11</span>

            <time className="orders-content__time">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
              </svg>
              July 27, 2020
            </time>

            <span className="orders-content__state orders-content__state--canceled">Canceled</span>

            <span className="orders-content__pay">$102.95</span>

            <span className="orders-content__toggle c-toggle c-toggle--mid"></span>
          </button>

          {/* <!-- Products --> */}
          <div className="orders-content__products" id="orders-content-products-66TU12580L11">
            {/* <!-- Products list --> */}
            <ul className="orders-content__products-list">
              {/* <!-- Product1 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-sweatshirt_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Basic hooded sweatshirt in pink</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">pink</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">S</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$15.50</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$15.50</span>
                </div>
              </li>

              {/* <!-- Product4 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-shoes_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Men fashion gray shoes</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">gray</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">44</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$85.00</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$85.00</span>
                </div>
              </li>
            </ul>

            {/* <!-- Products resume --> */}
            <ul className="orders-content__products-resume products-resume">
              {/* <!-- Item1 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Subtotal:</span>

                <span className="products-resume__sum">$198.65</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Shipping:</span>

                <span className="products-resume__sum">$25.00</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Tax:</span>

                <span className="products-resume__sum">$6.35</span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Total:</span>

                <span className="products-resume__sum">$230.00</span>
              </li>
            </ul>

            {/* <!-- Products tracking --> */}
            <div className="orders-content__tracking">
              <p className="orders-content__tracking-descr">You can track your order here</p>

              <a href="#" className="orders-content__tracking-btn btn btn--outline">
                Order tracking
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Order5 --> */}
        <li className="orders-content__order">
          {/* <!-- Head --> */}
          <button
            className="orders-content__head"
            aria-expanded="false"
            aria-controls="orders-content-products-12WE95534P90">
            <span className="orders-content__vendor"># 12WE95534P90</span>

            <time className="orders-content__time">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
              </svg>
              July 12, 2020
            </time>

            <span className="orders-content__state orders-content__state--delivered">
              Delivered
            </span>

            <span className="orders-content__pay">$267.00</span>

            <span className="orders-content__toggle c-toggle c-toggle--mid"></span>
          </button>

          {/* <!-- Products --> */}
          <div className="orders-content__products" id="orders-content-products-12WE95534P90">
            {/* <!-- Products list --> */}
            <ul className="orders-content__products-list">
              {/* <!-- Product1 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-sweatshirt_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Basic hooded sweatshirt in pink</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">pink</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">S</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$15.50</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$15.50</span>
                </div>
              </li>
            </ul>

            {/* <!-- Products resume --> */}
            <ul className="orders-content__products-resume products-resume">
              {/* <!-- Item1 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Subtotal:</span>

                <span className="products-resume__sum">$198.65</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Shipping:</span>

                <span className="products-resume__sum">$25.00</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Tax:</span>

                <span className="products-resume__sum">$6.35</span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Total:</span>

                <span className="products-resume__sum">$230.00</span>
              </li>
            </ul>

            {/* <!-- Products tracking --> */}
            <div className="orders-content__tracking">
              <p className="orders-content__tracking-descr">You can track your order here</p>

              <a href="#" className="orders-content__tracking-btn btn btn--outline">
                Order tracking
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Order6 --> */}
        <li className="orders-content__order">
          {/* <!-- Head --> */}
          <button
            className="orders-content__head"
            aria-expanded="false"
            aria-controls="orders-content-products-47IK678871Y45">
            <span className="orders-content__vendor"># 47IK678871Y45</span>

            <time className="orders-content__time">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href="./img/sprite.svg#clock" aria-hidden="true"></use>
              </svg>
              June 5, 2020
            </time>

            <span className="orders-content__state orders-content__state--delivered">
              Delivered
            </span>

            <span className="orders-content__pay">$19.50</span>

            <span className="orders-content__toggle c-toggle c-toggle--mid"></span>
          </button>

          {/* <!-- Products --> */}
          <div className="orders-content__products" id="orders-content-products-47IK678871Y45">
            {/* <!-- Products list --> */}
            <ul className="orders-content__products-list">
              {/* <!-- Product2 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-cap_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Black and white sport cap</h6>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$18.15</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$18.15</span>
                </div>
              </li>

              {/* <!-- Product4 --> */}
              <li className="orders-content__product orders-product">
                {/* <!-- Image --> */}
                <img
                  src="./img/product-shoes_80w.jpg"
                  alt="Product-image."
                  className="orders-product__image"
                />

                {/* <!-- Text --> */}
                <div className="orders-product__text">
                  {/* <!-- Title --> */}
                  <h6 className="orders-product__title">Men fashion gray shoes</h6>

                  {/* <!-- Color --> */}
                  <div className="orders-product__color">
                    <span className="orders-product__color-name">Color:</span>

                    <span className="orders-product__color-data">gray</span>
                  </div>

                  {/* <!-- Size --> */}
                  <div className="orders-product__size">
                    <span className="orders-product__size-name">Size:</span>

                    <span className="orders-product__size-data">44</span>
                  </div>
                </div>

                {/* <!-- Price --> */}
                <div className="orders-product__price">
                  <span className="orders-product__price-name">Price:</span>

                  <span className="orders-product__price-data">$85.00</span>
                </div>

                {/* <!-- Quantity --> */}
                <div className="orders-product__quantity">
                  <span className="orders-product__quantity-name">Quantity:</span>

                  <span className="orders-product__quantity-data">1</span>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="orders-product__subtotal">
                  <span className="orders-product__subtotal-name">Subtotal:</span>

                  <span className="orders-product__subtotal-data">$85.00</span>
                </div>
              </li>
            </ul>

            {/* <!-- Products resume --> */}
            <ul className="orders-content__products-resume products-resume">
              {/* <!-- Item1 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Subtotal:</span>

                <span className="products-resume__sum">$198.65</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Shipping:</span>

                <span className="products-resume__sum">$25.00</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Tax:</span>

                <span className="products-resume__sum">$6.35</span>
              </li>

              {/* <!-- Item4 --> */}
              <li className="products-resume__item">
                <span className="products-resume__title">Total:</span>

                <span className="products-resume__sum">$230.00</span>
              </li>
            </ul>

            {/* <!-- Products tracking --> */}
            <div className="orders-content__tracking">
              <p className="orders-content__tracking-descr">You can track your order here</p>

              <a href="#" className="orders-content__tracking-btn btn btn--outline">
                Order tracking
              </a>
            </div>
          </div>
        </li>
      </ul>

      {/* <!-- More --> */}
      <button className="orders-content__more">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <use href="./img/sprite.svg#convert" aria-hidden="true"></use>
        </svg>
        Load more
      </button>
    </div>
  );
};
