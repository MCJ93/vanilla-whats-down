import Login from "../components/login/login";
import Messenger from "../components/messenger/messenger";

export default class Router {
  routeChangeHandler(routeParam) {
    console.log(routeParam);
    switch(routeParam) {
    case "login":
      new Login().setupComponent();
      //Check how url can be changed. Right now after refresh it tries to find /login document;
      // window.history.replaceState("login", "Login", "/login");
      break;
    case "messenger":
      new Messenger().setupComponent();
      //Check how url can be changed. Right now after refresh it tries to find /login document;
      // window.history.replaceState("login", "Login", "/login");
      break;
    }
  }
}
