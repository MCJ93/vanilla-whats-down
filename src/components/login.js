import loginApi from "../apis/login";
import { changeUrl } from "./router.js";

export default class Login {
  setupComponent() {
    this._loadTemplate();
  }

  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    pageWrapper.innerHTML = "";
    const loginPage = document.createElement("div");
    loginPage.setAttribute("class", "login-page");
    loginPage.setAttribute("id", "login-page");
    loginPage.innerHTML =
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
      "</div>";

    document.addEventListener("click",function(e){
      if(e.target && e.target.id== "login-button"){
        this._handleLogin();
      }
    }.bind(this));
    pageWrapper.appendChild(loginPage);
  }

  _handleLogin() {
    const login = document.getElementById("login-input").value;
    const password = document.getElementById("password-input").value;
    const checkLogin = loginApi(login, password);
    if (checkLogin) {
      changeUrl("messenger");
    }
  }
}
