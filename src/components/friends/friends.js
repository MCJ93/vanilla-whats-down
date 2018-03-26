import friends from "html-loader!../friends/friends.html";

export default class Friends {
  constructor(data) {
    this.friendsList = data;
  }

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
    this.friendsList.map(friend => this._loadFriend(friend, friendsElement));
  }

  _loadFriend(friend, friendsElement) {
    const friendContainer = document.createElement("div");
    friendContainer.setAttribute("class", "friend");
    friendContainer.setAttribute("id", `friend-${friend.id}`);
    
    const friendInitials = document.createElement("div");
    friendInitials.setAttribute("class", "friend-initials");
    friendInitials.innerHTML = friend.initials;
    friendContainer.appendChild(friendInitials);

    const messageNameContainer = document.createElement("div");
    messageNameContainer.setAttribute("class", "frient-message-name-container");
    
    const friendMessage = document.createElement("div");
    friendMessage.setAttribute("class", "friend-recent-message");
    if (friend.recentMessage) {
      friendMessage.innerHTML = friend.recentMessage.message;
      messageNameContainer.appendChild(friendMessage);
    }
    
    const friendName = document.createElement("div");
    friendName.setAttribute("class", "friend-name");
    friendName.innerHTML = `${friend.name} ${friend.surname}`;
    messageNameContainer.appendChild(friendName);
    
    friendContainer.appendChild(messageNameContainer);
    friendsElement.appendChild(friendContainer);
  }
}
