import React from "react";

import s from "./ContactsFAQ.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const ContactsFAQ: React.FC = () => {
  return (
    <div className="contacts__content-faq contacts-faq" role="tabpanel">
      <ul className="contacts-faq__accordion">
        {/* <!-- Item1 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-1">
            <span className="contacts-faq__accordion-title">
              Do I need to register to place an order?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-1">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis.
            </div>
          </div>
        </li>

        {/* <!-- Item2 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-2">
            <span className="contacts-faq__accordion-title">
              What is the estimated delivery time?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-2">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              dolorem.
            </div>
          </div>
        </li>

        {/* <!-- Item3 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-3">
            <span className="contacts-faq__accordion-title">How can I pay for my order?</span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-3">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              culpa aliquid error nisi libero rem alias. Fuga porro possimus hic consectetur cum
              aliquid molestiae asperiores excepturi. Doloribus quae rerum at.
            </div>
          </div>
        </li>

        {/* <!-- Item4 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-4">
            <span className="contacts-faq__accordion-title">
              Can I get a refund if the price has changed since I ordered it?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-4">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis
              quae tempora consectetur dolores voluptate sed optio amet dolore vitae quas
              repudiandae, voluptatem consequatur eveniet est accusamus hic accusantium unde!
              Impedit cum autem id. Minus adipisci maxime eius sequi veritatis?
            </div>
          </div>
        </li>

        {/* <!-- Item5 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-5">
            <span className="contacts-faq__accordion-title">
              Do you refund delivery charges if I return something?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-5">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis.
            </div>
          </div>
        </li>

        {/* <!-- Item6 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-6">
            <span className="contacts-faq__accordion-title">
              What documents will be provided with the order?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-6">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis.
            </div>
          </div>
        </li>

        {/* <!-- Item7 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-7">
            <span className="contacts-faq__accordion-title">
              Can I return the order to the courier if anything does not suit me?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-7">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis. Lorem ipsum dolor sit amet.
            </div>
          </div>
        </li>

        {/* <!-- Item8 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-8">
            <span className="contacts-faq__accordion-title">
              What should I do if my order hasn't been delivered yet?
            </span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-8">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis.
            </div>
          </div>
        </li>

        {/* <!-- Item9 --> */}
        <li className="contacts-faq__accordion-item">
          <button
            className="contacts-faq__accordion-head"
            aria-expanded="false"
            aria-controls="contacts-accordion-body-9">
            <span className="contacts-faq__accordion-title">What is your Returns Policy?</span>

            <span className="contacts-faq__accordion-toggle c-toggle" aria-hidden="true"></span>
          </button>

          <div className="contacts-faq__accordion-body" id="contacts-accordion-body-9">
            <div className="contacts-faq__accordion-body-wrapper">
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
              dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa
              ac facilisis. Lorem ipsum dolor sit.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
