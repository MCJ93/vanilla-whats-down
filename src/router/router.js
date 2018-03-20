import Login from "../components/login/login";
import Messenger from "../components/messenger/messenger";
import pageNotFound from "../components/pageNotFound/pageNotFound";

export default class Router {
  routeChangeHandler() {
    const pathName = window.location.pathname.slice(1);
    switch(pathName) {
    case "login":
      new Login().setupComponent();
      break;
    case "messenger":
      new Messenger().setupComponent();
      break;
    default:
      new pageNotFound().setupComponent();
    }
  }
  
  changePath(routeParam) {
    window.location.pathname = routeParam;
  }
}
