const userId = localStorage.getItem("whatsDownUserId");
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
    const friends = 
      "<div class='friends' id='friends'>" +
      "</div>";  
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
    
    const friendInitialsElement = document.createElement("div");
    friendInitialsElement.setAttribute("class", "friend-initials");
    const friendInitials = friend.name.charAt(0) + friend.surname.charAt(0); 
    friendInitialsElement.innerHTML = friendInitials;
    friendContainer.appendChild(friendInitialsElement);

    const messageNameContainer = document.createElement("div");
    messageNameContainer.setAttribute("class", "friend-message-name-container");
    
    const friendMessage = document.createElement("div");
    friendMessage.setAttribute("class", "friend-recent-message");
    
    const friendName = document.createElement("div");
    friendName.setAttribute("class", "friend-name");
    friendName.innerHTML = `${friend.name} ${friend.surname}`;
    messageNameContainer.appendChild(friendName);
    messageNameContainer.appendChild(friendMessage);
    
    friendContainer.appendChild(messageNameContainer);
    friendsElement.appendChild(friendContainer);
  }

  updateLastMessage(message, friendId) {
    let messageElement = document.querySelector(`#friend-${friendId || message.ownerId} .friend-message-name-container .friend-recent-message`);
    if (!messageElement) {
      messageElement = document.querySelector(`#friend-${userId} .friend-message-name-container .friend-recent-message`);
    }
    const dateElement = document.createElement("div");
    dateElement.setAttribute("class", "friend-recent-message-date");
    dateElement.innerHTML = message.date;
    messageElement.innerHTML = message.message;
    messageElement.appendChild(dateElement);
  }
}
