import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import { Paths } from "@shared";
const MainPage = lazy(() => import("./main"));


export const router = createBrowserRouter([
    {
      path: Paths.main,
      element: <MainPage/>
    }
  ]
)