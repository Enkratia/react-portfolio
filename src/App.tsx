import React, { Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { CatalogPage, CheckoutPage, Home } from "./pages";

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
        <Route
          path=":object/:category"
          element={
            <Suspense fallback={"Loading ..."}>
              <CatalogPage />
            </Suspense>
          }
        />
        {/* <Route
          path="pizza/:id"
          element={
            <Suspense fallback={"Loading ..."}>
              <div>Cart</div>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={"Loading ..."}>
              <div>Cart</div>
            </Suspense>
          }
        /> */}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
