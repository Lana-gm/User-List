import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { GlobalStyles } from "./globalStyle.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
