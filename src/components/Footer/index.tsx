import React from "react";
import { Link } from "react-router-dom";

import s from "./Footer.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Facebook, Heart, Instagram, Pinterest, Twitter, Youtube } from "../../iconComponents";

const links = [
  {
    help: [
      {
        name: "Delivery & returns",
        url: "/",
      },
      {
        name: "FAQ",
        url: "/",
      },
      {
        name: "Track order",
        url: "/",
      },
      {
        name: "Contacts",
        url: "/",
      },
      {
        name: "Blog",
        url: "/",
      },
    ],
  },
  {
    shop: [
      {
        name: "New arrivals",
        url: "/",
      },
      {
        name: "Trending now",
        url: "/",
      },
      {
        name: "Sales",
        url: "/",
      },
      {
        name: "Brands",
        url: "/",
      },
    ],
  },
];

const social = [
  {
    url: "/",
    name: "facebook",
    icon: <Facebook aria-hidden="true" />,
  },
  {
    url: "/",
    name: "instagram",
    icon: <Instagram aria-hidden="true" />,
  },
  {
    url: "/",
    name: "twitter",
    icon: <Twitter aria-hidden="true" />,
  },
  {
    url: "/",
    name: "youtube",
    icon: <Youtube aria-hidden="true" />,
  },
  {
    url: "/",
    name: "pinterest",
    icon: <Pinterest aria-hidden="true" />,
  },
];

type linkType = Record<string, string>;

export const Footer: React.FC = () => {
  return (
    <footer className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Footer main --> */}
        <div className={s.main}>
          {links.map((obj, i) => (
            <div key={i} className={s.links}>
              <h3 className={s.title}>{Object.keys(obj)}</h3>

              <ul className={s.list}>
                {[...Object.values(obj)][0].map((link: linkType, j: number) => (
                  <li key={j} className={s.item}>
                    <Link to={link.url} className={s.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <!-- Communication --> */}
          <div className={s.communication}>
            <h3 className={s.title}>Get in touch</h3>

            {/* Contacts */}
            <div className={s.contacts}>
              <div className={s.contact}>
                <span className={s.contactTitle}>Call:</span>

                <a href="tel:+4055550128" className={s.contactData}>
                  (405) 555-0128
                </a>
              </div>

              <div className={s.contact}>
                <span className={s.contactTitle}>Email:</span>

                <a href="mailto:hello@createx.com" className={s.contactData}>
                  hello@createx.com
                </a>
              </div>
            </div>

            {/* Social */}
            <ul className={`${s.social} ${cs.social}`}>
              {social.map((obj, i) => (
                <li key={i} className={cs.socialItem}>
                  <a
                    href={obj.url}
                    target="_blank"
                    className={cs.socialLink}
                    aria-label={`Go to our ${obj.name} page.`}>
                    {obj.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- Apps --> */}
          <div className={s.apps}>
            <h3 className={`${s.title} ${s.titleMargin}`}>Download our app</h3>

            <div className={s.btns}>
              <a
                href="#"
                target="_blank"
                className={`${s.btn} ${cs.btnApp} ${cs.btnAppApple}`}
                aria-label="Go to our App Store mobile application.">
                <span className={cs.btnAppSubtitle}>Download on the</span>
                <span className={cs.btnAppTitle}>App Store</span>
              </a>

              <a
                href="#"
                target="_blank"
                className={`${s.btn} ${cs.btnApp} ${cs.btnAppGoogle}`}
                aria-label="Go to our Google Play mobile application.">
                <span className={`${cs.btnAppSubtitle} ${cs.btnAppSubtitleGoogle}`}>Get it on</span>
                <span className={`${cs.btnAppTitle} ${cs.btnAppTitleGoogle}`}>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer copyright --> */}
      <div className={s.copyright}>
        <small className={`${s.copyrightText} ${cs.container} ${cs.container40}`}>
          &#169; All rights reserved. Made with
          <Heart aria-hidden="true" />
          by Createx Studio
        </small>
      </div>
    </footer>
  );
};
