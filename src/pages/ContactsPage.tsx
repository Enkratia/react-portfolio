import React from "react";
import { Breadcrumbs, SpecialOffers, Contacts } from "../components";

import cs from "../scss/global/_index.module.scss";

export const ContactsPage: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Contacts</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Contacts />
    </main>
  );
};
