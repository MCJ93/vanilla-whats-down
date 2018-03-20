import login from "html-loader!../login/login.html";
import loginApi from "../../apis/login";
import Router from "../../router/router.js";

export default class Login {
  setupComponent() {
    this._loadTemplate();
    document.getElementById("login-button").addEventListener("click", this._handleLogin);
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    pageWrapper.innerHTML = login;
  }

  _handleLogin() {
    const login = document.getElementById("login-input").value;
    const password = document.getElementById("password-input").value;
    const checkLogin = new loginApi().checkLogin(login, password);
    if (checkLogin) {
      const router = new Router();
      router.changeUrl("messenger");
    }
  }
}
