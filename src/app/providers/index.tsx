import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "@remix-run/router/dist/router";
import { store } from "../store";

type Props = {
  router: Router
}

export const Providers = ({ router }: Props) => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}
