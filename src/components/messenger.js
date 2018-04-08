import Friends from "./friends";
import Messages from "./messages";
import { changeUrl } from "./router.js";
import { users } from "../apis/users";
import { messages as messagesArray } from "../apis/messages";

const userId = localStorage.getItem("whatsDownUserId");
let friendId = null;
let messagesComponent = null;
let friendsComponent = null;

export default class Messenger {
  setupComponent() {
    if (!localStorage.getItem("whatsDownAuth")) {
      changeUrl("login");
    }
    this._loadTemplate();
    document.getElementById("message-input").addEventListener("keydown", this._onKeyPress.bind(this));
    document.getElementById("send-button").addEventListener("click", this._onSend);
    this._setupFriendsComponent();
    this._setupMessagesComponent();
    this._displayLastMessages();
  }

  _setupFriendsComponent() {
    const userFriends = JSON.parse("[" + localStorage.getItem("whatsDownUserFriends") + "]");
    const mappedFriends = userFriends.map(friend => friend.toString());
    const friendsListIds = mappedFriends.filter(friend => {
      return users.find(user => user.id === friend);
    });
    const friends = users.filter(friend => friendsListIds.some(friendId => friendId === friend.id));
    friendsComponent = new Friends(friends);
    friendId = friends[0].id;

    friendsComponent.setupComponent();

    const friendsElement = document.getElementById("friends");
    friendsElement.addEventListener("click", function(e){
      if (e.target && e.target.id) {
        this._onFriendClick(e.target.id);
      }
    }.bind(this));
  }

  _setupMessagesComponent() {
    messagesComponent = new Messages(messagesArray.find(message => message.userIds.includes(userId)));
    messagesComponent.setupComponent();
  }

  _displayLastMessages() {
    const messages = messagesArray.filter(message => message.userIds.includes(userId));
    messages.map(messageObj => {
      const messagesLength = messageObj.messages.length;
      const friendId = messageObj.userIds.find(id => id !== userId);
      friendsComponent.updateLastMessage(messageObj.messages[messagesLength - 1], friendId);
    });
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
    const messenger = 
      "<div class='messenger-page' id='messenger-page'>" +
        "<div class='messenger-container'>" +
          "<div class='friends-container' id='friends-container'></div>" +
          "<div class='messages' id='messages'></div>" +
        "</div>" +
        "<div class='message-bar'>" +
          "<input type='text' id='message-input'>" +
          "<button id='send-button'>" +
           "Send" +
          "</button>" +
        "</div>" +
      "</div>";
    pageWrapper.innerHTML = messenger;
  }

  _onSend() {  
    const message = { message: document.getElementById("message-input").value };
    if (message) {
      message["ownerId"] =  userId;
      message["date"] = new Date();
      messagesArray.push(message);
      document.getElementById("message-input").value = null;
      messagesComponent._addMessage(message);
      friendsComponent.updateLastMessage(message, friendId);
    }
  }

  _onKeyPress(event) {
    if (event.code === "Enter") {
      this._onSend();
    }
  }

  _onFriendClick(friend) {
    const clickedFriendId = friend.slice(friend.indexOf("-") + 1);
    if (clickedFriendId !== friendId) {
      messagesComponent = new Messages((messagesArray.find(message => message.userIds.includes(clickedFriendId))));
      messagesComponent.setupComponent();
      friendId = clickedFriendId;
    }
  }
}
