import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Account, Breadcrumbs, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

const accountPages = ["my-profile", "my-orders", "wishlist", "recently-viewed", "my-reviews"];

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [_, accountPage] = location.pathname.split("/").filter((path) => path !== "");

  React.useEffect(() => {
    if (!accountPages.includes(accountPage)) navigate("404");
  }, []);

  if (!accountPages.includes(accountPage)) return;

  return (
    <main>
      <h1 className={cs.srOnly}>Account</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Account />
    </main>
  );
};
