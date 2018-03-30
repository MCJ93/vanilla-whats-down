const users = [
  {
    id: "0",
    userName: "macjej",
    password: "test",
    friends: ["0", "1", "2", "3", "4"], //ids
    auth: null
  }
];

export default function checkLogin(login, password) {
  const user = users.find(user => user.userName === login && user.password === password);
  if (user) {
    const auth = generateAuth(user);  //WILL BE DONE ON BACKEND
    localStorage.setItem("whatsDownAuth", auth);
    localStorage.setItem("whatsDownUserName", user.userName);
    return user.id ;
  }
  return false;
}

function generateAuth(user) { //WILL BE DONE BACKEND
  const chars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890".split("");
  let auth ="";
  for(var i = 0; i < 20; i++) {
    auth += chars[(Math.floor(Math.random() * 36))];
  }
  user.auth = auth;
  return auth;
}
