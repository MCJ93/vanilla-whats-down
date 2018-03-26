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
    const dateElement = document.createElement("div");
    const formattedDate = this._formatDate(message.date);
    if (formattedDate) {
      dateElement.innerHTML = formattedDate;
      dateElement.setAttribute("class", "date"); 
    }
    messageElement.innerHTML = message.message;
    messageElement.appendChild(dateElement);
    messagesContainer.appendChild(messageElement);
  }

  _formatDate(time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${(hours < 10 ? "0" : "") + hours}:
            ${(minutes < 10 ? "0" : "") + minutes}`;
  }
}
