import friends from "html-loader!../friends/friends.html";

const friendsList = [
  {
    "id": 0,
    "name": "John",
    "surname": "Cena",
    "initials": "JC"
  },
  {
    "id": 1,
    "name": "Test123",
    "surname": "Ddadad",
    "initials": "TD"
  }
];

export default class Friends {
  setupComponent() {
    this._loadTemplate();
    this._loadFriends();
  }
  
  _loadTemplate() {
    const friendsContainer = document.getElementById("friends-container");
    friendsContainer.innerHTML = friends;
  }

  _loadFriends() {
    const friendsElement = document.getElementById("friends");
    friendsList.map(friend => this._loadFriend(friend, friendsElement));
  }

  _loadFriend(friend, friendsElement) {
    const friendContainer = document.createElement("div");
    friendContainer.setAttribute("class", "friend");
    friendContainer.setAttribute("id", `friend-${friend.id}`);
    
    const friendInitials = document.createElement("div");
    friendInitials.setAttribute("class", "friend-initials");
    friendInitials.innerHTML = friend.initials;
    friendContainer.appendChild(friendInitials);
    
    const friendName = document.createElement("div");
    friendName.setAttribute("class", "friend-name");
    friendName.innerHTML = `${friend.name} ${friend.surname}`;
    friendContainer.appendChild(friendName);

    friendsElement.appendChild(friendContainer);
  }
}