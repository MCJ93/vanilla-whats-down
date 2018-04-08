import loginApi from "../apis/login";
import { changeUrl } from "./router.js";

export default class Login {
  setupComponent() {
    this._loadTemplate();
    document.getElementById("login-button").addEventListener("click", this._handleLogin);
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    const login = 
      "<div id = 'login-page' class='login-page'>" +
        "<div class='field'>" +
          "Login:" +
          "<input type='text' id='login-input'>" +
        "</div>" +
        "<div class='field'>" +
          "Password:" +
          "<input type='password' id='password-input'>" +
        "</div>" +
        "<div class='field'>" +
          "<button id='login-button' class='button'>" +
            "Login" +
          "</button>" +
        "</div>" +
      "</div>";
    pageWrapper.innerHTML = login;
  }


  // _loadTemplate() {
  //   const pageWrapper = document.getElementById("page-content");
  //   const loginPage = document.createElement("div");
  //   loginPage.setAttribute("class", "login-page");
  //   loginPage.setAttribute("id", "login-page");
  //   loginPage.innerHTML =
  //     "<div class='field'>" +
  //       "Login:" +
  //       "<input type='text' id='login-input'>" +
  //     "</div>" +
  //     "<div class='field'>" +
  //       "Password:" +
  //       "<input type='password' id='password-input'>" +
  //     "</div>" +
  //     "<div class='field'>" +
  //       "<button id='login-button' class='button'>" +
  //         "Login" +
  //       "</button>" +
  //     "</div>";

  //   pageWrapper.innerHTML = loginPage;
  // }

  _handleLogin() {
    const login = document.getElementById("login-input").value;
    const password = document.getElementById("password-input").value;
    const checkLogin = loginApi(login, password);
    if (checkLogin) {
      changeUrl("messenger");
    }
  }
}
