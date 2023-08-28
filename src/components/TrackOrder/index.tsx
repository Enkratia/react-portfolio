import { useIMask } from "react-imask";

import React from "react";

import { useLazyGetOrderQuery } from "../../redux/backendApi";

import { formatPlainDateTime, formatPlainTime } from "../../util/customFunctions";

import s from "./TrackOrder.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Check } from "../../iconComponents";
import { TrackOrderNotFound } from "../../components";

const mockNumber = "34BV66580K92";

export const TrackOrder: React.FC = () => {
  const [opts] = React.useState({ mask: "# ************" });
  const { ref: inputRef } = useIMask(opts);

  const [isChecked, setIsChecked] = React.useState(false);

  const [getOrder, { data: orders }] = useLazyGetOrderQuery();

  React.useEffect(() => {
    if (orders && orders.length > 0) {
      setIsChecked(orders?.[0].isNotify);
      // добавить в стейт значение с сервера, как начальное
    } else {
      setIsChecked(false);
      // сброс состояния, если не найден заказ
    }
  }, [orders]);

  React.useEffect(() => {
    // моковый запрос для наглядности
    getOrder(mockNumber);
  }, []);

  const onSearchBtnClick = () => {
    const input = inputRef?.current as HTMLInputElement;
    const value = input.value.replace(/^# /, "");

    getOrder(value);
  };

  const order = orders?.[0];

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Form --> */}
        <form className={s.form}>
          <h2 className={`${s.formTitle} ${cs.sectionTitle}`}>Track your order</h2>

          <p className={s.formDescr}>
            This form allows you to search for tracking details from anywhere within Createx
            Tracking Service.
          </p>

          {/* <!-- FIeld --> */}
          <div className={s.formField}>
            <label htmlFor="track-form-input" className={s.formLabel}>
              Order No
            </label>

            <div className={s.formFieldWrapper}>
              <input
                ref={inputRef as React.MutableRefObject<HTMLInputElement>}
                type="text"
                className={`${s.formInput} ${cs.input}`}
                id="track-form-input"
                name="track-form-input"
                defaultValue={`# ${mockNumber}`}
              />

              <button
                onClick={onSearchBtnClick}
                type="button"
                className={`${s.formBtn} ${cs.btn} ${cs.btnLg}`}>
                Search
              </button>
            </div>
          </div>

          {/* <!-- Info --> */}
          {order && (
            <ul className={s.formInfo}>
              {/* <!-- Item1 --> */}
              <li className={s.formInfoItem}>
                <span className={s.formInfoName}>Order No:</span>
                <span className={s.formInfoData}>{order.number}</span>
              </li>

              {/* <!-- Item2 --> */}
              <li className={s.formInfoItem}>
                <span className={s.formInfoName}>Shiped via:</span>
                <span className={s.formInfoData}>{order.shipping}</span>
              </li>

              {/* <!-- Item3 --> */}
              <li className={s.formInfoItem}>
                <span className={s.formInfoName}>Shipped on:</span>
                <span className={s.formInfoData}>
                  {formatPlainDateTime(order.shippingDate, true)}
                </span>
              </li>

              {/* <!-- Item4 --> */}
              <li className={s.formInfoItem}>
                <span className={s.formInfoName}>Destination</span>
                <span className={s.formInfoData}>{order.destination}</span>
              </li>

              {/* <!-- Item5 --> */}
              <li className={s.formInfoItem}>
                <span className={s.formInfoName}>Expected date:</span>
                <span className={s.formInfoData}>{formatPlainDateTime(order.expectedDate)}</span>
              </li>

              {/* <!-- Item6 --> */}
              <li className={s.formInfoItem}>
                <span className={s.formInfoName}>Status:</span>
                <span className={s.formInfoData}>{order.status}</span>
              </li>
            </ul>
          )}

          {/* <!-- Notifier --> */}
          <div className={s.formNotifier}>
            <div
              onClick={() => setIsChecked((b) => !b)}
              className={`${s.formNotifierCheckbox} ${cs.customCheckbox} ${
                isChecked ? cs.customCheckboxChecked : ""
              }`}
              tabIndex={0}
              role="checkbox"
              aria-checked={isChecked ? "true" : "false"}>
              <Check aria-hidden="true" />

              <input type="hidden" name="track-form-checkbox" defaultValue="0" />

              <input
                type="checkbox"
                id="track-form-checkbox"
                name="track-form-checkbox"
                defaultValue="1"
                checked={isChecked}
                readOnly
                hidden
              />
            </div>

            <label htmlFor="track-form-checkbox" className={s.formNotifierText}>
              Notify me when order is delivered
            </label>
          </div>
        </form>
        {/* <!-- Chart --> */}
        {order && (
          <div className={s.chartWrapper}>
            <table className={s.chart}>
              <thead className={s.chartThead}>
                <tr className={s.chartTitles}>
                  <th className={s.chartTitle}>Status</th>
                  <th className={s.chartTitle}>Location</th>
                  <th className={s.chartTitle}>Date</th>
                  <th className={s.chartTitle}>Time</th>
                </tr>
              </thead>

              <tbody className={s.chartTbody}>
                {order.info.map((info, i) => (
                  <tr
                    key={i}
                    className={`${s.chartStage} ${info.timedate ? "" : s.chartStageMuted}`}>
                    <td className={s.chartInfo}>{info.status}</td>
                    <td className={s.chartInfo}>{info.location}</td>
                    <td className={s.chartInfo}>
                      {info.timedate && formatPlainDateTime(info.timedate)}
                    </td>
                    <td className={s.chartInfo}>
                      {info.timedate && formatPlainTime(info.timedate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {orders && orders.length === 0 && <TrackOrderNotFound />}
      </div>
    </section>
  );
};
