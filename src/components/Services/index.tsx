import React from "react";

import s from "./Services.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Car, Woman, Shield, Cards } from "../../iconComponents";

const services = [
  {
    icon: <Car aria-hidden="true" />,
    title: "Fast Worldwide Shipping",
    subtitle: "Get free shipping over $250",
  },
  {
    icon: <Woman aria-hidden="true" />,
    title: "24/7 Customer Support",
    subtitle: "Friendly 24/7 customer support",
  },
  {
    icon: <Shield aria-hidden="true" />,
    title: "Money Back Guarantee",
    subtitle: "We return money within 30 days",
  },
  {
    icon: <Cards aria-hidden="true" />,
    title: "Secure Online Payment",
    subtitle: "Accept all major credit cards",
  },
];

export const Services: React.FC = () => {
  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Our services</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {services.map((obj, i) => (
          <React.Fragment key={i}>
            <div className={s.content}>
              {obj.icon}
              <p className={s.title}>{obj.title}</p>
              <span className={s.subtitle}>{obj.subtitle}</span>
            </div>

            <span className={s.divider} aria-hidden="true"></span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
