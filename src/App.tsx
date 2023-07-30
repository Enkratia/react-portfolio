import React, { Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { CatalogPage, CheckoutPage, Home, NotFoundPage } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="checkout"
          element={
            <Suspense fallback={"Loading ..."}>
              <CheckoutPage />
            </Suspense>
          }
        />
        {/* Catalog */}
        <Route
          path="women/:category"
          element={
            <Suspense fallback={"Loading ..."}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="men/:category"
          element={
            <Suspense fallback={"Loading ..."}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="girls/:category"
          element={
            <Suspense fallback={"Loading ..."}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="boys/:category"
          element={
            <Suspense fallback={"Loading ..."}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={"Loading ..."}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
