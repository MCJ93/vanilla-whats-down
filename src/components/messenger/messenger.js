import messenger from "html-loader!../messenger/messenger.html";

export default class Messenger {
  setupComponent() {
    this._loadTemplate();
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    pageWrapper.innerHTML = messenger;
  }
}
