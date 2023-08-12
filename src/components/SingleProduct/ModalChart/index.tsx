import React from "react";

import s from "./Chart.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Cross } from "../../../iconComponents";

const genderTabNames = ["Women", "Men", "Kids"];

const unitsTabNames = ["cm", "inches"];

const womenFootwearRows = [
  ["Europe", "35", "36", "37", "38", "39", "40", "41", "42"],
  ["USA", "5", "6", "6.5", "7.5", "8", "9", "10", "11"],
  ["United Kingdom", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["China", "230/83", "235/84", "240/85", "245/86", "255/87", "260/88", "265/89", "275/90"],
  ["Russia", "35", "36", "37", "38", "39", "40", "41", "42"],
  ["Italy", "35", "36", "37", "38", "39", "40", "41", "42"],
  ["South Korea", "230", "235", "240", "245", "255", "260", "265", "275"],
];
const menFootwearRows = [
  ["Europe", "43", "44", "45", "46", "47", "48", "49", "50"],
  ["USA", "5", "6", "6.5", "7.5", "8", "9", "10", "11"],
  ["United Kingdom", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["China", "230/83", "235/84", "240/85", "245/86", "255/87", "260/88", "265/89", "275/90"],
  ["Russia", "43", "44", "45", "46", "47", "48", "49", "50"],
  ["Italy", "43", "44", "45", "46", "47", "48", "49", "50"],
  ["South Korea", "230", "235", "240", "245", "255", "260", "265", "275"],
];
const kidsFootwearRows = [
  ["Europe", "5", "11", "12", "13", "14", "15", "16", "17"],
  ["USA", "5", "6", "6.5", "7.5", "8", "9", "10", "11"],
  ["United Kingdom", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["China", "230/83", "235/84", "240/85", "245/86", "255/87", "260/88", "265/89", "275/90"],
  ["Russia", "5", "11", "12", "13", "14", "15", "16", "17"],
  ["Italy", "5", "11", "12", "13", "14", "15", "16", "17"],
  ["South Korea", "230", "235", "240", "245", "255", "260", "265", "275"],
];

const cmUnitsRow = [
  "Foot length",
  "22.4cm",
  "23cm",
  "23.6cm",
  "24.3cm",
  "24.9cm",
  "25.5cm",
  "26.2cm",
  "26.8cm",
];
const inchesUnitsRow = [
  "Foot length",
  "81/8'",
  "83/8'",
  "81/2'",
  "85/8'",
  "87/8'",
  "9'",
  "91/8'",
  "93/8'",
];

export const ModalChart: React.FC = () => {
  const [gender, setGender] = React.useState(0);
  const [units, setUnits] = React.useState(0);

  return (
    // {/* <!-- Chart --> */}
    <div className={s.root}>
      <div className={s.infoWrapper}>
        <div className={s.info}>
          {/* <!-- Title --> */}
          <h3 className={s.title}>Size chart</h3>

          {/* <!-- Gender tabs --> */}
          <ul className={s.tabs}>
            {genderTabNames.map((tabName, i) => (
              <li className={s.tabsItem}>
                <button
                  onClick={() => setGender(i)}
                  className={`${s.tab} ${cs.tab} ${gender === i ? cs.tabActive : ""}`}
                  role="tab"
                  aria-selected={gender === i ? "true" : "false"}
                  aria-controls={`footwear-${i}`}>
                  {tabName}
                </button>
              </li>
            ))}
            {/* 
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
            </li> */}
          </ul>
          {/* <!-- Gender outer wrapper --> */}
          {/* <div className="chart__gender-table-wrapper-outer"> */}

          {/* <!-- Gender table women --> */}
          <div
            className={`${s.tableWrapper} ${gender === 0 ? s.tableWrapperActive : ""}`}
            role="tabpanel"
            id="footwear-0">
            <table className={s.table}>
              <caption className={s.caption}>Footwear</caption>

              <tbody className={s.content}>
                {[...womenFootwearRows].map((row, i) => (
                  <tr key={i} className={s.row}>
                    {row.map((data) => (
                      <td className={s.data}>{data}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <!-- Gender table men --> */}
          <div
            className={`${s.tableWrapper} ${gender === 1 ? s.tableWrapperActive : ""}`}
            role="tabpanel"
            id="footwear-1">
            <table className={s.table}>
              <caption className={s.caption}>Footwear</caption>

              <tbody className={s.content}>
                {[...menFootwearRows].map((row, i) => (
                  <tr key={i} className={s.row}>
                    {row.map((data) => (
                      <td className={s.data}>{data}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <!-- Gender table kids --> */}
          <div
            className={`${s.tableWrapper} ${gender === 2 ? s.tableWrapperActive : ""}`}
            role="tabpanel"
            id="footwear-2">
            <table className={s.table}>
              <caption className={s.caption}>Footwear</caption>

              <tbody className={s.content}>
                {[...kidsFootwearRows].map((row, i) => (
                  <tr key={i} className={s.row}>
                    {row.map((data) => (
                      <td className={s.data}>{data}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* </div> */}

          {/* // <!-- Units --> */}
          <div className={s.units}>
            {/* <!-- Units top --> */}
            <div className={s.unitsTop}>
              {/* <!-- Units title --> */}
              <p className={s.unitsTitle}>I want to see size equivalence in:</p>

              {/* <!-- Units tabs --> */}
              <ul className={s.tabs}>
                {unitsTabNames.map((tabName, i) => (
                  <li className={s.tabsItem}>
                    <button
                      onClick={() => setUnits(i)}
                      className={`${s.tab} ${cs.tab} ${units === i ? cs.tabActive : ""}`}
                      role="tab"
                      aria-selected={units === i ? "true" : "false"}
                      aria-controls={`units-${i}`}>
                      {tabName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* <!-- Units outer wrapper --> */}
            <div className="chart__units-table-wrapper-outer">
              {/* <!-- Units table cm --> */}
              <div
                className={`${s.tableWrapper} ${units === 0 ? s.tableWrapperActive : ""}`}
                role="tabpanel"
                id="units-0">
                <table className={`${s.table} ${s.tableMb0}`}>
                  <caption className={s.caption}>Equivalence in centimetres</caption>

                  <tbody className={s.content}>
                    <tr className={s.row}>
                      {[...cmUnitsRow].map((data, i) => (
                        <td key={i} className={s.data}>
                          {data}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- Units table inches --> */}
              <div
                className={`${s.tableWrapper} ${units === 1 ? s.tableWrapperActive : ""}`}
                role="tabpanel"
                id="units-1">
                <table className={`${s.table} ${s.tableMb0}`}>
                  <caption className={s.caption}>Equivalence in inches</caption>

                  <tbody className={s.content}>
                    <tr className={s.row}>
                      {[...inchesUnitsRow].map((data, i) => (
                        <td key={i} className={s.data}>
                          {data}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* // Chart close */}
          <button className={s.close} aria-label="Close size chart.">
            <Cross aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
