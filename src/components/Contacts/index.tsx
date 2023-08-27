import React from "react";

import { ContactUs, ContactsFAQ, OutletStores } from "../../components";

import s from "./Contacts.module.scss";
import cs from "../../scss/global/_index.module.scss";

const tabNames = ["Contact Us", "Outlet Stores", "FAQ"];

export const Contacts: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <ul className={s.tabs} role="tablist">
          {tabNames.map((tabName, i) => (
            <li key={i} className={s.tabsItem} role="presentation">
              <h2 className={s.tabsTitle}>
                <button
                  onClick={() => setActiveTab(i)}
                  className={`${s.tabsTab} ${activeTab === i ? s.tabsTabActive : ""}`}
                  role="tab"
                  aria-selected={activeTab === i ? "true" : "false"}
                  aria-controls={`contacts-${i}`}>
                  {tabName}
                </button>
              </h2>
            </li>
          ))}
        </ul>

        <div className={s.content}>
          {activeTab === 0 ? <ContactUs /> : activeTab === 1 ? <OutletStores /> : <ContactsFAQ />}
        </div>
      </div>
    </section>
  );
};
