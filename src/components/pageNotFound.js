export default class Messenger {
  setupComponent() {
    this._loadTemplate();
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    const pageNotFound = 
      "<h1>" +
        "404 :<" +
      "</h1>";
    pageWrapper.innerHTML = pageNotFound;
  }
}
