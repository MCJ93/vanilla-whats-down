import messages from "html-loader!../messages/messages.html";

export default class Messages {
  constructor(data) {
    this.messagesArray = data.messages;
  }

  setupComponent() {
    this._loadTemplate();
    this._loadMessages();
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("messages");
    pageWrapper.innerHTML = messages;
  }

  _loadMessages() {
    this.messagesArray.map(message => {
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
