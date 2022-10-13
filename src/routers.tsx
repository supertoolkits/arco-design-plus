import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./app";
import loadable from "@loadable/component";

const LazyLoginPage = loadable(() => import("./pages/Login"));
const LazySignUpPage = loadable(() => import("./pages/SignUp"));
const LazyDashboardPage = loadable(() => import("./pages/Dashboard"));

export default function MainRouters(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LazyDashboardPage />} />
        </Route>
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/signup" element={<LazySignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
