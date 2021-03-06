import "./index.scss";
import { routeChangeHandler } from "./components/router.js";
import headerTemplate from "html-loader!./components/header/header.html";

_setupPageWrapper();
_setupHeader();
_setupContent();
_setupRouter();

function _setupPageWrapper() {
  const pageWrapper = document.createElement("div");
  pageWrapper.setAttribute("id", "page-wrapper");
  document.body.appendChild(pageWrapper);
}

function _setupHeader() {
  const pageWrapper = document.getElementById("page-wrapper");
  const header = document.createElement("div");
  header.setAttribute("id", "page-header");
  header.setAttribute("class", "page-header");
  header.innerHTML = headerTemplate;
  pageWrapper.appendChild(header);
}

function _setupContent() {
  const pageWrapper = document.getElementById("page-wrapper");
  const content = document.createElement("div");
  content.setAttribute("id", "page-content");
  content.setAttribute("class", "page-content");
  pageWrapper.appendChild(content);
}

function _setupRouter() {
  routeChangeHandler();
}

/*
  TODO:
  USERS MANAGEMENT, - DONE
  BETTER REDIRECTS (IT STARTS WITH 404), - DONE
  LOAD TEMPLATES IN JS FILE, - DONE
  RESEARCH USAGE OF "TEMPLATE" TAG - DONE
  BACKEND,
  ADD GUEST ACCOUNT ?,
  ADD DEFAULT BOT,
*/
