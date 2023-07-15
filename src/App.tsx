import React, { Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="cart" element={<div>Cart</div>} /> */}
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
