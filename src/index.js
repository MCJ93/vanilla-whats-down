import "./index.scss";
import Router from "./router/router.js";

_setupPageWrapper();
_setupRouter();

function _setupPageWrapper() {
  const pageWrapper = document.createElement("div");
  pageWrapper.setAttribute("id", "page-wrapper");
  document.body.prepend(pageWrapper);
}

function _setupRouter() {
  const router = new Router();
  router.routeChangeHandler("login");
}
