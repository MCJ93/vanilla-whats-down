let userId = null;
export default class Messages {
  constructor(data) {
    this.messagesArray = data.messages;
  }

  setupComponent() {
    this._loadTemplate();
    userId = localStorage.getItem("whatsDownUserId");
    this._loadMessages();
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("messages");
    pageWrapper.innerHTML = "";
  }

  _loadMessages() {
    this.messagesArray.map(message => {
      this._addMessage(message);
    });
  }

  _addMessage(message) {
    const messagesContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    const isUserMessageOwner = message.ownerId === userId;
    isUserMessageOwner ? messageElement.setAttribute("class", "message message-yours") : messageElement.setAttribute("class", "message");
    const formattedDate = this._formatDate(message.date) || "";
    messageElement.innerHTML = 
      message.message +
      "<div class='date'>" +
        formattedDate +
      "</div>";
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
