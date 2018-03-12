import login from "html-loader!../login/login.html";

export default class Login {
  setupComponent() {
    this._loadTemplate();
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    pageWrapper.innerHTML = login;
  }
}
