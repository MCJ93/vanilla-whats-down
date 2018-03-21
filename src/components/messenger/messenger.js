import messenger from "html-loader!../messenger/messenger.html";
import Friends from "../friends/friends";

const messagesArray = [
  {message: "Test123", owner: "You"},
  {message: "Test1234", owner: "NotYou"},
  {message: "Tes3333323", owner: "You"},
  {message: "Tes535234", owner: "You"},
  {message: "T3353523", owner: "You"},
  {message: "Te35355234", owner: "NotYou"}, 
];

export default class Messenger {
  setupComponent() {
    this._loadTemplate();
    document.getElementById("message-input").addEventListener("keydown", this._onKeyPress.bind(this));
    document.getElementById("send-button").addEventListener("click", this._onSend);
    this._loadMessages();
    const friendsComponent = new Friends();
    friendsComponent.setupComponent();
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    pageWrapper.innerHTML = messenger;
  }
  
  _onSend() {  
    const message = { message: document.getElementById("message-input").value };
    if (message) {
      message["owner"] =  "You";
      messagesArray.push(message);
      document.getElementById("message-input").value = null;
      this._addMessage(message);
    }
  }

  _onKeyPress(event) {
    if (event.code === "Enter") {
      this._onSend();
    }
  }

  _loadMessages() {
    messagesArray.map(message => {
      this._addMessage(message);
    });
  }

  _addMessage(message) {
    const messagesContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    if (message.owner === "You") {
      messageElement.setAttribute("class", "message message-yours"); 
    } else {
      messageElement.setAttribute("class", "message"); 
    }
    messageElement.innerHTML = message.message;
    messagesContainer.appendChild(messageElement);
  }
}
