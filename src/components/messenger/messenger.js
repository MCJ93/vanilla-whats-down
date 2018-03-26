import Friends from "../friends/friends";
import Messages from "../messages/messages";
import messenger from "html-loader!../messenger/messenger.html";

const messagesArray = [
  {
    userId: 0,
    messages: [
      {
        message: "Siema",
        owner: "You",
        date: "2018-03-25T12:00:00Z"
      },
      {
        message: "Cześć",
        owner: "NotYou",
        date: "2018-03-25T12:01:00Z"
      },
      {
        message: "Mam pytanie",
        owner: "You",
        date: "2018-03-25T12:01:10Z"
      },
      {
        message: "widziałeś jabłka tanie gdzieś?",
        owner: "You",
        date: "2018-03-25T12:01:40Z"
      },
      {
        message: "No pytam",
        owner: "You",
        date: "2018-03-25T12:02:30Z"
      },
      {
        message: "Nie",
        owner: "NotYou",
        date: "2018-03-25T12:02:50Z"
      }
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

const friendsList = [
  {
    "id": 0,
    "name": "John",
    "surname": "Cena",
    "initials": "JC",
    recentMessage: {
      message: "Nie",
      date: "2018-03-25T12:02:50Z"
    }
  },
  {
    "id": 1,
    "name": "Test123",
    "surname": "Ddadad",
    "initials": "TD"
  }
];

let userId = 0;
let messagesComponent = null;

export default class Messenger {
  setupComponent() {
    this._loadTemplate();
    document.getElementById("message-input").addEventListener("keydown", this._onKeyPress.bind(this));
    document.getElementById("send-button").addEventListener("click", this._onSend);
    const friendsComponent = new Friends(friendsList);
    messagesComponent = new Messages(messagesArray.find(messages => messages.userId === userId));
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
      message["owner"] =  "You";
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
    if (friendId !== userId) {
      messagesComponent = new Messages(messagesArray.find(messages => messages.userId === friendId));
      messagesComponent.setupComponent();
      userId = friendId;
    }
  }
}
