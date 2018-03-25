import messenger from "html-loader!../messenger/messenger.html";
import Friends from "../friends/friends";

const messagesArray = [
  {
    userId: 0,
    messages: [
      {message: "Siema", owner: "You"},
      {message: "Cześć", owner: "NotYou"},
      {message: "Mam pytanie", owner: "You"},
      {message: "widziałeś jabłka tanie gdzieś?", owner: "You"},
      {message: "No pytam", owner: "You"},
      {message: "Nie", owner: "NotYou"}
    ]
  },
  {
    userId: 1,
    messages: [
      {message: "Witaj", owner: "NotYou"},
      {message: "Halo", owner: "NotYou"},
      {message: "Hej", owner: "You"},
      {message: "Sorry, jadłem", owner: "You"},
      {message: "Okej", owner: "NotYou"},
      {message: "Co tam?", owner: "NotYou"}
    ]
  }, 
];

let userId = 0;

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

  _loadMessages(test) {
    console.log(test);
    messagesArray[userId].messages.map(message => {
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
