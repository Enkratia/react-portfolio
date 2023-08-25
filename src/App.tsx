import React, { Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import {
  AccountPage,
  CatalogPage,
  CheckoutPage,
  Home,
  NotFoundPage,
  SinglePostPage,
  SingleProductPage,
} from "./pages";
import { BlogPage } from "./pages/BlogPage";

const objects = ["women", "men", "girls", "boys"];

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

        {objects.map((object: string) => (
          <Route
            key={object}
            path={`${object}/:category`}
            element={
              <Suspense fallback={"Loading ..."}>
                <CatalogPage />
              </Suspense>
            }
          />
        ))}

        {objects.map((object: string, i) => (
          <Route
            key={object + i}
            path={`${object}/:category/:singleProductID`}
            element={
              <Suspense fallback={"Loading ..."}>
                <SingleProductPage />
              </Suspense>
            }
          />
        ))}

        <Route
          path={`account/:accountPage`}
          element={
            <Suspense fallback={"Loading ..."}>
              <AccountPage />
            </Suspense>
          }
        />

        <Route
          path={`fashion-blog`}
          element={
            <Suspense fallback={"Loading ..."}>
              <BlogPage />
            </Suspense>
          }
        />

        <Route
          path={`fashion-blog/:singlePostID`}
          element={
            <Suspense fallback={"Loading ..."}>
              <SinglePostPage />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense>
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
