import Friends from "../friends/friends";
import Messages from "../messages/messages";
import messenger from "html-loader!../messenger/messenger.html";
import { users } from "../../apis/users";
import { messages as messagesArray } from "../../apis/messages";

let userId = null;
let messagesComponent = null;

export default class Messenger {
  setupComponent() {
    this._loadTemplate();
    document.getElementById("message-input").addEventListener("keydown", this._onKeyPress.bind(this));
    document.getElementById("send-button").addEventListener("click", this._onSend);
    const userFriends = JSON.parse("[" + localStorage.getItem("whatsDownUserFriends") + "]");
    const mappedFriends = userFriends.map(friend => friend.toString());
    const friendsListIds = mappedFriends.filter(friend => {
      return users.find(user => user.id === friend);
    });
    const friends = users.filter(friend => friendsListIds.some(friendId => friendId === friend.id));
    const friendsComponent = new Friends(friends);
    userId = localStorage.getItem("whatsDownUserId");
    messagesComponent = new Messages((messagesArray.find(message => message.userIds.includes(userId))));
    friendsComponent.setupComponent();
    messagesComponent.setupComponent();
    const friendsElement = document.getElementById("friends");
    friendsElement.addEventListener("click", function(e){
      if (e.target && e.target.id) {
        this._onFriendClick(e.target.id);
      }
    }.bind(this));
  }
  
  _loadTemplate() {
    const pageWrapper = document.getElementById("page-content");
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
    }
  }

  _onKeyPress(event) {
    if (event.code === "Enter") {
      this._onSend();
    }
  }

  _onFriendClick(friend) {
    const friendId = parseInt(friend.slice(friend.indexOf("-") + 1));
    console.log(friendId);
    console.log(userId);
    if (friendId !== userId) {
      messagesComponent = new Messages((messagesArray.find(message => message.userIds.includes(userId))));
      messagesComponent.setupComponent();
      userId = friendId;
    }
  }
}
