import React from "react";

// import s from "./SingleProductChart.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

export const Chart: React.FC = () => {
  return (
    // {/* <!-- Chart --> */}
    <div className="product-card__chart chart">
      <div className="chart__data-wrapper">
        <div className="chart__data">
          {/* <!-- Title --> */}
          <h2 className="chart__title">Size chart</h2>

          {/* <!-- Gender tabs --> */}
          <ul className="chart__gender-tabs product-card__tabs">
            <li className="chart__gender-item">
              <label
                htmlFor="gender-women"
                className="chart__gender-tab tab tab--active"
                role="button"
                tabIndex={0}>
                Women
              </label>
            </li>

            <li className="chart__gender-item">
              <label
                htmlFor="gender-men"
                className="chart__gender-tab tab"
                role="button"
                tabIndex={0}>
                Men
              </label>
            </li>

            <li className="chart__gender-item">
              <label
                htmlFor="gender-kids"
                className="chart__gender-tab tab"
                role="button"
                tabIndex={0}>
                Kids
              </label>
            </li>
          </ul>
          {/* <!-- Gender outer wrapper --> */}
          <div className="chart__gender-table-wrapper-outer">
            {/* <!-- Gender table women --> */}
            <input
              type="radio"
              className="chart__gender-input"
              id="gender-women"
              name="gender-input"
              checked
            />

            <div className="chart__gender-table-wrapper">
              <table className="chart__gender-table chart-table">
                <caption className="chart-table__caption">Footwear</caption>

                <tbody className="chart-table__content">
                  {/* <!-- Row1 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Europe</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row2 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">USA</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">6</td>

                    <td className="chart-table__data">6.5</td>

                    <td className="chart-table__data">7.5</td>

                    <td className="chart-table__data">8</td>

                    <td className="chart-table__data">9</td>

                    <td className="chart-table__data">10</td>

                    <td className="chart-table__data">11</td>
                  </tr>

                  {/* <!-- Row3 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">United Kingdom</td>

                    <td className="chart-table__data">2</td>

                    <td className="chart-table__data">3</td>

                    <td className="chart-table__data">4</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">6</td>

                    <td className="chart-table__data">7</td>

                    <td className="chart-table__data">8</td>

                    <td className="chart-table__data">9</td>
                  </tr>

                  {/* <!-- Row4 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">China</td>

                    <td className="chart-table__data">230/83</td>

                    <td className="chart-table__data">235/84</td>

                    <td className="chart-table__data">240/85</td>

                    <td className="chart-table__data">245/86</td>

                    <td className="chart-table__data">255/87</td>

                    <td className="chart-table__data">260/88</td>

                    <td className="chart-table__data">265/89</td>

                    <td className="chart-table__data">275/90</td>
                  </tr>

                  {/* <!-- Row5 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Russia</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row6 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Italy</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row7 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">South Korea</td>

                    <td className="chart-table__data">230</td>

                    <td className="chart-table__data">235</td>

                    <td className="chart-table__data">240</td>

                    <td className="chart-table__data">245</td>

                    <td className="chart-table__data">255</td>

                    <td className="chart-table__data">260</td>

                    <td className="chart-table__data">265</td>

                    <td className="chart-table__data">275</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- Gender table men --> */}
            <input
              type="radio"
              className="chart__gender-input"
              id="gender-men"
              name="gender-input"
            />

            <div className="chart__gender-table-wrapper">
              <table className="chart__gender-table chart-table">
                <caption className="chart-table__caption">Footwear</caption>

                <tbody className="chart-table__content">
                  {/* <!-- Row1 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Europe</td>

                    <td className="chart-table__data">43</td>

                    <td className="chart-table__data">44</td>

                    <td className="chart-table__data">45</td>

                    <td className="chart-table__data">46</td>

                    <td className="chart-table__data">47</td>

                    <td className="chart-table__data">48</td>

                    <td className="chart-table__data">49</td>

                    <td className="chart-table__data">50</td>
                  </tr>

                  {/* <!-- Row2 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">USA</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">6</td>

                    <td className="chart-table__data">6.5</td>

                    <td className="chart-table__data">7.5</td>

                    <td className="chart-table__data">8</td>

                    <td className="chart-table__data">9</td>

                    <td className="chart-table__data">10</td>

                    <td className="chart-table__data">11</td>
                  </tr>

                  {/* <!-- Row3 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">United Kingdom</td>

                    <td className="chart-table__data">2</td>

                    <td className="chart-table__data">3</td>

                    <td className="chart-table__data">4</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">6</td>

                    <td className="chart-table__data">7</td>

                    <td className="chart-table__data">8</td>

                    <td className="chart-table__data">9</td>
                  </tr>

                  {/* <!-- Row4 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">China</td>

                    <td className="chart-table__data">230/83</td>

                    <td className="chart-table__data">235/84</td>

                    <td className="chart-table__data">240/85</td>

                    <td className="chart-table__data">245/86</td>

                    <td className="chart-table__data">255/87</td>

                    <td className="chart-table__data">260/88</td>

                    <td className="chart-table__data">265/89</td>

                    <td className="chart-table__data">275/90</td>
                  </tr>

                  {/* <!-- Row5 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Russia</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row6 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Italy</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row7 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">South Korea</td>

                    <td className="chart-table__data">230</td>

                    <td className="chart-table__data">235</td>

                    <td className="chart-table__data">240</td>

                    <td className="chart-table__data">245</td>

                    <td className="chart-table__data">255</td>

                    <td className="chart-table__data">260</td>

                    <td className="chart-table__data">265</td>

                    <td className="chart-table__data">275</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- Gender table kids --> */}
            <input
              type="radio"
              className="chart__gender-input"
              id="gender-kids"
              name="gender-input"
            />

            <div className="chart__gender-table-wrapper">
              <table className="chart__gender-table chart-table">
                <caption className="chart-table__caption">Footwear</caption>

                <tbody className="chart-table__content">
                  {/* <!-- Row1 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Europe</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">11</td>

                    <td className="chart-table__data">12</td>

                    <td className="chart-table__data">13</td>

                    <td className="chart-table__data">14</td>

                    <td className="chart-table__data">15</td>

                    <td className="chart-table__data">16</td>

                    <td className="chart-table__data">17</td>
                  </tr>

                  {/* <!-- Row2 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">USA</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">6</td>

                    <td className="chart-table__data">6.5</td>

                    <td className="chart-table__data">7.5</td>

                    <td className="chart-table__data">8</td>

                    <td className="chart-table__data">9</td>

                    <td className="chart-table__data">10</td>

                    <td className="chart-table__data">11</td>
                  </tr>

                  {/* <!-- Row3 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">United Kingdom</td>

                    <td className="chart-table__data">2</td>

                    <td className="chart-table__data">3</td>

                    <td className="chart-table__data">4</td>

                    <td className="chart-table__data">5</td>

                    <td className="chart-table__data">6</td>

                    <td className="chart-table__data">7</td>

                    <td className="chart-table__data">8</td>

                    <td className="chart-table__data">9</td>
                  </tr>

                  {/* <!-- Row4 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">China</td>

                    <td className="chart-table__data">230/83</td>

                    <td className="chart-table__data">235/84</td>

                    <td className="chart-table__data">240/85</td>

                    <td className="chart-table__data">245/86</td>

                    <td className="chart-table__data">255/87</td>

                    <td className="chart-table__data">260/88</td>

                    <td className="chart-table__data">265/89</td>

                    <td className="chart-table__data">275/90</td>
                  </tr>

                  {/* <!-- Row5 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Russia</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row6 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">Italy</td>

                    <td className="chart-table__data">35</td>

                    <td className="chart-table__data">36</td>

                    <td className="chart-table__data">37</td>

                    <td className="chart-table__data">38</td>

                    <td className="chart-table__data">39</td>

                    <td className="chart-table__data">40</td>

                    <td className="chart-table__data">41</td>

                    <td className="chart-table__data">42</td>
                  </tr>

                  {/* <!-- Row7 --> */}
                  <tr className="chart-table__row">
                    <td className="chart-table__data">South Korea</td>

                    <td className="chart-table__data">230</td>

                    <td className="chart-table__data">235</td>

                    <td className="chart-table__data">240</td>

                    <td className="chart-table__data">245</td>

                    <td className="chart-table__data">255</td>

                    <td className="chart-table__data">260</td>

                    <td className="chart-table__data">265</td>

                    <td className="chart-table__data">275</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* // <!-- Units --> */}
          <div className="chart__units">
            {/* <!-- Units top --> */}
            <div className="chart__units-top">
              {/* <!-- Units title --> */}
              <h6 className="chart__units-title">I want to see size equivalence in:</h6>

              {/* <!-- Units tabs --> */}
              <ul className="chart__units-tabs product-card__tabs">
                <li className="chart__units-item">
                  <label
                    htmlFor="units-cm"
                    className="chart__units-tab tab tab--active"
                    role="button"
                    tabIndex={1}>
                    cm
                  </label>
                </li>

                <li className="chart__units-item">
                  <label
                    htmlFor="units-inches"
                    className="chart__units-tab tab"
                    role="button"
                    tabIndex={1}>
                    inches
                  </label>
                </li>
              </ul>
            </div>

            {/* <!-- Units outer wrapper --> */}
            <div className="chart__units-table-wrapper-outer">
              {/* <!-- Units table cm --> */}
              <input
                type="radio"
                className="chart__units-input"
                id="units-cm"
                name="chart-units"
                checked
              />

              <div className="chart__units-table-wrapper">
                <table className="chart__units-table chart-table chart-table--mb0">
                  <caption className="chart-table__caption">Equivalence in centimetres</caption>

                  <tbody className="chart-table__content">
                    <tr className="chart-table__row">
                      <td className="chart-table__data">Foot length</td>

                      <td className="chart-table__data">22.4cm</td>

                      <td className="chart-table__data">23cm</td>

                      <td className="chart-table__data">23.6cm</td>

                      <td className="chart-table__data">24.3cm</td>

                      <td className="chart-table__data">24.9cm</td>

                      <td className="chart-table__data">25.5cm</td>

                      <td className="chart-table__data">26.2cm</td>

                      <td className="chart-table__data">26.8cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- Units table inches --> */}
              <input
                type="radio"
                className="chart__units-input"
                id="units-inches"
                name="chart-units"
              />

              <div className="chart__units-table-wrapper">
                <table className="chart__units-table chart-table chart-table--mb0">
                  <caption className="chart-table__caption">Equivalence in inches</caption>

                  <tbody className="chart-table__content">
                    <tr className="chart-table__row">
                      <td className="chart-table__data">Foot length</td>

                      <td className="chart-table__data">81/8"</td>

                      <td className="chart-table__data">83/8"</td>

                      <td className="chart-table__data">81/2"</td>

                      <td className="chart-table__data">85/8"</td>

                      <td className="chart-table__data">87/8"</td>

                      <td className="chart-table__data">9"</td>

                      <td className="chart-table__data">91/8"</td>

                      <td className="chart-table__data">93/8"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* // Chart close */}
          <button className="chart__close" aria-label="Close size chart.">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <use href="./img/sprite.svg#cross" aria-hidden="true"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
